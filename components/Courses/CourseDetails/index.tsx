/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../project.config";
import Button from "../../Button";
import COURSE_DATA from "../../content";
import { BrandProps, LOGO } from "../../content/types";
import Icon from "../../Icons/Icon";
import Star from "../../Icons/Star";
import NotesButton from "../../NotesButton";
import Select from "../../Select";
import ChapterCard from "../ChapterCard";
import NextButton from "../NextButton";
import Recap from "../Recap";
import styles from "./styles";

const CourseDetails = ({ route }: any) => {
  const {
    course,
    chapter,
    section,
  }: { course: number; chapter: number; section: number } = route.params;
  const courseData: BrandProps[] | undefined = COURSE_DATA?.[course]?.content;

  const icon = COURSE_DATA?.[course]?.logo as LOGO;

  const dimensions = Dimensions.get("window");
  const isTablet = dimensions.width >= 768;

  const [sectionData, setSectionData] = useState({
    data: courseData?.[section],
    idx: section,
  });
  const [isRecap, setIsRecap] = useState<boolean>(false);
  const [currentButton, setCurrentButton] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(chapter || 0);
  const [chapterCoords, setChapterCoords] = useState<any[]>([]);
  const [buttonCoords, setButtonCoords] = useState<any[]>([]);
  const favorites: any[] = [];

  const scrollRef = useRef<any>();
  const buttonRef = useRef<any>();

  const isFocused = useIsFocused();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const onPressNextButton = () => {
    if (isRecap || !sectionData?.data?.recap) {
      setSectionData({
        data: courseData?.[sectionData.idx + 1],
        idx: sectionData.idx + 1,
      });
      setCurrentChapter(0);
      setCurrentButton(0);
      setIsRecap(false);
    } else {
      setCurrentChapter(sectionData.data.content.length);
      setIsRecap(true);
    }

    scrollRef?.current ? onPressTouch() : setTimeout(onPressTouch, 50);
    buttonRef?.current?.scrollTo({
      x: 0,
      animated: true,
    });
  };

  const handleSelect = (value: { data: BrandProps; idx: number }) => {
    setSectionData(value);
    setIsRecap(false);
    setCurrentChapter(0);
    setCurrentButton(0);
  };

  // Go to the chapter when the chapter button is clicked
  useEffect(() => {
    scrollRef.current.scrollTo({
      y: !isRecap ? chapterCoords[currentChapter] : chapterCoords[0],
    });
    buttonRef.current.scrollTo({ x: buttonCoords[currentChapter] });
  }, [buttonCoords, chapterCoords, currentChapter, isRecap]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          {!!icon && <Icon icon={icon} width={150} />}
        </View>
        {/* Sections Selector and Chapter Buttons */}
        <View style={styles.navigationContainer}>
          <View style={styles.selectContainer}>
            <Text style={styles.selectText}>Section</Text>

            {/* Section Dropdown */}
            <Select
              onSelect={handleSelect}
              options={courseData}
              selected={sectionData?.data?.section || ""}
            />
          </View>
          <View style={{ width: isTablet ? 33 : 0 }} />
          <View style={styles.chapterContainer}>
            <Text style={styles.chapterText}>Chapters</Text>

            {/* Chapter buttons */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={buttonRef}
            >
              {sectionData?.data?.content?.map(
                (sectionChapter: any, idx: number) => {
                  const buttonText =
                    sectionChapter?.title || sectionChapter?.chapterHeading;
                  return (
                    <View
                      // eslint-disable-next-line react/no-array-index-key
                      key={idx}
                      style={styles.recapButtonContainer}
                      onLayout={(event) => {
                        const coords: any[] = [...buttonCoords];
                        const { layout } = event.nativeEvent;
                        coords[idx] = layout.x;
                        setButtonCoords(coords);
                      }}
                    >
                      <Button
                        label={buttonText}
                        onPress={() => {
                          setIsRecap(false);
                          setCurrentChapter(idx);
                          setCurrentButton(idx);
                        }}
                        selected={!isRecap && currentButton === idx}
                      />
                    </View>
                  );
                }
              )}
              {!!sectionData?.data?.recap?.length && (
                <View
                  onLayout={(event) => {
                    const coords: any[] = [...buttonCoords];
                    const { layout } = event.nativeEvent;
                    coords[sectionData?.data?.content?.length || 0] = layout.x;
                    setButtonCoords(coords);
                  }}
                >
                  <Button
                    label="Recap"
                    onPress={() => {
                      setCurrentChapter(
                        sectionData?.data?.content?.length || 0
                      );
                      setIsRecap(true);
                    }}
                    selected={isRecap}
                  />
                </View>
              )}
            </ScrollView>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewContentContainer}
          ref={scrollRef}
          onScrollEndDrag={(event) => {
            const scrollY = event.nativeEvent.contentOffset.y;
            const coords = chapterCoords.findIndex(
              (each, idx) =>
                (idx === 0 && chapterCoords[idx + 1] > scrollY) ||
                (each <= scrollY && chapterCoords[idx + 1] > scrollY)
            );
            setCurrentButton(coords);
          }}
        >
          <View style={styles.contentContainer}>
            {isRecap ? (
              <Recap
                data={sectionData?.data}
                course={course}
                section={sectionData.idx}
              />
            ) : (
              <>
                {/* Favorites */}
                {favorites?.length ? (
                  <>
                    <View style={styles.favoritesContainer}>
                      <Star fill={COLORS.primary} />
                      <Text style={styles.favoritesHeadingText}>
                        My favorites
                      </Text>
                    </View>
                    <View>{favorites.map(() => null)}</View>
                  </>
                ) : null}
                {/* Content */}
                <View style={styles.contentCardContainer}>
                  {!!sectionData &&
                    sectionData?.data?.content?.map(
                      (sectionChapter: any, idx: number) => {
                        return (
                          <View
                            style={styles.chapterCardContainer}
                            key={idx}
                            onLayout={(event) => {
                              const coords: any[] = [...chapterCoords];
                              const { layout } = event.nativeEvent;
                              coords[idx] = layout.y;
                              setChapterCoords(coords);
                            }}
                          >
                            <ChapterCard {...sectionChapter} />
                          </View>
                        );
                      }
                    )}
                </View>
              </>
            )}
            <View style={styles.nextButtonContainer}>
              {/* Next Button */}
              <NextButton
                onPress={onPressNextButton}
                label={
                  !!isRecap || !sectionData?.data?.recap
                    ? "Next Section"
                    : "Recap"
                }
                subheading={
                  isRecap || !sectionData?.data?.recap
                    ? courseData?.[sectionData.idx + 1]?.section
                    : sectionData?.data?.section
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <NotesButton />
    </View>
  );
};

export default CourseDetails;
