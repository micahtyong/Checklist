import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'; 

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
            <View style={styles.goalOutputItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    goalOutputItem: {
        padding: 10, 
        marginTop: 10,
        borderColor: 'black',
        backgroundColor: '#ccc',
        borderWidth: 1
    }
})

export default GoalItem;