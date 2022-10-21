import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  FAQ_ONE_TRAK_CONTENT,
  FAQ_RAMP_CONTENT,
  FAQ_SWEET_BRAN_CONTENT,
} from "../../components/FAQContent";
import OneTrakLogo from "../../components/Icons/OneTrakLogo";
import RampLogo from "../../components/Icons/RampLogo";
import RightChevron from "../../components/Icons/RightChevron";
import SweetbranLogo from "../../components/Icons/SweetbranLogo";
import styles from "./styles";
import { FAQProps } from "../../components/FAQContent/types";

const FAQs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.styledHeader}>Frequently Asked</Text>
        <Text style={styles.styledHeader}>Questions</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Most common questions</Text>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text>Lorem Ipsum</Text>
          </View>
        </TouchableOpacity>
        {/* each section */}
        <ScrollView
          style={styles.questionsContainer}
          contentContainerStyle={{
            height: "115%",
            paddingBottom: 125,
          }}
        >
          <View style={styles.sectionContainer}>
            <View style={styles.headerContainer}>
              <OneTrakLogo />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(
                    "FAQSection" as never,
                    {
                      screen: "FAQSection",
                      content: FAQ_ONE_TRAK_CONTENT,
                      brand: <OneTrakLogo />,
                    } as never
                  );
                }}
              >
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            {FAQ_ONE_TRAK_CONTENT.slice(0, 3).map((question) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "FAQQuestion" as never,
                    {
                      brand: <OneTrakLogo />,
                      item: question as FAQProps,
                    } as never
                  )
                }
              >
                <View key={question.id}>
                  <View style={styles.contentContainer}>
                    <View style={styles.width}>
                      <Text
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={styles.text}
                      >
                        {question.question}
                      </Text>
                    </View>
                    <RightChevron fill="#A79E70" />
                  </View>
                  <View style={styles.border} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.headerContainer}>
              <SweetbranLogo />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "FAQSection" as never,
                    {
                      content: FAQ_SWEET_BRAN_CONTENT,
                      brand: <SweetbranLogo />,
                    } as never
                  )
                }
              >
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            {FAQ_SWEET_BRAN_CONTENT.slice(0, 3).map((question) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "FAQQuestion" as never,
                    {
                      brand: <SweetbranLogo />,
                      item: question as FAQProps,
                    } as never
                  )
                }
              >
                <View key={question.id}>
                  <View style={styles.contentContainer}>
                    <View style={styles.width}>
                      <Text
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={styles.text}
                      >
                        {question.question}
                      </Text>
                    </View>
                    <RightChevron fill="#A79E70" />
                  </View>
                  <View style={styles.border} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.headerContainer}>
              <RampLogo />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "FAQSection" as never,
                    {
                      brand: <RampLogo />,
                      content: FAQ_RAMP_CONTENT,
                    } as never
                  )
                }
              >
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            {FAQ_RAMP_CONTENT.slice(0, 3).map((question) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "FAQQuestion" as never,
                    {
                      brand: <RampLogo />,
                      item: question as FAQProps,
                    } as never
                  )
                }
              >
                <View key={question.id}>
                  <View style={styles.contentContainer}>
                    <View style={styles.width}>
                      <Text
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={styles.text}
                      >
                        {question.question}
                      </Text>
                    </View>
                    <RightChevron fill="#A79E70" />
                  </View>
                  <View style={styles.border} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default FAQs;
