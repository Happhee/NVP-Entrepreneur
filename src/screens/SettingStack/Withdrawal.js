import * as React from 'react';
import { View } from 'react-native';
import Withdrawal from '../../containers/setting/Withdrawal';
function WithdrawalScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Withdrawal />
        </View>
    )
}
export default WithdrawalScreen;