import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";

const ImageDetail = ({ imageSource, title, Score }) => {

    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {Score}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({

});

export default ImageDetail;