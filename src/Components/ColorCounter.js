import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';


const ColorCounter = ({Color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{Color}</Text>
            <Button
            onPress = {() => onIncrease()}
            title={`Increase ${Color}`} />
            <Button
            onPress = {() => onDecrease()}
            title= {`Decrease ${Color}`} />
        </View>
    );
}

const Style  = StyleSheet.create({

});

export default ColorCounter;