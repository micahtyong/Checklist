import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  // Manage Current Goal
  const [enteredGoal, setEnteredGoal] = useState(" ");

  // Add enteredText to variable
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  // Handler for adding a goal (clear input and dismiss)
  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Personal Challenge"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.goalInput}
        />

        <View style={styles.buttonLayout}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="grey" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  goalInput: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%"
  },
  button: {
    width: "45%",
    borderWidth: 1
  }
});

export default GoalInput;
