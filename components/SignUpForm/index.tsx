/* eslint-disable import/extensions */
import React, { useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { getFirestore, setDoc, doc } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app, { auth } from "../../config/firebase";
import styles from "./styles";
import CargillBrandedFeedLogo from "../../components/Icons/WelcomeScreenLogo";
import { COLORS, TABLET_TYPOGRAPHY, TYPOGRAPHY } from "../../project.config";
import LeftChevron from "../Icons/LeftChevron";

const firestore = getFirestore(app);

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const SignUpForm: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [error, setError] = React.useState("");

  const [firstNameFocus, setFirstNameFocus] = React.useState(false);
  const [lastNameFocus, setLastNameFocus] = React.useState(false);
  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  async function firebaseSignUp() {
    if (email === "" || password === "") {
      setError("Email and password are mandatory.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        navigation.navigate("Onboarding Screen One");
      });
      await setDoc(doc(firestore, "users", email), {
        email,
        favorites: [],
        courseOneProgress: 0,
        courseTwoProgress: 0,
        courseThreeProgress: 0,
      });
    } catch (err: any) {
      setError(err.message);
    }
  }

  const refInput2 = useRef() as any;
  const refInput3 = useRef() as any;
  const refInput4 = useRef() as any;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {!!error && (
          <View style={styles.error}>
            <Text>{error}</Text>
          </View>
        )}
        <View style={styles.topContainer}>
          <CargillBrandedFeedLogo />

          <TouchableOpacity
            style={{
              display: "flex",
              marginTop: "10%",
              marginLeft: isTablet ? " 10%" : "5%",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <LeftChevron fill={COLORS.primary} />
            <Text
              style={{
                ...(isTablet ? TABLET_TYPOGRAPHY.h3 : TYPOGRAPHY.h4),
                marginLeft: "3%",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Sign</Text>
            <Text style={styles.headerText}>Up</Text>
          </View>

          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={100}
            style={styles.inputContainer}
          >
            <TextInput
              onChangeText={(text) => setFirstName(text)}
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(false)}
              style={firstNameFocus ? styles.inputOnFocus : styles.inputOnBlur}
              placeholder="First name"
              placeholderTextColor="#FFFFFF"
              value={firstName}
              returnKeyType="next"
              onSubmitEditing={() => refInput2?.current?.focus()}
              blurOnSubmit={false}
            />
            <TextInput
              onChangeText={(text) => setLastName(text)}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
              style={lastNameFocus ? styles.inputOnFocus : styles.inputOnBlur}
              placeholder="Last name"
              placeholderTextColor="#FFFFFF"
              value={lastName}
              returnKeyType="next"
              ref={refInput2 as unknown as "LegacyRef<TextInput> | undefined"}
              onSubmitEditing={() => refInput3?.current?.focus()}
              blurOnSubmit={false}
            />
            <TextInput
              onChangeText={(text) => setEmail(text.toLowerCase())}
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              style={usernameFocus ? styles.inputOnFocus : styles.inputOnBlur}
              placeholder="Email"
              placeholderTextColor="#FFFFFF"
              value={email}
              returnKeyType="next"
              ref={refInput3 as unknown as "LegacyRef<TextInput> | undefined"}
              onSubmitEditing={() => refInput4.current?.focus()}
              blurOnSubmit={false}
            />
            <TextInput
              onFocus={() => {
                setPasswordFocus(true);
              }}
              onBlur={() => setPasswordFocus(false)}
              style={passwordFocus ? styles.inputOnFocus : styles.inputOnBlur}
              placeholder="Password"
              placeholderTextColor="#FFFFFF"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              ref={refInput4 as unknown as "LegacyRef<TextInput> | undefined"}
              blurOnSubmit={false}
              onSubmitEditing={() => firebaseSignUp()}
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => firebaseSignUp()}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpForm;
