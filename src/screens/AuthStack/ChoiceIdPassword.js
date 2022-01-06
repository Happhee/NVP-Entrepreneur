import * as React from 'react';
import { View } from 'react-native';
import ChoiceIdPassword from '../../containers/auth/ChoiceIdPassword';
function ChoiceIdPasswordScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ChoiceIdPassword />
        </View>
    )
}
export default ChoiceIdPasswordScreen;