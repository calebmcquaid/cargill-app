import { StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import { COLORS, TABLET_TYPOGRAPHY } from "../../project.config";

const styles = StyleSheet.create({
  drawerText: {
    ...TABLET_TYPOGRAPHY.h2,
    fontWeight: "500",
    marginLeft: 10,
  },
  drawerView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  upperContainer: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    marginRight: "5%",
    marginLeft: "5%",
    opacity: 0.5,
  },
  lowerContainer: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    marginRight: "5%",
    marginLeft: "5%",
    marginTop: 60,
    opacity: 0.5,
  },
  drawerHeaderStyle: {
    backgroundColor: COLORS.background,
    shadowColor: "transparent",
  },
});

export default styles;
