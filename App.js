import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Alert, 
  SafeAreaView, 
  Platform,
  Dimensions } from 'react-native';

import {useDimensions} from '@react-native-community/hooks';

const hanlePress = () =>(Alert.prompt("My title", "U pressed the button", 
  text => console.log(text) 
  )
);

export default function App() {

  console.log(useDimensions())

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.view}></View>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor:"orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center', // Horizontal
    // justifyContent: 'center', // Vertical
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  view: {
    backgroundColor: "pink",
    width: "100%",
    height: "30%",
  }
});
