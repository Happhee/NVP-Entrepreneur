import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert, Button } from 'react-native';

import settingStyles from '../../assets/styles/setting';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

function SettingMain(props) {
    const navigation = useNavigation();
    console.log(props.entrepreneur);
    return (

        <View style={settingStyles.container}>
            <View style={settingStyles.header}>
                <Button title="Register NFC" />
            </View>

            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('MyInformation')} >
                <Text style={settingStyles.contentFont} >My Information</Text>
            </View>



            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('ResetPassword')} >

                <Text style={settingStyles.contentFont}>Reset the Password</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('Logout')} >

                <Text style={settingStyles.contentFont}>LOG OUT</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('Withdrawal')} >

                <Text style={settingStyles.contentFont}>Membership Withdrawal</Text>

            </View>

        </View>
    )

}

export default SettingMain;