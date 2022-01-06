import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function StoreInfo(props) {

    const navigation = useNavigation();

    return (
        <View>
            <Text>StoreInfo</Text>
            <Button onPress={() => navigation.navigate('IdPassword')} title="이동" />

        </View>
    )
}
export default StoreInfo;