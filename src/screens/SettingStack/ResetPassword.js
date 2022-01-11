import * as React from 'react';
import { View } from 'react-native';
import ResetPassword from '../../containers/setting/ResetPassword';
function ResetPasswordScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <ResetPassword />
        </View>
    )
}
export default ResetPasswordScreen;