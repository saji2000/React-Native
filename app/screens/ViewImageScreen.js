import React from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';

function ViewImageScreen(props) {
    return (
        <Image
            source={require("../assets/chair.jpg")}
            style={styles.image}
        >
        </Image>
    );
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%",
    },
})

export default ViewImageScreen;

