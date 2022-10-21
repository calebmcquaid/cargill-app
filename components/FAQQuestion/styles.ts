import { StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import { TYPOGRAPHY, COLORS } from "../../project.config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingLeft: 50,
    paddingRight: 50,
  },
  innerContainer: {
    marginTop: 100,
  },
  backContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  question: {
    ...TYPOGRAPHY.h1,
    color: COLORS.pureWhite,
    marginBottom: 20,
    fontWeight: "700",
  },
  answer: {
    ...TYPOGRAPHY.h2,
    color: COLORS.pureWhite,
    marginBottom: 20,
    fontWeight: "500",
  },
  bullet: {
    ...TYPOGRAPHY.h3,
    color: COLORS.pureWhite,
    fontWeight: "400",
  },
  text: {
    color: COLORS.pureWhite,
  },
  contentContainer: {
    marginTop: 30,
  },
  innerContentContainer: {
    marginTop: 20,
  },
});

export default styles;
