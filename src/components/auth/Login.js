import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Login(props) {
    const navigation = useNavigation();
    return (
        <View >
            <Text style={{ fontFamily: 'DoHyeon-Regular' }}>Login</Text>
            <Button onPress={() => navigation.navigate('EntrepreneurInfo')} title="이동" />
        </View>
    )
}
export default Login;