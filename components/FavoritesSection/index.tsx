/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { View, Text, ScrollView } from "react-native";
import FavoritesCard from "../StyledFavoritesCard";
import styles from "./styles";

const FavoritesSection = ({ route }: any) => {
  const { Title, COURSE_DATA } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.TitleContainer}>
            <Text style={styles.styledHeader}>{Title}</Text>
            <Text style={styles.styledHeader}>Favorites</Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.cardWrapper}>
              {COURSE_DATA.map((each: any, index: any) => (
                <FavoritesCard {...each} key={index} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoritesSection;
