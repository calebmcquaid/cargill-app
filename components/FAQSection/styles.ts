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
    marginTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
