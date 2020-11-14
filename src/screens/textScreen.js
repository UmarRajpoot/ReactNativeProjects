import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const textScreen = () => {
    const [name, setName] = useState('');
    return <View>
        <Text>Enter Your Name: </Text>
        <TextInput style={Styles.input}
        autoCapitalize = {'none'}
        autoCorrect = {false}
        value = {name}
        onChangeText = {NewValue => setName(NewValue)}
        />

        <Button 
        title ={`Your name is ${name}`}     
        />
        {
            name.length <  4 ? <Text>Characters Must be longer than 5 character</Text>
            : null
        }
        
        


    </View>

}


const Styles = StyleSheet.create({

    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

});

export default textScreen;