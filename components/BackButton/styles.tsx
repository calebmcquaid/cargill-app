/* eslint-disable import/extensions */
import { StyleSheet } from "react-native";
import { TABLET_TYPOGRAPHY } from "../../project.config";

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 50,
    paddingBottom: 30,
  },
  text: { ...TABLET_TYPOGRAPHY.paragraph, marginLeft: 10 },
});

export default styles;
