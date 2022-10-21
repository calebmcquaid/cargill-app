import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./styles";
import CargillBrandedFeedLogo from "../../components/Icons/WelcomeScreenLogo";
// eslint-disable-next-line import/extensions
import { COLORS, TABLET_TYPOGRAPHY, TYPOGRAPHY } from "../../project.config";
import LeftChevron from "../../components/Icons/LeftChevron";

const auth = getAuth();
const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const SignInScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  async function firebaseSignIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Welcome");
    } catch (error: any) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}
      <CargillBrandedFeedLogo />
      <TouchableOpacity
        style={{
          display: "flex",
          marginTop: isTablet ? " 10%" : "15%",
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
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <TextInput
          onChangeText={(text) =>
            setValue({ ...value, email: text.toLowerCase() })
          }
          onFocus={() => setUsernameFocus(true)}
          onBlur={() => setUsernameFocus(false)}
          style={usernameFocus ? styles.inputOnFocus : styles.inputOnBlur}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          value={value.email}
        />
        <TextInput
          onFocus={() => {
            setPasswordFocus(true);
            setValue({ ...value, error: "" });
          }}
          onBlur={() => setPasswordFocus(false)}
          style={passwordFocus ? styles.inputOnFocus : styles.inputOnBlur}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => firebaseSignIn()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
