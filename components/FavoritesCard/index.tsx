/* eslint-disable import/extensions */
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { COLORS, TABLET_TYPOGRAPHY, TYPOGRAPHY } from "../../project.config";
import { LOGO } from "../content/types";
import COURSE_DATA from "../HomePage/utils";
import Icon from "../Icons/Icon";
import RightArrow from "../Icons/RightArrow";
import StarIcon from "../Icons/Star";
import styles from "./styles";

export interface FavoritesDataType {
  uid: string;
  date: string;
  type: string;
  courseId: string | null;
  sectionId: string | null;
  chapterId: string | null;
  mediaFile: string | null;
  noteId: string | null;
}

export interface FavoritesPropType {
  favorite: FavoritesDataType;
  hasHeader: boolean;
}

const FavoritesCard = ({ favorite, hasHeader = true }: FavoritesPropType) => {
  const courseData = COURSE_DATA.find(
    (each) => favorite.courseId === each.courseId
  );
  const icon = courseData?.logo as LOGO;
  const sectionData = courseData?.content?.find(
    (each: { section: string | null }) => each.section === favorite.sectionId
  );
  const content = sectionData?.content?.find(
    (each) => each.title === favorite.chapterId
  );

  const dimensions = Dimensions.get("window");
  const isTablet = dimensions.width >= 768;

  return (
    <View style={styles.mainContainer}>
      {!!hasHeader && (
        <View style={styles.headerContainer}>
          <StarIcon fill={COLORS.pureWhite} height={30} width={32} />
          <View style={styles.iconContainer}>
            {!!icon && <Icon icon={icon} width={70} />}
          </View>
        </View>
      )}
      {/* Notes */}
      {!!favorite.noteId && (
        <View>
          <Text
            style={{ ...(isTablet ? TABLET_TYPOGRAPHY.h3 : TYPOGRAPHY.h4) }}
          >
            Notes
          </Text>
        </View>
      )}
      {/* Media */}
      {!!favorite.mediaFile && (
        <View>
          <Text
            style={{ ...(isTablet ? TABLET_TYPOGRAPHY.h3 : TYPOGRAPHY.h4) }}
          >
            MEDIA
          </Text>
        </View>
      )}

      {/* Chapter */}
      {!!favorite.chapterId && (
        <View
          style={{
            height: hasHeader ? "80%" : "100%",
          }}
        >
          <View style={{ justifyContent: "center", flexGrow: 1 }}>
            <Text
              style={{
                ...(isTablet
                  ? TABLET_TYPOGRAPHY.paragraph
                  : TYPOGRAPHY.paragraph),
                marginBottom: 10,
              }}
            >
              Chapter
            </Text>
            <Text
              style={{
                ...(isTablet ? TABLET_TYPOGRAPHY.h3 : TYPOGRAPHY.h4),
                fontWeight: "700",
                marginBottom: 6,
              }}
              numberOfLines={2}
            >
              {content?.title}
            </Text>
            <Text
              style={{
                ...(isTablet
                  ? TABLET_TYPOGRAPHY.paragraph
                  : TYPOGRAPHY.paragraph),
              }}
              numberOfLines={3}
            >
              {content?.summary}
            </Text>
          </View>
          <View style={styles.touchableContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("PRESSED: ", favorite.chapterId)}
            >
              <Text style={styles.buttonText}>View</Text>
              <RightArrow />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default FavoritesCard;
