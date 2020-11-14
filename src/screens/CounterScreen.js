import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";



const reducer = (state , action) =>
{
    
    switch (action.type)
    {
        case 'inCrement':
            return {...state, count: state.count + action.payload};
        case 'deCrement':
            return {...state, count: state.count - action.payload};
               
        default:
            return state;
    }
}


const CounterScreen = () => {
    
    // const [Cvalue, Csetvalue] = useState(0);
    const [state , dispatch] = useReducer(reducer, {count : 0});
    // destructuring


    return (
        <View>
            <Text>Counter Screen</Text>

            <Button
                title={'Increase'}
                onPress={() => {
                    // Csetvalue(Cvalue + 1);
                    dispatch({type: 'inCrement', payload : 1});
                }} />

            <Button
                title={'decrease'}
                onPress={() => {
                    // Csetvalue(Cvalue - 1);
                    dispatch({type: 'deCrement', payload : 1});
                }} />

            <Text>Counter Value : {state.count}</Text>
            
        </View>
    );
}

const Style = StyleSheet.create({

});


export default CounterScreen