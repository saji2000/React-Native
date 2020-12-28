import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';

// import {useHeaderHeight} from 'react-navigation-stack';

export default function App(){

  return(

    <View style={{
        backgroundColor: "#fff", 
        flex: 1, 
        flexDirection: "row", 
        paddingTop: Platform.OS === "ios" ? 30 : 0,
        justifyContent: "center", // main axis
        alignItems: "center", // secondary axis
      }}
    >
      <View style={[{width: 100, height: 200, alignSelf: "flex-start",}, styles.red]}
      />
      <View style={[styles.dimensions, styles.blue]}
      />
      <View style={[styles.dimensions, styles.gold]}
      />
      <View style={[styles.dimensions, styles.red]}
      />

    </View>

  );
}

const styles = StyleSheet.create({

  dimensions:{
    width: 100,
    height: 100,
  },

  blue:{
    backgroundColor: "blue",
  },

  gold:{
    backgroundColor: "gold",
  },

  red:{
    backgroundColor: "red",
  },
})