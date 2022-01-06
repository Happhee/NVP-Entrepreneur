import * as React from 'react';
import { View } from 'react-native';
import FindId from '../../containers/auth/FindId';
function FindIdScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FindId />
        </View>
    )
}
export default FindIdScreen;