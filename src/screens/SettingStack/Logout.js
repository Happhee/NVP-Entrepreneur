import * as React from 'react';
import { View } from 'react-native';
import Logout from '../../containers/setting/Logout';
function LogoutScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Logout />
        </View>
    )
}
export default LogoutScreen;