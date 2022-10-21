import { StyleSheet, Dimensions } from "react-native";
// eslint-disable-next-line import/extensions
import { COLORS } from "../../project.config";

const dimensions = Dimensions.get("window");
const isTablet = dimensions.width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    width: "75%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: 160,
    height: 160,
    backgroundColor: COLORS.gray.med,
    borderRadius: 16,
    marginBottom: 60,
  },
  dobContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.gray.lighterBlack,
    height: 70,
    paddingTop: 25,
    paddingRight: 22,
    paddingBottom: 25,
    paddingLeft: 22,
    marginBottom: 12,
  },
  backChevron: {
    position: "absolute",
    color: COLORS.primary,
    left: 25,
    top: 130,
  },
  flexContainer: {
    flexDirection: "row",
  },
  dobInput: {
    flex: 1,
    color: COLORS.pureWhite,
  },
  backText: {
    color: COLORS.pureWhite,
    marginLeft: 8,
  },
  input: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: COLORS.gray.lighterBlack,
    height: 70,
    paddingTop: 25,
    paddingRight: 22,
    paddingBottom: 25,
    paddingLeft: 22,
    marginBottom: 12,
    color: COLORS.pureWhite,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  camera: {
    position: "absolute",
    top: 135,
    right: -10,
    width: 34,
    height: 34,
    backgroundColor: COLORS.pureWhite,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    width: isTablet ? "50%" : "100%",
  },
  saveText: {
    color: COLORS.pureWhite,
  },
  saveButtonContainer: {
    width: "100%",
    alignItems: isTablet ? "flex-start" : "center",
    justifyContent: isTablet ? "flex-start" : "center",
  },
});

export default styles;
