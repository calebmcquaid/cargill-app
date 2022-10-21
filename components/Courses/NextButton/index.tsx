/* eslint-disable react/require-default-props */
import React from "react";
import { Pressable, Text, View } from "react-native";
import NextCircle from "../../Icons/NextCircle";
import styles from "./styles";

export interface NextButtonProps {
  onPress: () => void;
  label: string;
  subheading?: string;
}

const NextButton = ({ onPress, label, subheading }: NextButtonProps) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.labelText}>{label}</Text>
          <Text style={styles.subheadingText}>{subheading}</Text>
        </View>
        <View style={{ flexGrow: 1 }} />
        <NextCircle />
      </View>
    </Pressable>
  );
};

export default NextButton;
