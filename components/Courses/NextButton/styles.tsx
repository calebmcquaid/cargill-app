/* eslint-disable import/extensions */
import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../../project.config";

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 20,
    backgroundColor: COLORS.gray.lighterBlack,
    paddingHorizontal: 35,
    paddingVertical: 40,
    zIndex: -1,
    marginVertical: 50,
    maxWidth: 550,
    minWidth: 380,
    width: "100%",
  },
  mainContainer: { flexDirection: "row" },
  subContainer: { flexDirection: "column" },
  labelText: { ...TYPOGRAPHY.h1, fontWeight: "700", marginBottom: 9 },
  subheadingText: {
    ...TYPOGRAPHY.h2,
    fontWeight: "500",
    color: COLORS.primary,
  },
});

export default styles;
