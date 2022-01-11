import * as React from 'react';
import { View, Text } from 'react-native';

function MyNfc(props) {
    console.log(props.entrepreneur)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MyNfc</Text>
        </View>
    )
}
export default MyNfc;