/* eslint-disable import/extensions */
import React from "react";
import { View } from "react-native";
import HomePage from "../components/HomePage";
import { COLORS } from "../project.config";

const Dashboard = () => {
  return (
    <View style={{ backgroundColor: COLORS.background, height: "100%" }}>
      <HomePage />
    </View>
  );
};

export default Dashboard;
