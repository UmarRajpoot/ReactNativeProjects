import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CURRENT_VALUE = 1;

const reducer = (state , action) =>
{
    switch (action.ValueToChange)
    {
        case 'inCrease':
            return {...state, inCrease: state.inCrease + action.amount};
        case 'deCrease':
            return {...state, deCrease: state.deCrease - action.amount};
               
        default:
            return state;
    }
}


const CounterScreen = () => {
    
    // const [Cvalue, Csetvalue] = useState(0);
    const [state , dispatch] = useReducer(reducer, {inCrease: 0, deCrease : 0})
    // destructuring
    const {inCrease, deCrease} = state;

    const FinalValue = state.inCrease - state.deCrease;

    return (
        <View>
            <Text>Counter Screen</Text>

            <Button
                title={'Increase'}
                onPress={() => {
                    // Csetvalue(Cvalue + 1);
                    dispatch({ValueToChange: 'inCrease', amount: CURRENT_VALUE});
                }} />

            <Button
                title={'decrease'}
                onPress={() => {
                    // Csetvalue(Cvalue - 1);
                    dispatch({ValueToChange: 'deCrease', amount: -1* CURRENT_VALUE});
                }} />

            <Text>Counter Value : {FinalValue}</Text>
            
        </View>
    );
}

const Style = StyleSheet.create({

});


export default CounterScreen