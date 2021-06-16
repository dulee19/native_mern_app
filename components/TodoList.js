import React, { useState } from 'react';
import { View,Text, Button, StyleSheet, ScrollView, TextInput } from 'react-native';
import Todo from './Todo';

const TodoList = () => {
    const [title, setTitle] = useState('TodoList');

    return (
        <View>
            <Text style={{ width: '80%', marginBottom: 60 }}>{title}</Text>
            <ScrollView>
                <Todo style={[styles.align, styles.font]} name={'First Todo'} />
                <Todo name={'Second Todo'} />
            </ScrollView>
            <View>
                 <TextInput style={styles.input} />
            </View>
            <Button title="Add Item" onPress={() => setTitle('my list')} />
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: 'center'
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8,
        padding: 8
    }
})



export default TodoList
