import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ListScreen = () => {
    const Friends = [
        { name: 'Friend # 1', age: 26 }, // One way to give key of every field and thats unique
        { name: 'Friend # 2', age: 27 },
        { name: 'Friend # 3', age: 28 },
        { name: 'Friend # 4', age: 29 },
        { name: 'Friend # 5', age: 22 },
        { name: 'Friend # 6', age: 26 },
        { name: 'Friend # 7', age: 213 },
        { name: 'Friend # 8', age: 265 },
        { name: 'Friend # 9', age: 26 },
        { name: 'Friend # 10', age: 26 },
        { name: 'Friend # 11', age: 26 }
    ];
    return (
        <FlatList
            //if you don't want to show the indicator for scroll
            showsVerticalScrollIndicator={false}
            //Other way to give key value here but its unique value
            keyExtractor={friend => friend.name}
            data={Friends}
            renderItem={({ item }) => {
                return (
                    <Text style={Styles.textStyle}>{item.name} - Age  {item.age}</Text>

                );
            }}
        />
    );
};

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 30,


    }
});


export default ListScreen;