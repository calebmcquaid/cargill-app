/* eslint-disable import/extensions */
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { updateDoc, doc, arrayUnion } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import app, { firestore } from "../../../config/firebase";
import LeftChevron from "../../Icons/LeftChevron";
import { COLORS } from "../../../project.config";

const NewNote = () => {
  const [noteContent, setNoteContent] = React.useState("");
  const [noteTitle, setNoteTitle] = React.useState("");
  const { currentUser } = getAuth(app);
  const navigation = useNavigation();

  const docRef = doc(firestore, "users", currentUser?.email as string);

  const saveNote = async () => {
    await updateDoc(
      docRef,
      "favorites",
      arrayUnion({ noteTitle, noteContent })
    );
    setNoteContent("");
    setNoteTitle("");
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backContainer}>
            <LeftChevron fill={COLORS.primary} />
            <Text style={{ color: COLORS.pureWhite }}> Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.titleInput}
        onChangeText={(value) => setNoteTitle(value)}
        value={noteTitle}
      />
      <TextInput
        style={styles.contentInput}
        multiline
        numberOfLines={10}
        onChangeText={(value) => setNoteContent(value)}
        value={noteContent}
      />
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => saveNote()}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewNote;
