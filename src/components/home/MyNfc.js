import * as React from 'react';
import { View, Text } from 'react-native';

function MyNfc(props) {
    console.log(props)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MyNfc</Text>
        </View>
    )
}
export default MyNfc;