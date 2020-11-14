import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource = {require('../../assets/forest.jpg')} Score = {9} />
            <ImageDetail title= "Mountain" imageSource = {require('../../assets/mountain.jpg')} Score = {7} />
            <ImageDetail title = "Beach" imageSource = {require('../../assets/beach.jpg')} Score = {6} /> 
               
        </View>
    );
}

const Styles = StyleSheet.create({

});

export default ImageScreen;