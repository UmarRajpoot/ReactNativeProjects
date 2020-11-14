import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
//Import the Color Counter Screen
import ColorCounter from '../Components/ColorCounter';

const CURRENT_COLOUR = 15;



const SquareScreen = () => {
    const [Red, setRed] = useState(0);
    const [Blue, setBlue] = useState(0);
    const [Green, setGreen] = useState(0);

    const setColor = (Color, change) => {
        switch (Color) {

            case 'Red':
                Red + change > 255 || Red + change < 0 ? null : setRed(Red + change);
                return;

                case 'Blue':
                Blue + change > 255 || Blue + change < 0 ? null : setBlue(Blue + change);
                return;

                case 'Green':
                Green + change > 255 || Green + change < 0 ? null : setGreen(Green + change);
                return;
        }
    }


    return (
        <View>

            <ColorCounter
                onIncrease={() => setColor('Red', CURRENT_COLOUR)}
                onDecrease={() => setColor('Red', -1 * CURRENT_COLOUR)}
                Color={'Red'} />
            <Text>{Red}</Text>

            <ColorCounter
                onIncrease={() => setColor('Blue', CURRENT_COLOUR)}
                onDecrease={() => setColor('Blue', -1 * CURRENT_COLOUR)}
                Color={'Blue'} />
            <Text>{Blue}</Text>


            <ColorCounter
                onIncrease={() => setColor('Green', CURRENT_COLOUR)}
                onDecrease={() => setColor('Green', -1 * CURRENT_COLOUR)}
                Color={'Green'} />
            <Text>{Green}</Text>

            <View
                style={{ height: 150, width: 150, backgroundColor: `rgb(${Red},${Green},${Blue})` }}>
            </View>

        </View>
    );
}

const Style = StyleSheet.create({

});

export default SquareScreen;