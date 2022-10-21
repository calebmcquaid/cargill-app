import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 35,
  },

  textContainer: {
    display: "flex",
    marginTop: "35%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headerText: {
    display: "flex",
    fontWeight: "700",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontSize: 47,
    letterSpacing: -1,
    color: "#fff",
    marginTop: -13,
    paddingTop: 0,
    lineHeight: 55,
  },
  subTextContainer: {
    marginTop: 15,
  },
  subText: {
    display: "flex",
    fontWeight: "700",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontSize: 18,
    color: "#f2f2f2",
    opacity: 0.8,
  },
  loginSection: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: isTablet ? "50%" : "75%",
    padding: 20,
    borderRadius: 17,
    backgroundColor: "#a79e70",
  },
  buttonText: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    color: "#333333",
  },
  recoveryText: {
    marginTop: 15,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    color: "#bdbdbd",
  },
  recoveryLink: {
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    color: "#a79e70",
  },
  signUpLink: {
    marginTop: 15,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    color: "#a79e70",
  },
});

export default styles;
