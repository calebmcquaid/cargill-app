/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Card from "../../components/Card";
import COURSE_DATA from "../../components/content";
import styles from "./styles";

const CoursesPage = () => {
  const navigation = useNavigation();

  // Replace these values with user progress values.
  const section = 0;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Brand Resource Guide</Text>
      <ScrollView>
        {COURSE_DATA.map((each, idx) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  "CourseDetails" as never,
                  { course: idx, section } as never
                )
              }
              key={idx}
            >
              <Card {...each} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CoursesPage;
