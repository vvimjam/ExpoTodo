import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    padding: 12,
    margin: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: 20,
    width: 20,
    backgroundColor: "dodgerblue",
    opacity: 0.35,
    marginRight: 10,
    borderRadius: 4,
  },
  itemText: {
    maxWidth: "80%",
  },
  circle: {
    height: 10,
    width: 10,
    borderWidth: 2,
    borderColor: "dodgerblue",
    borderRadius: 10,
    opacity: 0.4,
  },
});

export default styles;
