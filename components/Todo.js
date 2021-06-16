import React from 'react'
import { View,Text,Button, StyleSheet  } from 'react-native';

const Todo = ({ name }) => {
    return (
        <View style={[ { margin: 8, padding: 8 }, styles.item ]}>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5, 
        backgroundColor: 'whitesmoke'
    }
})

export default Todo
