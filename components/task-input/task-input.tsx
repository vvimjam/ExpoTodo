import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./task-input.style";

const taskInput = (props: any) => {
  const [newTaskText, setNewTaskText] = useState("");

  const setTextHandler = (text: string) => {
    setNewTaskText(text);
  };

  const addNewTaskHandler = () => {
    props.addTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={styles.taskInputWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"Enter new todo..."}
        value={newTaskText}
        onChangeText={(text) => setTextHandler(text)}
      />

      <TouchableOpacity onPress={() => addNewTaskHandler()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default taskInput;
