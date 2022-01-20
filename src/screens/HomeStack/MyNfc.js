import * as React from 'react';
import { View } from 'react-native';
import StoreInfo from '../../containers/auth/StoreInfo';
import MyNfc from '../../containers/home/MyNfc';
function MyNfcscreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MyNfc />
        </View>
    )
}
export default MyNfcscreen;