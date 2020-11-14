//Import Some Liberaries such as All the Component from React NAtive and also react that allow how they work together
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//Second Create the Function that tell us that we want to write on the screen
const ComponentScreen = () => {
    const yourName = 'Umar Saleem';
    return (
        <View>
            <Text style={Styles.textstyle}>Get Started with React Native!</Text>
            <Text style = {Styles.otherText}>My Name is {yourName}</Text>

        </View>
    );


};
//Third is the Style Components that are use for Styling the Components

const Styles = StyleSheet.create({
    textstyle: {
        fontSize: 45
    },
    otherText: {
        fontSize: 20
    }
});
// Export the component from this page to another page
export default ComponentScreen;
