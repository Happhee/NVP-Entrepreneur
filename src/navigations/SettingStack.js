import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoutScreen from '../screens/SettingStack/Logout';
import MyInformationScreen from '../screens/SettingStack/MyInformation';
import RegisterNfcScreen from '../screens/SettingStack/RegisterNfc';
import SettingMainScreen from '../screens/SettingStack/SettingMain';
import WithdrawalScreen from '../screens/SettingStack/Withdrawal';
import ResetPasswordScreen from '../screens/SettingStack/ResetPassword';


const Stack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();


const SettingStackScreen = (props) => {
    console.log('환경설정');

    console.log(props);
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#DDECCA',
                },
                headerTitleStyle: {
                    fontFamily: 'DoHyeon-Regular',
                    fontSize: 28,
                },
                headerBackTitleStyle: {
                    fontSize: 17,
                    fontFamily: 'DoHyeon-Regular',
                },
                headerTintColor: '#41624A',

            }}
        >

            <SettingStack.Screen name="SettingMain" component={SettingMainScreen}
                options={{
                    title: '설정',
                }} />

            <SettingStack.Screen name="MyInformation" component={MyInformationScreen}
                options={{
                    title: '사업자 정보 조회',
                }} />
            <SettingStack.Screen name="RegisterNfc" component={RegisterNfcScreen}
                options={{
                    title: 'NFC 등록',
                }} />
            <SettingStack.Screen name="Logout" component={LogoutScreen}
                options={{
                    title: '로그아웃',
                }} />
            <SettingStack.Screen name="Withdrawal" component={WithdrawalScreen}
                options={{
                    title: '회원탈퇴',
                }} />
            <SettingStack.Screen name="ResetPassword" component={ResetPasswordScreen}
                options={{
                    title: "",
                }} />
        </Stack.Navigator>
    )
}

export default SettingStackScreen;