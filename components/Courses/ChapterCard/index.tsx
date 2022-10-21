/* eslint-disable import/extensions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Text, View, Image, Linking, ImageSourcePropType } from "react-native";
import { COLORS } from "../../../project.config";
import { SectionProps } from "../../content/types";
import StarIcon from "../../Icons/Star";
import styles from "./styles";

const ChapterCard = (chapter: SectionProps) => {
  return (
    <>
      {/* Chapter */}
      <Text style={styles.headingText}>{chapter.chapterHeading}</Text>
      {/* Heading */}
      {!!chapter?.title && (
        <View style={styles.titleContainer}>
          <StarIcon />
          <Text style={styles.titleText}>{chapter.title}</Text>
        </View>
      )}
      {/* Content */}
      <Text style={styles.summaryText}>{chapter.summary}</Text>

      {!!chapter.bulletSection &&
        chapter.bulletSection.map((each, idx) => {
          return (
            <View key={idx}>
              {!!each.bulletHeading && (
                <Text style={styles.bulletHeadingText}>
                  {each.bulletHeading}
                </Text>
              )}
              {each.bulletpoints?.map((point, index) => {
                return (
                  <View key={index} style={styles.bulletPointsContainer}>
                    <Text style={styles.bulletPoint}>{"\u2022"}</Text>
                    <Text style={styles.bulletPointText}>{point}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      {!!chapter?.media &&
        chapter.media.map((media, index) => {
          // eslint-disable-next-line import/no-dynamic-require, import/no-dynamic-require
          return (
            <Image
              key={index}
              source={media as ImageSourcePropType}
              style={{
                width: 730,
                height: 1000,
                resizeMode: "contain",
                marginTop: 50,
              }}
            />
          );
        })}
      {!!chapter?.videoLinks &&
        chapter.videoLinks.map((videoLink, index) => {
          return (
            <Text
              key={index}
              style={{
                color: COLORS.primary,
                marginLeft: 25,
                marginTop: 20,
                fontSize: 25,
                textDecorationStyle: "solid",
                textDecorationLine: "underline",
                textDecorationColor: COLORS.primary,
              }}
              onPress={() => Linking.openURL(videoLink.link)}
            >
              {videoLink.description}
            </Text>
          );
        })}
    </>
  );
};

export default ChapterCard;
