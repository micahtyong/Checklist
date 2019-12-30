import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

export default function App() {

  // Manage Current Goal
  const [enteredGoal, setEnteredGoal] = useState(' ');

  // Manage All Goals
  const [courseGoals, setCourseGoals] = useState([]);

  // Add enteredTrext to variable
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  // Add entered goal to All Goals 
  function addGoalHandler() {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>

        <TextInput placeholder="Personal Challenge"
        onChangeText={goalInputHandler}
        value={enteredGoal}
        style={styles.goalInput} />

        <Button title="ADD"
        onPress={addGoalHandler} 
        />

      </View>

      {/* <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
            <Text key={goal}>{goal}</Text>
          ))}
      </View> */}

      <ScrollView style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalOutputItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  goalInput: {
    width: '80%',
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    padding: 10
  },
  goalsContainer: {

  },
  goalOutputItem: {
    padding: 10, 
    marginTop: 10,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1
  }
});
