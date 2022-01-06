import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function EntrepreneurInfo(props) {
    const navigation = useNavigation();

    return (
        <View >
            <Text>EntrepreneurInfo</Text>
            <Button onPress={() => navigation.navigate('StoreInfo')} title="이동" />
        </View>
    )
}
export default EntrepreneurInfo;