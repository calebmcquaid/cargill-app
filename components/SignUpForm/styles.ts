/* eslint-disable import/extensions */
import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../project.config";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 35,
    height: "100%",
  },
  topContainer: {
    backgroundColor: "#000000",
    zIndex: 100,
  },

  inputContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    display: "flex",
    marginLeft: isTablet ? "15%" : "4%",
    marginTop: "15%",
    alignSelf: "flex-start",
    marginBottom: isTablet ? "5%" : "10%",
    zIndex: 100,
  },
  headerText: {
    fontWeight: "700",
    fontFamily: "Helvetica Neue",
    fontSize: 47,
    letterSpacing: -1,
    color: "#fff",
  },

  inputOnFocus: {
    width: isTablet ? "70%" : "100%",
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 22,
    paddingLeft: 22,
    backgroundColor: "#333333",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: "solid",
    marginBottom: 12,
    color: COLORS.primary,
  },

  inputOnBlur: {
    width: isTablet ? "70%" : "100%",
    height: 70,
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 22,
    paddingLeft: 22,
    backgroundColor: "#333333",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 12,
    color: "#FFFFFF",
  },

  loginSection: {
    flex: 1,
    justifyContent: "flex-end",
    width: "70%",
    alignItems: "center",
  },

  loginButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: isTablet ? "70%" : "100%",
    padding: 20,
    borderRadius: 17,
    backgroundColor: "#A79E70",
    marginTop: 16,
  },

  buttonText: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    color: "#333333",
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },
});
export default styles;
