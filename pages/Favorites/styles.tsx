import { Dimensions, StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import {
  FONTS,
  TABLET_TYPOGRAPHY,
  COLORS,
  TYPOGRAPHY,
  // eslint-disable-next-line import/extensions
} from "../../project.config";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingLeft: isTablet ? 50 : 30,
    paddingTop: isTablet ? 125 : 110,
    paddingRight: 50,
  },
  styledHeader: {
    ...(isTablet ? TABLET_TYPOGRAPHY.h1 : TYPOGRAPHY.h1),
    color: COLORS.tGray[6],
    textAlign: "left",
  },
  seeAllText: {
    color: COLORS.primary,
    marginRight: 10,
  },
  mainContainer: {
    marginTop: 14,
    backgroundColor: COLORS.gray.lighterBlack,
    borderRadius: 20,
    marginRight: 20,
    padding: 20,
    width: 157,
    height: 188,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    flexGrow: 1,
  },
  touchableContainer: {
    width: "100%",
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.pureWhite,
    fontFamily: FONTS.HelvNeue,
    fontWeight: "700",
    marginRight: 8,
  },
  summaryText: {
    fontWeight: "500",
    marginBottom: 6,
    ...(isTablet ? TABLET_TYPOGRAPHY.h4 : TYPOGRAPHY.h4),
  },
  sectionText: {
    ...(isTablet ? TABLET_TYPOGRAPHY.h3 : TYPOGRAPHY.h3),
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  cardWrapper: {
    flexDirection: "row",
  },
});

export default styles;
