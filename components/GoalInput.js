import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'; 

const GoalInput = props => {
    // Manage Current Goal
    const [enteredGoal, setEnteredGoal] = useState(' ');

    // Add enteredText to variable
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Personal Challenge"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    style={styles.goalInput} 
                />

                <Button title="Add"
                    onPress={() => props.onAddGoal(enteredGoal)} 
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
    }
})

export default GoalInput;