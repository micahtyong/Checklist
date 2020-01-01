import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // Manage whether we're adding goals or not
  const [isAddMode, setIsAddMode] = useState(false);

  // Toggle isAddMode 
  function toggleIsAddMode() {
    setIsAddMode(true); 
  }

  // Manage All Goals
  const [courseGoals, setCourseGoals] = useState([]);

  // Add entered goal to All Goals 
  function addGoalHandler(enteredGoal) {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}])
  }

  // Delete selected goal within All Goals
  function removeGoalHandler(goalId) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={toggleIsAddMode} />

      <GoalInput isVisible={isAddMode} onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList 
          keyExtractor={(item, index) => item.key}
          data={courseGoals} 
          renderItem={itemData => (
            <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />
        )} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  goalsContainer: {
    height: '100%'
  }
});
