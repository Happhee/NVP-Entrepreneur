import * as React from 'react';
import { View } from 'react-native';
import NewPassword from '../../containers/auth/NewPassword';
function NewPasswordScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <NewPassword />
        </View>
    )
}
export default NewPasswordScreen;