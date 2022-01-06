import * as React from 'react';
import { View } from 'react-native';
import MyInformation from '../../containers/setting/MyInformation';
function MyInformationScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MyInformation />
        </View>
    )
}
export default MyInformationScreen;