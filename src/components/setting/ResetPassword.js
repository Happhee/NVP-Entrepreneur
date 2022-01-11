
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';

import settingStyles from '../../assets/styles/setting';
import SetPassword from '../common/SetPassword';


function ResetPassword(props) {
    const navigation = useNavigation();
    console.log(props.entrepreneur)
    return (
        <View style={settingStyles.container}>
            <SetPassword setPassword={(password) => {
                props.resetPassword({ id: props.entrepreneur.id, password: password })
            }} />
        </View>
    )

}

export default ResetPassword;