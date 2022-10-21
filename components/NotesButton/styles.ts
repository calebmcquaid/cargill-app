/* eslint-disable import/extensions */
import { StyleSheet } from "react-native";
import { COLORS } from "../../project.config";

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 25,
    right: 50,
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: COLORS.pureWhite,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
});

export default styles;
