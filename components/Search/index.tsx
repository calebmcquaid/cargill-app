import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";
import Fuse from "fuse.js";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

import {
  CONSISTENCY_SECTION_CONTENT,
  OPERATIONAL_SECTION_CONTENT,
  OVERVIEW_SECTION_CONTENT,
  PERFORMANCE_SECTION_CONTENT,
  RUMEN_SECTION_CONTENT,
  SERVICE_SECTION_CONTENT,
} from "../content/oneTrak/Sections";
import SearchCard from "../SearchCard";
import ONE_TRAK_CONTENT from "../content/oneTrak";
import { LOGO } from "../content/types";
// eslint-disable-next-line import/extensions
import { COLORS, TABLET_TYPOGRAPHY } from "../../project.config";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const list = [
    ...CONSISTENCY_SECTION_CONTENT,
    ...OPERATIONAL_SECTION_CONTENT,
    ...OVERVIEW_SECTION_CONTENT,
    ...PERFORMANCE_SECTION_CONTENT,
    ...RUMEN_SECTION_CONTENT,
    ...SERVICE_SECTION_CONTENT,
  ];
  const options = {
    isCaseSensitive: false,
    minMatchCharLength: 3,
    threshold: 0.5,
    keys: [["summary"]],
  };

  const fuse = new Fuse(list, options);

  const navigation = useNavigation();

  const searchResults = fuse.search(searchInput).map((searchItem) => {
    const regex = new RegExp(`.{0,50}(?:${searchInput}).{0,50}`, "gi");
    const trimmedSummary = searchItem?.item?.summary?.match(regex);
    let courseContent;
    if (list.includes(searchItem.item)) {
      courseContent = ONE_TRAK_CONTENT;
    }

    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 500,
        }}
      >
        {searchItem?.item?.summary ? (
          <SearchCard
            navigation={navigation}
            chapterHeading={searchItem?.item.chapterHeading}
            summary={`...${trimmedSummary?.[0]}...`}
            course={courseContent}
            courseName={LOGO.oneTrak}
          />
        ) : null}
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={searchInput}
        onChangeText={setSearchInput}
        style={{
          width: "75%",
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: 7,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: "75%",
          height: "120%",
          paddingTop: 100,
          paddingBottom: 125,
        }}
        showsVerticalScrollIndicator={false}
      >
        {searchResults.length ? (
          searchResults
        ) : (
          <Text
            style={{
              ...TABLET_TYPOGRAPHY.h2,
              color: COLORS.pureWhite,
              marginTop: -150,
            }}
          >
            No results
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
