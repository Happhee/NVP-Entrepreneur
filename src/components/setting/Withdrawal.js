import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import settingStyles from '../../assets/styles/setting';
import { ConfirmButton } from '../common/Button';



function WithdrawalUser(props) {
    const navigation = useNavigation();
    return (

        <View style={settingStyles.container}>
            <View style={settingStyles.settingView}>
                <Text style={settingStyles.contentFont}>Do you really want to leave the membership?</Text>
                <View style={settingStyles.buttonView}>
                    <ConfirmButton buttonText="Membership Withdrawal"
                        onPress={function () {
                            props.deleteEntrepreneur({ id: props.entrepreneur.id });
                            navigation.replace('Auth');
                        }}
                    />
                </View>
            </View>
        </View>
    )

}

export default WithdrawalUser;