import * as React from 'react';
import { View } from 'react-native';
import RegisterNfc from '../../containers/setting/RegisterNfc';
function RegisterNfcScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <RegisterNfc />
        </View>
    )
}
export default RegisterNfcScreen;