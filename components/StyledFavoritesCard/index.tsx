/* eslint-disable import/extensions */
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../pages/Favorites/styles";
import Icon from "../Icons/Icon";
import RightArrow from "../Icons/RightArrow";
import { FavoritesPropType } from "./types";

const FavoritesCard: React.FC<FavoritesPropType> = ({
  logo,
  header,
  content,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Icon icon={logo} width={70} />
        </View>
      </View>

      <View
        style={{
          height: "80%",
        }}
      >
        <View style={{ justifyContent: "center", flexGrow: 1 }}>
          <Text style={styles.summaryText} numberOfLines={2}>
            {header}
          </Text>
        </View>
        <View style={styles.touchableContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate(
                "CourseDetails" as never,
                { course: content, chapter: 0 } as never
              );
            }}
          >
            <Text style={styles.buttonText}>View</Text>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FavoritesCard;
