import React, {useState} from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';

const ColorScreen = () => {
    const [Colors, SetColors] = useState([]);

    return (
        
        <View>
            <Text>Color Screen</Text>

            <Button
                title={'Add a Color '}
                onPress={() => {
                    SetColors([...Colors,randomRgb()]);
                 }}
            />

            
            <FlatList 
            keyExtractor = {item => item}
            data = {Colors}
            renderItem = {({item}) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item }}/>
            }}
            
            />

        </View>
    );
};

const randomRgb = () => {
    let Red = Math.floor(Math.random() * 256);
    let Green = Math.floor(Math.random() * 256);
    let Blue = Math.floor(Math.random() * 256);

    return `rgb(${Red},${Green},${Blue})`;
};


const Style = StyleSheet.create({

});

export default ColorScreen;