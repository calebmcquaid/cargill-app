import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SearchCardProps } from "../content/types";
import Icon from "../Icons/Icon";
import styles from "./styles";

const SearchCard: React.FunctionComponent<SearchCardProps> = ({
  chapterHeading,
  course,
  summary,
  navigation,
  courseName,
}) => {
  const chapterNumber = chapterHeading.match(/\d+/g)?.[0];

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          "CourseDetails" as never,
          { course, chapter: chapterNumber } as never
        )
      }
      style={styles.mainContainer}
    >
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Icon icon={courseName} width={70} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{chapterHeading}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{summary}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
