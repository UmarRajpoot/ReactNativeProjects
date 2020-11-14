import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Programmers Let's Do this :)</Text>

      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Page"
      />

      <Button
        onPress={() => navigation.navigate('List')}
        title={'Go to List Demo'}
      />

      <Button
        onPress={() => navigation.navigate('ImageScreen')}
        title={'Go to Image Screen'}
      />

      <Button
        onPress={() => navigation.navigate('CounterScreen')}
        title={'Go to Counter Screen'}
      />

      <Button
        onPress={() => navigation.navigate('Color')}
        title={'Go to Color Screen'}
      />

      <Button
        onPress={() => navigation.navigate('Square')}
        title={'Go to Square Screen'}
      />

      <Button
        onPress={() => navigation.navigate('TScreen')}
        title={'Go to Text Screen'}
      />

      <Button
        onPress={() => navigation.navigate('BScreen')}
        title={'Go to Box Screen'}
      />

      <Button
        onPress={() => navigation.navigate('Search')}
        title={'Go to Search Screen'}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
