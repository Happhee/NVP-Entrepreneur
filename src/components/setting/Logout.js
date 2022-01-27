
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';

import settingStyles from '../../assets/styles/setting';
// import UserButton from '../UserButton';
import { ConfirmButton } from '../common/Button';

function Logout(props) {
    const navigation = useNavigation();
    return (
        <View style={settingStyles.container}>
            <View style={settingStyles.settingView}>
                <Text style={settingStyles.contentFont}>Do you want really to log out?</Text>
                <View style={settingStyles.buttonView}>
                    <ConfirmButton buttonText="LOGOUT"
                        onPress={function () {
                            props.logout();
                            navigation.replace('Auth');
                        }}
                    />
                </View>
            </View>
        </View>
    )

}

export default Logout;