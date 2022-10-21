import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import useAuthentication from "../utils/useAuthentication";
import UserStack from "./userStack";
import AuthStack from "./authStack";

const RootNavigation = () => {
  const { user } = useAuthentication();

  return user ? (
    <NavigationContainer>
      <UserStack navigation={undefined} />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
