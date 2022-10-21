/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, TABLET_TYPOGRAPHY } from "../../project.config";
import { RecapProps } from "../content/types";
import LightningBolt from "../Icons/LightningBolt";
import RightArrowWide from "../Icons/RightArrowWide";
import RightChevron from "../Icons/RightChevron";

const Recap = ({ data, course, section }: any) => {
  const navigation = useNavigation();
  const dimensions = Dimensions.get("window");
  const isTablet = dimensions.width >= 768;

  return (
    <View>
      <Text
        style={{ ...TABLET_TYPOGRAPHY.h1, fontWeight: "700", maxWidth: 300 }}
      >
        Let’s recap what we’ve learned.
      </Text>
      <View style={{ height: 50 }} />
      {data?.recap?.map(
        (each: RecapProps, idx: React.Key | null | undefined) => {
          return (
            <View
              key={idx}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: COLORS.gray.lighterBlack,
                marginBottom: 50,
                paddingBottom: 50,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {!!each.summary && <LightningBolt />}
                <Text
                  style={{
                    ...TABLET_TYPOGRAPHY.h3,
                    color: COLORS.primary,
                    marginLeft: 19,
                    fontWeight: "700",
                  }}
                >
                  {each.heading}
                </Text>
              </View>
              <View style={{ margin: 30 }}>
                <Text
                  style={{
                    ...TABLET_TYPOGRAPHY.sectionTitle,
                    fontWeight: "700",
                  }}
                >
                  {each.summary}
                </Text>
                {each?.researchContent?.map((research, i) => {
                  return (
                    <TouchableOpacity
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: 30,
                      }}
                      key={i}
                      onPress={() => {
                        navigation.navigate(
                          "ResearchPage" as never,
                          {
                            course,
                            section,
                            chapter: idx,
                            researchIdx: i,
                          } as never
                        );
                      }}
                    >
                      <Text
                        style={{
                          ...TABLET_TYPOGRAPHY.h2,
                          overflow: "hidden",
                          width: 800,
                        }}
                        numberOfLines={2}
                      >
                        {research.researchTitle}
                      </Text>
                      <RightChevron
                        fill={COLORS.primary}
                        height={25}
                        width={35}
                      />
                    </TouchableOpacity>
                  );
                })}
                {each.mainPoints?.map(
                  (point: any, idx: React.Key | null | undefined) => (
                    <View key={idx}>
                      <View style={{ height: 50 }} />
                      <View style={{ flexDirection: "row" }}>
                        <RightArrowWide fill={COLORS.primary} />
                        <View style={{ width: 24 }} />
                        <Text
                          style={{
                            ...TABLET_TYPOGRAPHY.h2,
                            fontWeight: "500",
                            color: COLORS.tGray[5],
                          }}
                        >
                          {point.main}
                        </Text>
                      </View>
                      {point?.bulletPoints?.map(
                        (bullet: any, idx: React.Key | null | undefined) => (
                          <Text
                            style={{
                              ...TABLET_TYPOGRAPHY.paragraph,
                              color: COLORS.tGray[5],
                              marginLeft: 50,
                              lineHeight: 24,
                            }}
                            key={idx}
                          >
                            {bullet}
                          </Text>
                        )
                      )}
                    </View>
                  )
                )}
                {each?.media?.map((media, i) => {
                  return (
                    <Image
                      key={i}
                      source={media}
                      style={{
                        alignSelf: !isTablet ? "center" : undefined,
                        width: isTablet ? 680 : 400,
                        height: isTablet ? 1000 : 400,
                        resizeMode: "contain",
                        marginTop: 50,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          );
        }
      )}
    </View>
  );
};

export default Recap;
