import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 14,
    backgroundColor: "#333333",
    borderRadius: 20,
    marginRight: 20,
    padding: 20,
    width: isTablet ? 200 : 171,
    height: isTablet ? 270 : 210,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: { alignItems: "center", flexGrow: 1 },
  touchableContainer: {
    position: "absolute",
    bottom: -10,
    width: "100%",
    alignSelf: "baseline",
    alignItems: "baseline",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "baseline",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
    marginRight: 8,
  },
});

export default styles;
