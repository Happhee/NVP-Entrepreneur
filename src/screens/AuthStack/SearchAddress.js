import * as React from 'react';
import { View } from 'react-native';
import SearchAddress from '../../containers/auth/SearchAddress';
function SearchAddressScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SearchAddress />
        </View>
    )
}
export default SearchAddressScreen;