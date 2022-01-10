import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthStack/Login';
import ChoiceIdPasswordScreen from '../screens/AuthStack/ChoiceIdPassword';
import EntrepreneurInfoScreen from '../screens/AuthStack/EntrepreneurInfo';
import FindIdScreen from '../screens/AuthStack/FindId';
import FindPasswordScreen from '../screens/AuthStack/FindPassword';
import StoreInfoScreen from '../screens/AuthStack/StoreInfo';
import IdPasswordScreen from '../screens/AuthStack/IdPassword';
import SearchAddressScreen from '../screens/AuthStack/SearchAddress';

const Stack = createNativeStackNavigator();

const AuthStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false
                }} />
            <Stack.Screen name="SearchAddress" component={SearchAddressScreen} />
            <Stack.Screen name='ChoiceIdPassword' component={ChoiceIdPasswordScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false
                }} />
            <Stack.Screen name='EntrepreneurInfo' component={EntrepreneurInfoScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false
                }} />
            <Stack.Screen name='FindId' component={FindIdScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false
                }} />
            <Stack.Screen name='FindPassword' component={FindPasswordScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false
                }} />
            <Stack.Screen name='StoreInfo' component={StoreInfoScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false
                }} />
            <Stack.Screen name='IdPassword' component={IdPasswordScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false
                }} />

        </Stack.Navigator>
    )
}

export default AuthStackScreen;