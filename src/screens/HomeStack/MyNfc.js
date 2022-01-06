import * as React from 'react';
import { View } from 'react-native';
import MyNfc from '../../containers/home/MyNfc';

function MyNfcScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MyNfc />
        </View>
    )
}
export default MyNfcScreen;