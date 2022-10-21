import React from "react";
import { Dimensions, Text, View } from "react-native";
import { CourseProps } from "../content/types";
import Icon from "../Icons/Icon";
import RightArrow from "../Icons/RightArrow";
import styles from "./styles";

const Card: React.FunctionComponent<CourseProps> = ({
  logo,
  header,
  description,
  numOfSections,
  progress,
}) => {
  const dimensions = Dimensions.get("window");
  const isTablet = dimensions.width >= 768;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Icon icon={logo} width={`${isTablet ? "70%" : "65%"}`} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{header}</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          </View>
          {/* Sections */}
          <View style={styles.sectionsContainter}>
            <Text style={styles.numSectionsText}>{numOfSections}</Text>

            <Text style={styles.sectionsText}>sections</Text>
          </View>
        </View>
      </View>
      {/* Progress Bar and continue button */}
      <View style={styles.progressBarContainer}>
        <View
          style={{
            flexGrow: 1,
            backgroundColor: "#828282",
            height: 5,
            marginRight: 10,
            position: "relative",
            opacity: progress ? 1 : 0,
          }}
        />
        <View
          style={{
            width: `${(progress / numOfSections) * 100}%`,
            zIndex: 10,
            backgroundColor: "#A79E70",
            height: 5,
            marginRight: 10,
            position: "absolute",
          }}
        />

        <Text style={styles.progressText}>
          {progress ? "Continue" : "Begin"}
        </Text>
        <RightArrow />
      </View>
    </View>
  );
};

export default Card;
