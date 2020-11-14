import React, { useReducer } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
//Import the Color Counter Screen
import ColorCounter from '../Components/ColorCounter';

const CURRENT_COLOUR_INCREMENT = 15;

// first argu is a state object refer to red green and blue and second (How to change state object ) as  action
const reducer = (state, action) => {
    //inspect that action object and make some change toword the state object
    //writhing the swithch statement
    //state === {red: number, green: number, blue: number}; not a valid javascript
    //action === {colortochanege : 'Red' ||'Green' || 'blue' , amount : 15 / -15} Not a valid JAva script
    switch (action.colorToChange) {
        case 'red':
            // we never do this
            // state.red = state.red - 15
            // we do this
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };
            
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };
       
        default:
            return state;
    }
};

const SquareScreen = () => {
    //Use a Reducer here
    //dispatch is a runMyReducer you can call
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    // console.log(state) {red: 0, green: 0, Blue: 0}
    //destructuring 
    const {red, green , blue} = state;

    return (
        <View>

            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'red', amount : CURRENT_COLOUR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'red', amount: -1* CURRENT_COLOUR_INCREMENT})}
                Color={'Red'} />
            <Text>{state.red}</Text>

            <ColorCounter
                onIncrease={() =>  dispatch({colorToChange: 'green', amount : CURRENT_COLOUR_INCREMENT})}
                onDecrease={() =>  dispatch({colorToChange: 'green', amount : -1* CURRENT_COLOUR_INCREMENT})}
                Color={'Green'} />
            <Text>{state.green}</Text>

            <ColorCounter
                onIncrease={() =>  dispatch({colorToChange: 'blue', amount : CURRENT_COLOUR_INCREMENT})}
                onDecrease={() =>  dispatch({colorToChange: 'blue', amount : -1* CURRENT_COLOUR_INCREMENT})}
                Color={'Blue'} />
            <Text>{state.blue}</Text>

            <View
                style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}>
            </View>

        </View>
    );
}

const Style = StyleSheet.create({

});

export default SquareScreen;