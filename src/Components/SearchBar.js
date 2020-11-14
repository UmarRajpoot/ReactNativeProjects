import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (
        <View style={Style.background} >
            <Feather name='search' style={Style.iconstyle} />
            <TextInput style={Style.textStyle}
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder='Search'
                value= {term}
                onChangeText = {newValue => onTermChange(newValue)}
                onEndEditing = {() => onTermSubmit()}
                //we can also use this oone
                //onEndEditing = {onTermSubmit}
            />
        </View>

    );
};

const Style = StyleSheet.create({

    background: {
        marginTop: 15, 
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',

    },
    textStyle: {
        flex: 1,
        fontSize: 18
    },
    iconstyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default SearchBar;