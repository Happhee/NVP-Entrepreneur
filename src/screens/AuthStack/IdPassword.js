import * as React from 'react';
import { View } from 'react-native';
import IdPassword from '../../containers/auth/IdPassword';
function IdPasswordScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <IdPassword />
        </View>
    )
}
export default IdPasswordScreen;