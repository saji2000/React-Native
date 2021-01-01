import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    Image, 
    Text, 
} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source = {require("../assets/background.jpg")}
        style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                ></Image>
                <Text>Sell What You Don't need</Text>
            </View>
            <View style={styles.login}></View>
            <View style={styles.register}></View>
        </ImageBackground>
            
  
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    login:{
        width:"100%",
        height: "8%",
        backgroundColor: '#fc5c65',
    },

    logo:{
        width: 150,
        height: 150,
        
    },

    logoContainer:{
        position: "absolute",
        top: "10%",
        alignItems: "center",
    },

    register:{
        width:"100%",
        height: "10%",
        backgroundColor: '#4ecdc4',
    },

})

export default WelcomeScreen;
