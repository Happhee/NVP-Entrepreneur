import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackScreen from './HomeStack';
import SettingStackScreen from './SettingStack';

import Icon from 'react-native-vector-icons/Ionicons';
import tabStyles from '../assets/styles/tab';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = (props) => {
    return (
        <Tab.Navigator initialRouteName="HomeStack"
            barStyle={tabStyles.bottomTab}>
            <Tab.Screen name="HomeStack" component={HomeStackScreen}
                options={{
                    tabBarLabel: 'My Certificate',
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? "file-tray-full" : 'file-tray-full-outline'}
                            size={20} color={focused ? '#41624A' : '#9E9E9E'} />
                    )
                }} />
            <Tab.Screen name="SettingStack" component={SettingStackScreen}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? "ios-settings-sharp" : 'ios-settings-outline'}
                            size={20} color={focused ? '#41624A' : '#9E9E9E'} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainTabScreen;