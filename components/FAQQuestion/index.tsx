import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import LeftChevron from "../Icons/LeftChevron";
// eslint-disable-next-line import/extensions
import { COLORS } from "../../project.config";

const FAQQuestion = ({ route }: any) => {
  const { brand, item } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backContainer}>
            <LeftChevron fill={COLORS.primary} />
            <Text style={styles.text}> Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          {brand}
          <View style={styles.innerContentContainer}>
            <Text style={styles.question}>
              {item.question && item.question}
            </Text>
            <Text style={styles.answer}>{item.answer && item.answer}</Text>
            <Text style={styles.text}>{item.bullets}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FAQQuestion;
