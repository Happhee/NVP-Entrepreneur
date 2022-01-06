import * as React from 'react';
import { View } from 'react-native';
import EntrepreneurInfo from '../../containers/auth/EntrepreneurInfo';
function EntrepreneurInfoScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <EntrepreneurInfo />
        </View>
    )
}
export default EntrepreneurInfoScreen;