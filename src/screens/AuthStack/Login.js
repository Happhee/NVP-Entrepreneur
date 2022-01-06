import * as React from 'react';
import { View } from 'react-native';
import Login from '../../containers/auth/Login';
function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Login />
        </View>
    )
}
export default LoginScreen;