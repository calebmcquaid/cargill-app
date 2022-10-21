/* eslint-disable import/extensions */
import { Dimensions, StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../../project.config";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: COLORS.background,
    paddingTop: 75,
  },
  headerContainer: {
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.background,
  },
  logoContainer: {
    marginHorizontal: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: isTablet ? 45 : 20,
    marginBottom: 10,
    paddingRight: 200,
  },
  selectContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: 33,
  },
  selectText: {
    ...TYPOGRAPHY.h3,
    fontWeight: "700",
    marginVertical: 5,
  },
  chapterContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 5,
  },
  chapterText: { ...TYPOGRAPHY.h3, fontWeight: "700", marginVertical: 5 },
  recapButtonContainer: { marginRight: 8 },
  scrollViewContentContainer: { zIndex: -1 },
  contentContainer: {
    marginHorizontal: isTablet ? 45 : 20,
    paddingTop: 21,
  },
  favoritesContainer: {
    display: "flex",
    flexDirection: "row",
    zIndex: -1,
  },
  favoritesHeadingText: {
    ...TYPOGRAPHY.h3,
    fontWeight: "700",
    marginLeft: 20,
    marginBottom: 10,
  },
  contentCardContainer: { zIndex: -1 },
  chapterCardContainer: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray.lighterBlack,
    paddingBottom: 50,
    marginTop: 27,
  },
  nextButtonContainer: { alignItems: "center", width: "100%" },
});

export default styles;
