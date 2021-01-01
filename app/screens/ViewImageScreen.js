import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    Image, 
    View,
} from 'react-native';

import colors from "../config/colors";

function ViewImageScreen(props) {
    return (
        <View 
            style={styles.container}
        >
            <View
                style={styles.buttons}
            >
                <View style={styles.leftButton}></View>
                <View style={styles.rightButton}></View>
            </View>
            <Image
            source={require("../assets/chair.jpg")}
            resizeMode="contain"
            style={styles.image}
            >
            </Image>
        </View>
        
    );
}

const styles = StyleSheet.create({

    buttons:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        // position: "absolute",
    },

    container:{
        backgroundColor: "#000",
        flex: 1,
    },

    image:{
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },

    leftButton:{
        backgroundColor: colors.primary,
        width: 70,
        height: 70,
        top: 40,
        left: 20,
    },

    rightButton:{
        backgroundColor: colors.secondary,
        width: 70,
        height: 70,
        top: 40,
        right: 20,
    }


})

export default ViewImageScreen;

