import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: 18,
    marginRight: 16,
  },
  bullets: {
    flexDirection: "row",
  },
  bullet: {
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    backgroundColor: "#E02020",
    borderRadius: 10,
    margin: 1,
  },
  bullet_label: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
  },
});
