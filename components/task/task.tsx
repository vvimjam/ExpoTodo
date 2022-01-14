import { Text, TouchableOpacity, View } from "react-native";
import styles from "./task.style";

const task = (props: any) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => props.removeTask()}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </TouchableOpacity>
  );
};

export default task;
