import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import store from './redux/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
        <Text style={{ backgroundColor: 'white' }}>
          시작
        </Text>
      </View>
    </Provider>

  )
}

export default App;