import * as React from 'react';
import { View } from 'react-native';
import StoreInfo from '../../containers/auth/StoreInfo';
function StoreInfoScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StoreInfo />
        </View>
    )
}
export default StoreInfoScreen;