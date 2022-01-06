import * as React from 'react';
import { View } from 'react-native';
import SettingMain from '../../containers/setting/SettingMain';
function SettingMainScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SettingMain />
        </View>
    )
}
export default SettingMainScreen;