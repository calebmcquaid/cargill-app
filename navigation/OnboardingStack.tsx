import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  OnboardingScreenOne,
  OnboardingScreenTwo,
  OnboardingScreenThree,
} from "../pages/SignUp";
import DrawerNavigator from "./userStack";
import SignUpForm from "../components/SignUpForm";

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign Up"
        component={SignUpForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding Screen One"
        component={OnboardingScreenOne}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding Screen Two"
        component={OnboardingScreenTwo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding Screen Three"
        component={OnboardingScreenThree}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
