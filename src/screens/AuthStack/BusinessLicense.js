import * as React from 'react';
import { View } from 'react-native';
import BusinessLicense from '../../containers/auth/BusinessLicense';
function BusinessLicenseScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <BusinessLicense />
        </View>
    )
}
export default BusinessLicenseScreen;