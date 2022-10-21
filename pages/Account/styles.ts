import { StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import { COLORS, FONTS } from "../../project.config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    display: "flex",
    height: 100,
    flexDirection: "column",
    marginTop: 25,
    objectFit: "contain",
  },
  accountGreeting: {
    fontFamily: FONTS.HelvNeue,
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.pureWhite,
  },
  styledText: {
    marginBottom: 10,
    color: COLORS.pureWhite,
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
  },
  greetingContainer: {
    marginBottom: 15,
  },
  image: {
    position: "absolute",
    top: -200,
    alignSelf: "center",
    width: 160,
    height: 160,
    backgroundColor: COLORS.pureWhite,
    borderRadius: 16,
  },
  courseCompleted: {
    marginLeft: 6,
    marginTop: 20,
    marginBottom: 20,
    color: COLORS.pureWhite,
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
  },
  countContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  countStyle: {
    color: COLORS.pureWhite,
    textAlign: "center",
  },
  courseCompletedCount: {
    marginTop: 20,
    marginBottom: 20,
    color: COLORS.primary,
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
  },
  profileButton: {
    display: "flex",
    flexDirection: "row",
    marginTop: 100,
    backgroundColor: COLORS.gray.lighterBlack,
    borderRadius: 20,
    height: 92,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  profileSettings: {
    color: COLORS.pureWhite,
    marginLeft: -50,
  },
  progressBarBackground: {
    width: "100%",
    backgroundColor: COLORS.gray.lighterBlack,
    height: 5,
    top: 0,
    position: "absolute",
  },
  white: {
    color: COLORS.pureWhite,
  },
});

export default styles;
