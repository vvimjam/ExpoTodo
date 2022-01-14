import { Keyboard, StyleSheet, Text, View } from "react-native";
import Task from "./components/task/task";
import TaskInput from "./components/task-input/task-input";
import { useState } from "react";

export default function App() {
  const [tasks, settasks] = useState(["Deploy on gun", "Fix usb issues"]);

  const addTaskHandler = (taskText: string) => {
    Keyboard.dismiss();

    if (taskText !== undefined && taskText.trim() !== "")
      settasks([...tasks, taskText]);
  };

  const removeTaskHandler = (index: number) => {
    var tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    settasks([...tasksCopy]);
  };

  var taskListComponents: any;

  if (tasks.length > 0) {
    taskListComponents = tasks.map((task, index) => {
      return (
        <Task
          key={index}
          removeTask={() => removeTaskHandler(index)}
          text={task}
        ></Task>
      );
    });
  } else {
    taskListComponents = <Text>No tasks pending. Yay!!!</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionHeader}>Tasks</Text>
        <View style={styles.items}>{taskListComponents}</View>
      </View>
      <TaskInput addTask={(text: string) => addTaskHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
  },
  items: {
    marginTop: 10,
  },
});
