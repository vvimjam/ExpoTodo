import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: 0,
    padding: 3,
    backgroundColor: "#77c7ff",
  },
  input: {
    fontSize: 13,
    width: 245,
    paddingLeft: 10,
    backgroundColor: "white",
    borderRadius: 60,
    padding: 3,
    borderColor: "grey",
  },
  addText: {
    color: "dodgerblue",
  },
  addWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 33,
    height: 33,
    borderColor: "red",
    backgroundColor: "white",
    borderRadius: 15,
  },
});

export default styles;
