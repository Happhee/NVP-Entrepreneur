import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import colors from '../../assets/colors/color'
import { useNavigation } from '@react-navigation/native';
function Splash(props) {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            // AsyncStorage.clear();
            AsyncStorage.getItem('id')
                .then((id) => {
                    console.log('아이디 존재여부')
                    console.log(id)

                    if (id != null) {
                        props.autoLogin({ id: id });
                        navigation.replace('Main');

                    } else {
                        navigation.replace('Auth');
                    }
                }
                );

        }, 3000);
    }, []);
    return (
        <ImageBackground source={require('../../assets/images/appstore.png')} resizeMode="contain" style={styles.image} />
    )
}



const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignContent: 'center',
        width: "100%", height: "100%",
        backgroundColor: 'white',

    },
});

export default Splash;