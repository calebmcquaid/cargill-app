import { StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import { COLORS, FONTS } from "../../project.config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },

  loginButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 201,
    padding: 20,
    borderRadius: 17,
    backgroundColor: "#A79E70",
    marginTop: 51,
  },

  buttonText: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    color: "#333333",
  },
  skipText: {
    fontFamily: FONTS.HelvNeue,
    color: COLORS.tGray[5],
    fontSize: 15,
    marginTop: 39,
  },
});

export default styles;
