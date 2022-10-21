/* eslint-disable import/extensions */
import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../../project.config";

const styles = StyleSheet.create({
  headingText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.primary,
    fontWeight: "700",
    marginBottom: 20,
    marginLeft: 27,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },
  titleText: {
    ...TYPOGRAPHY.sectionTitle,
    fontWeight: "700",
    marginLeft: 11,
  },
  summaryText: {
    ...TYPOGRAPHY.h3,
    marginLeft: 27,
    marginBottom: 15,
  },
  bulletHeadingText: {
    ...TYPOGRAPHY.h3,
    marginLeft: 27,
    marginBottom: 15,
  },
  bulletPointsContainer: {
    flexDirection: "row",
    marginLeft: 27,
    width: "80%",
    marginBottom: 15,
  },
  bulletPoint: {
    ...TYPOGRAPHY.h3,
    marginRight: 10,
  },
  bulletPointText: {
    ...TYPOGRAPHY.h3,
  },
});

export default styles;
