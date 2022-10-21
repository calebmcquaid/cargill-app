import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#333333",
    borderRadius: 20,
    padding: 20,
    margin: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  subContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    width: 85,
    height: 85,
    backgroundColor: "#4F4F4F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  contentContainer: {
    flexDirection: "column",
    marginHorizontal: 27,
    flexShrink: 1,
  },
  headerContainer: { flexDirection: "row", width: "100%" },
  headerText: {
    color: "#F2F2F2",
    marginBottom: 4,
    flexWrap: "wrap",
    fontSize: 18,
  },
  descriptionContainer: { flexDirection: "row" },
  descriptionText: {
    color: "#BDBDBD",
    flexWrap: "wrap",
  },
  sectionsContainter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  numSectionsText: { color: "#F2F2F2", marginBottom: 12 },
  sectionsText: { color: "#BDBDBD" },
});

export default styles;
