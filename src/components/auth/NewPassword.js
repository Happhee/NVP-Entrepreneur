
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';

import settingStyles from '../../assets/styles/setting';
import SetPassword from '../common/SetPassword';


function NewPassword(props) {
    const navigation = useNavigation();

    return (
        <View style={settingStyles.container}>
            <SetPassword setPassword={(password) => {
                props.newPassword({ id: props.auth.id, password: password })
            }} />
        </View>
    )

}

export default NewPassword;