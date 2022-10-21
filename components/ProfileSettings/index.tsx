import { StackScreenProps } from "@react-navigation/stack";
import React, { SetStateAction, useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { getAuth, updateProfile, User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore/lite";
import Camera from "../Icons/Camera";
import LeftChevron from "../Icons/LeftChevron";
import styles from "./styles";
// eslint-disable-next-line import/extensions
import { COLORS } from "../../project.config";
import { firestore } from "../../config/firebase";

const ProfileSettings: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const auth = getAuth();

  const docRef = doc(firestore, "users", auth?.currentUser?.email as string);

  const saveInfo = async () => {
    await updateDoc(docRef, "position", title);
    await updateDoc(docRef, "name", name);
    setName("");
    setTitle("");
  };

  async function saveImage(result: ImagePicker.ImageInfo) {
    try {
      await updateProfile(auth.currentUser as User, {
        photoURL: result.uri as ImagePicker.ImageInfo["uri"],
      });
    } catch (error) {
      console.log(error);
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [1, 1],
      quality: 1,
    });

    await saveImage(result as ImagePicker.ImageInfo);

    if (!result.cancelled) {
      setImage(result.uri as unknown as SetStateAction<undefined>);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backChevron}>
        <TouchableOpacity
          style={styles.flexContainer}
          onPress={() => navigation.goBack()}
        >
          <LeftChevron fill={COLORS.primary} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{ uri: auth.currentUser?.photoURL as string }}
        />
        <TouchableOpacity style={styles.camera} onPress={pickImage}>
          <Camera />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={COLORS.pureWhite}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View style={styles.inputWrapper} />
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor={COLORS.pureWhite}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <View style={styles.inputWrapper} />
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => saveInfo()}
          >
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileSettings;
