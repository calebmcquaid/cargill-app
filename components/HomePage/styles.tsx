/* eslint-disable import/extensions */
import { Dimensions, StyleSheet } from "react-native";
import { COLORS, TABLET_TYPOGRAPHY, TYPOGRAPHY } from "../../project.config";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;
console.log({ isTablet });
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: isTablet ? 40 : 25,
    marginTop: 125,
  },
  styledHeader: {
    marginTop: 10,
    fontStyle: "normal",
    fontWeight: "700",
    ...(isTablet ? TABLET_TYPOGRAPHY.h1 : TYPOGRAPHY.h1),
  },
  styledText: {
    ...(isTablet ? TABLET_TYPOGRAPHY.h2 : TYPOGRAPHY.h2),
  },
  favoritesText: {
    color: "#fff",
    fontFamily: "Helvetica Neue",
    textAlign: "left",
  },
  continueButton: {
    borderRadius: 17,
    backgroundColor: COLORS.primary,
    height: isTablet ? 70 : 60,
    width: isTablet ? 231 : 200,
    padding: 20,
    marginBottom: isTablet ? 60 : 50,
    alignItems: "center",
    justifyContent: "center",
  },
  continueLearning: {
    fontWeight: "700",
    fontFamily: "Helvetica Neue",
    fontSize: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  favoritesCard: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "#333333",
    borderRadius: 20,
    marginRight: 20,
    padding: 40,
    alignItems: "center",
    width: 171,
    height: 217,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    marginLeft: 10,
    fontStyle: "normal",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    ...(isTablet ? TABLET_TYPOGRAPHY.h2 : TYPOGRAPHY.h3),
  },
  bodyText: {
    color: "white",
    fontSize: 14,
  },
  seeAllText: {
    color: "#a79e70",
    marginRight: 10,
  },
  courseCount: {
    color: "#fff",
    marginBottom: 10,
  },
  favoriteTitleText: {
    color: "#fff",
    fontFamily: "Helvetica Neue",
  },
  rightArrow: {
    alignSelf: "baseline",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  starWrapper: {
    position: "absolute",
    left: 25,
    top: 20,
  },
});

export default styles;
