import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import LeftChevron from "../Icons/LeftChevron";
import styles from "./styles";

const BackButton = ({ params }: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CourseDetails" as never, params as never)
      }
      style={styles.containter}
    >
      <LeftChevron />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
