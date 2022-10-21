/* eslint-disable import/extensions */
import { StyleSheet } from "react-native";
import { COLORS } from "../../../project.config";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    width: "100%",
    flex: 1,
  },
  backContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  backButtonContainer: {
    width: "75%",
    display: "flex",
    alignContent: "flex-start",
  },
  titleInput: {
    width: "75%",
    height: 100,
    fontSize: 40,
    color: COLORS.primary,
    margin: 12,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    borderStyle: "solid",
    backgroundColor: COLORS.background,
    borderRadius: 7,
  },
  contentInput: {
    width: "75%",
    height: 500,
    fontSize: 20,
    color: COLORS.primary,
    margin: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: COLORS.background,
    borderRadius: 7,
    padding: 20,
    paddingTop: 10,
  },
  saveButton: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  saveText: {
    color: COLORS.pureWhite,
  },
  saveButtonContainer: {
    width: "75%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default styles;
