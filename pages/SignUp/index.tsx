/* eslint-disable import/extensions */
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { COLORS, FONTS } from "../../project.config";
import PageProgressIcon from "../../components/Icons/PageProgressIcon";
import QuestionMark from "../../components/Icons/QuestionMark";
import SmallStar from "../../components/Icons/SmallStar";
import SmallStarFilled from "../../components/Icons/SmallStarFilled";
import OneTrakOnboarding from "../../components/Icons/OneTrakOnboarding";
import SweetBranOnboarding from "../../components/Icons/SweetBranOnboarding";
import RampOnboarding from "../../components/Icons/RampOnboarding";

const BlankCard = (props: any) => {
  const { icon } = props;
  return (
    <View
      style={{
        backgroundColor: "#333333",
        paddingHorizontal: 12,
        marginBottom: 21,
        display: "flex",
        width: "70%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
    </View>
  );
};

const FavoriteCard = (props: any) => {
  const { icon } = props;
  return (
    <View
      style={{
        backgroundColor: "#333333",
        borderRadius: 14,
        paddingHorizontal: 12,
        paddingVertical: 20,
        marginBottom: 15,
        display: "flex",
        width: 277,
        height: 79,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          paddingLeft: 15,
        }}
      >
        {icon}
        <View
          style={{
            flexDirection: "column",
            marginLeft: 27,
            marginRight: 15,
            flexShrink: 1,
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <View
              style={{
                width: "100%",
                height: 7,
                backgroundColor: "#4F4F4F",
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <View
              style={{
                width: "100%",
                height: 7,
                backgroundColor: "#4F4F4F",
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "100%",
                height: 7,
                backgroundColor: "#4F4F4F",
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const OnboardingScreenOne: React.FC<StackScreenProps<any>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <BlankCard icon={<OneTrakOnboarding />} />
      <BlankCard icon={<SweetBranOnboarding />} />
      <BlankCard icon={<RampOnboarding />} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#F2F2F2",
            fontWeight: "700",
            fontSize: 30,
            lineHeight: 31.5,
            fontFamily: FONTS.HelvNeue,
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            marginTop: 12,
            marginHorizontal: 25,
            marginBottom: 31,
            color: COLORS.tGray[5],
            fontFamily: FONTS.HelvNeue,
            textAlign: "center",
            fontSize: 15,
            lineHeight: 23,
            fontWeight: "400",
          }}
        >
          This resource guide has been created to help all employees understand
          the value of our brands and specific claims.
        </Text>
        <PageProgressIcon />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Onboarding Screen Two")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DrawerNavigator")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OnboardingScreenTwo: React.FC<StackScreenProps<any>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: -40 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#333333",
            borderRadius: 14,
            position: "relative",
            width: 202,
            height: 198,
          }}
        >
          <QuestionMark />
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 14,
            width: 202,
            height: 198,
            opacity: 0.04,
            zIndex: -1,
            position: "absolute",
            left: 40,
            top: 40,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 100,
        }}
      >
        <Text
          style={{
            color: "#F2F2F2",
            fontWeight: "700",
            fontSize: 30,
            lineHeight: 31.5,
            fontFamily: FONTS.HelvNeue,
          }}
        >
          Your questions
        </Text>
        <Text
          style={{
            color: "#F2F2F2",
            fontWeight: "700",
            fontSize: 30,
            lineHeight: 31.5,
            fontFamily: FONTS.HelvNeue,
          }}
        >
          answered
        </Text>
        <Text
          style={{
            marginTop: 12,
            marginHorizontal: 25,
            marginBottom: 51,
            color: COLORS.tGray[5],
            fontFamily: FONTS.HelvNeue,
            textAlign: "center",
            fontSize: 15,
            lineHeight: 23,
            fontWeight: "400",
          }}
        >
          There are Frequently Asked Questions for each brand that represent
          typical questions from customers and prospects and we should address
          them.
        </Text>
        <PageProgressIcon />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Onboarding Screen Three")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DrawerNavigator")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OnboardingScreenThree: React.FC<StackScreenProps<any>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <FavoriteCard icon={<SmallStar />} />
      <FavoriteCard icon={<SmallStarFilled />} />
      <FavoriteCard icon={<SmallStar />} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#F2F2F2",
            fontWeight: "700",
            fontSize: 30,
            lineHeight: 31.5,
            fontFamily: FONTS.HelvNeue,
          }}
        >
          Favorite content
        </Text>
        <Text
          style={{
            marginTop: 12,
            marginHorizontal: 25,
            marginBottom: 31,
            color: COLORS.tGray[5],
            fontFamily: FONTS.HelvNeue,
            textAlign: "center",
            fontSize: 15,
            lineHeight: 23,
            fontWeight: "400",
          }}
        >
          Easily link to the content that is relevant to you for easy access at
          a later date
        </Text>
        <PageProgressIcon />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("DrawerNavigator")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DrawerNavigator")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { OnboardingScreenOne, OnboardingScreenTwo, OnboardingScreenThree };
