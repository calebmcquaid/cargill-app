import { StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import { TYPOGRAPHY, COLORS } from "../../project.config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 25,
  },
  styledHeader: {
    ...TYPOGRAPHY.h1,
    color: COLORS.tGray[6],
    textAlign: "left",
  },
  text: {
    color: COLORS.pureWhite,
  },
  border: {
    borderColor: COLORS.gray.lighterBlack,
    borderBottomWidth: 1,
    marginTop: 20,
  },
  width: {
    maxWidth: "75%",
  },
  sectionContainer: {
    flexDirection: "column",
    marginTop: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeAllText: {
    color: COLORS.primary,
    marginRight: 10,
  },
  questionsContainer: {
    height: "150%",
  },
  contentContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 15,
    backgroundColor: COLORS.primary,
    height: 40,
    width: 126,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "column",
    marginTop: 65,
  },
  wrapper: {
    marginTop: 100,
  },
});

export default styles;
