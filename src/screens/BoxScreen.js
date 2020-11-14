import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BoxScreen = () => {
    return (
        <View style = {Styles.viewStyle}>
            <Text style = {Styles.textoneStyle}>First Box Screen</Text>
            <Text style = {Styles.texttwoStyle}>Box Screen</Text>
            <Text style = {Styles.textStyle}>Box Screen</Text>
            <Text style = {Styles.textStyle}>Box Screen</Text>

        </View>
    );
};

const Styles = StyleSheet.create({

    viewStyle : {
        borderWidth : 3,
        borderColor : 'black',
        height: 200,
        alignItems:"center",
        
        
        
    },
    textoneStyle : {
        borderWidth : 1,
        borderColor: 'red',
        alignSelf: 'flex-end',
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgb(157,234,124)'
        
    },
    texttwoStyle : {
        borderWidth : 1,
        borderColor: 'red',
        
        
    },
    textStyle : {
        borderWidth : 1,
        borderColor: 'red',
        
        
    },

});




export default BoxScreen;