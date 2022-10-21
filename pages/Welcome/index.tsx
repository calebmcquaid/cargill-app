import { StackScreenProps } from "@react-navigation/stack";
import * as Linking from "expo-linking";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import CargillBrandedFeedLogo from "../../components/Icons/WelcomeScreenLogo";

const Welcome: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CargillBrandedFeedLogo />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Brand</Text>
        <Text style={styles.headerText}>Resource</Text>
        <Text style={styles.headerText}>Guide.</Text>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>A resource to understand how to</Text>
          <Text style={styles.subText}>explain our brands&apos; value and</Text>
          <Text style={styles.subText}>specific claims.</Text>
        </View>
      </View>
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Sign In")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.signUpLink}
        onPress={() => navigation.navigate("Sign Up")}
      >
        Sign Up
      </Text>
      <Text style={styles.recoveryText}>Unsure of your key? Contact</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("mailto:email@cargill.com").catch((error) =>
            console.log(error)
          )
        }
      >
        <Text style={styles.recoveryLink}>email@cargill.com</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
