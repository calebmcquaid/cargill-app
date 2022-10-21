import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import NewNoteLogo from "../Icons/NewNote";
import styles from "./styles";

const NotesButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Notes" as never)}
      >
        <NewNoteLogo />
      </TouchableOpacity>
    </View>
  );
};

export default NotesButton;
