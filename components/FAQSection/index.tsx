import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import RightChevron from "../Icons/RightChevron";
import { FAQProps } from "../FAQContent/types";

const FAQSection = ({ route }: any) => {
  const navigation = useNavigation();
  const { brand, content } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.styledHeader}>Frequently Asked</Text>
        <Text style={styles.styledHeader}>Questions</Text>
      </View>

      <ScrollView>
        <View style={styles.sectionContainer}>
          <View style={styles.headerContainer}>{brand}</View>
          {content.map((item: FAQProps) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  "FAQQuestion" as never,
                  { item, brand } as never
                )
              }
            >
              <View>
                <View style={styles.contentContainer}>
                  <View style={styles.width}>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={2}
                      style={styles.text}
                    >
                      {item.question}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <RightChevron width={10} height={15} fill="#A79E70" />
                  </TouchableOpacity>
                </View>
                <View style={styles.border} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQSection;
