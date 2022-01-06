import * as React from 'react';
import { View } from 'react-native';
import FindPassword from '../../containers/auth/FindPassword';
function FindPasswordScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FindPassword />
        </View>
    )
}
export default FindPasswordScreen;