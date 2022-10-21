import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignInScreen from "../pages/SignIn";
import Welcome from "../pages/Welcome";
import DrawerNavigator from "./userStack";
import {
  OnboardingScreenOne,
  OnboardingScreenThree,
  OnboardingScreenTwo,
} from "../pages/SignUp";
import SignUpForm from "../components/SignUpForm";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
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

export default AuthStack;
