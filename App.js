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
  Image,
  TouchableHighlight
  } from 'react-native';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

const hanlePress = () =>(Alert.prompt("My title", "U pressed the button", 
  text => console.log(text) 
  )
);

export default function App() {

  console.log(useDimensions())

  const {landscape} = useDeviceOrientation();

  console.log("Finished \n")


  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.view, {height: landscape ? "100%" : "60%"}]}></View>
      {/* <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert('Pressed!')}
      >
        <Image 
          source={require('./assets/icon.png')}
          style={{width:200, height:200}}
          onPress={hanlePress}
        />
      </TouchableHighlight>
      <Text onPress={hanlePress}>Press me</Text> */}
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor:"orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // Horizontal
    // justifyContent: 'center', // Vertical
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  view: {
    backgroundColor: "green",
    width: "100%",
  }
});
