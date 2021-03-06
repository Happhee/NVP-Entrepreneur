import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyNfcScreen from '../screens/HomeStack/MyNfc';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name="MyNfc" component={MyNfcScreen} />

        </Stack.Navigator>
    )
}

export default HomeStackScreen;