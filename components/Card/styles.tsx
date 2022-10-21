import { Dimensions, StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import { TABLET_TYPOGRAPHY, TYPOGRAPHY } from "../../project.config";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#333333",
    borderRadius: 20,
    padding: isTablet ? 20 : 15,
    margin: isTablet ? 16 : 10,
    display: "flex",
  },
  subContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    width: isTablet ? 85 : 60,
    height: isTablet ? 85 : 60,
    backgroundColor: "#4F4F4F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  contentContainer: {
    flexDirection: "column",
    marginHorizontal: isTablet ? 27 : 13,
    flexShrink: 1,
  },
  headerContainer: { flexDirection: "row", width: "100%" },
  headerText: {
    marginBottom: 4,
    flexWrap: "wrap",
    ...(isTablet ? TABLET_TYPOGRAPHY.h2 : TYPOGRAPHY.h3),
  },
  descriptionContainer: { flexDirection: "row" },
  descriptionText: {
    ...(isTablet ? TABLET_TYPOGRAPHY.paragraph : TYPOGRAPHY.paragraph),
  },
  sectionsContainter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    width: isTablet ? 590 : 230,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numSectionsText: {
    ...(isTablet ? TABLET_TYPOGRAPHY.paragraph : TYPOGRAPHY.paragraph),
    marginBottom: 12,
  },
  sectionsText: { color: "#BDBDBD" },
  progressBarContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  progressText: { color: "white", marginRight: 3 },
});

console.log(styles.headerText);

export default styles;
