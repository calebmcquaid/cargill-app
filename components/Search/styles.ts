/* eslint-disable import/extensions */
import { StyleSheet } from "react-native";
import { COLORS } from "../../project.config";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    width: "100%",
    flex: 1,
  },
});

export default styles;
