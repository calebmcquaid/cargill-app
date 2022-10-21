/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import COURSE_DATA from "../../components/content";
import FavoritesCard from "../../components/StyledFavoritesCard";

const Favorites = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.styledHeader}>My</Text>
          <Text style={styles.styledHeader}>favorites</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.sectionText}>Most Recent</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                "FavoritesSection" as never,
                {
                  Title: "Recent",
                  COURSE_DATA,
                } as never
              );
            }}
          >
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={styles.cardWrapper}>
            {COURSE_DATA.map((each: any, index: any) => (
              <FavoritesCard {...each} key={index} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.rowContainer}>
          <Text style={styles.sectionText}>Brand Favorites</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                "FavoritesSection" as never,
                { COURSE_DATA, Title: "Brand" } as never
              );
            }}
          >
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={styles.cardWrapper}>
            {COURSE_DATA.map((each: any, index: any) => (
              <FavoritesCard {...each} key={index} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.rowContainer}>
          <Text style={styles.sectionText}>Media Favorites</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                "FavoritesSection" as never,
                { COURSE_DATA, Title: "Media" } as never
              );
            }}
          >
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={styles.cardWrapper}>
            {COURSE_DATA.map((each: any, index: any) => (
              <FavoritesCard {...each} key={index} />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
export default Favorites;
