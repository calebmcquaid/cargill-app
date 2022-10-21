/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, TABLET_TYPOGRAPHY } from "../../project.config";
import BackButton from "../BackButton";
import COURSE_DATA from "../content";
import Icon from "../Icons/Icon";
import ResearchTable from "./Table";

const ResearchPage = ({ route }: any) => {
  const { course, chapter, section, researchIdx } = route.params;
  const icon = COURSE_DATA?.[course]?.logo;
  console.log({ course, chapter, section, researchIdx });
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.background,
        minHeight: "100%",
        paddingTop: 110,
      }}
    >
      <BackButton params={{ course, chapter, section }} />
      <View
        style={{
          paddingLeft: 50,
          paddingBottom: 50,
        }}
      >
        {!!icon && <Icon icon={icon} width={70} />}
      </View>
      <ScrollView
        style={{
          backgroundColor: COLORS.background,
          minHeight: "100%",
          // paddingBottom: 100,
        }}
      >
        <View
          style={{
            paddingLeft: 50,
          }}
        >
          <Text
            style={{
              ...TABLET_TYPOGRAPHY.paragraph,
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            {
              COURSE_DATA?.[course]?.content?.[section]?.recap?.[chapter]
                ?.researchContent?.[researchIdx]?.researchTitle
            }
          </Text>
          <Text style={{ ...TABLET_TYPOGRAPHY.paragraph }}>
            {
              COURSE_DATA?.[course]?.content?.[section]?.recap?.[chapter]
                ?.researchContent?.[researchIdx]?.researchSummary
            }
          </Text>
        </View>
        <View style={{ height: 50 }} />
        {COURSE_DATA?.[course]?.content?.[section]?.recap?.[
          chapter
        ]?.researchContent?.[researchIdx]?.table?.map((tableData, idx) => (
          <ResearchTable {...tableData} key={idx} />
        ))}
        <View style={{ height: 200 }} />
      </ScrollView>
    </View>
  );
};

export default ResearchPage;
