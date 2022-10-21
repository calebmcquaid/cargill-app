/* eslint-disable import/extensions */
import { Dimensions, StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../project.config";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.background,
    minHeight: "100%",
    paddingTop: 80,
    paddingHorizontal: isTablet ? 25 : 20,
  },

  headingText: {
    fontWeight: "700",
    marginVertical: 30,
    marginHorizontal: isTablet ? 30 : 15,
    width: 150,
    ...TYPOGRAPHY.h1,
  },
});

export default styles;
