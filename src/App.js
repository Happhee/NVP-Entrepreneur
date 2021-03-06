import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import store from './redux/store';

import SplashScreen from './screens/SplashScreen';
import AuthStackScreen from './navigations/AuthStack';
import MainTabScreen from './navigations/MainTab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
          <Stack.Screen name="Main" component={MainTabScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Auth" component={AuthStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App;