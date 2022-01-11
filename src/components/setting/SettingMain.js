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
                <Button title="NFC 등록" />
            </View>

            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('MyInformation')} >
                <Text style={settingStyles.contentFont} >사업자 정보조회</Text>
            </View>



            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('ResetPassword')} >

                <Text style={settingStyles.contentFont}>비밀번호 재설정</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('Logout')} >

                <Text style={settingStyles.contentFont}>로그아웃</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => navigation.navigate('Withdrawal')} >

                <Text style={settingStyles.contentFont}>회원탈퇴</Text>

            </View>

        </View>
    )

}

export default SettingMain;