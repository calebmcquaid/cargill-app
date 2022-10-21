import { StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import { TABLET_TYPOGRAPHY, COLORS } from "../../project.config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingLeft: 50,
  },
  innerContainer: {
    marginTop: 120,
    height: "100%",
  },
  styledHeader: {
    ...TABLET_TYPOGRAPHY.h1,
    color: COLORS.tGray[6],
    textAlign: "left",
  },
  rowContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  cardWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  TitleContainer: {
    marginBottom: 30,
  },
});

export default styles;
