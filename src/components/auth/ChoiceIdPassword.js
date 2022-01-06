import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Keyboard } from 'react-native';
import colors from '../../assets/colors/color';
import authStyles from '../../assets/styles/auth';
import { FontAwesomeButton, FooterButton, MaterialCommunityIconsButton } from '../common/Button';
import Header from '../common/Header';
import IconButton from '../common/IconButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native';

function ChoiceIdPassword(props) {
    const navigation = useNavigation();

    return (
        <View style={authStyles.container}>
            <Header title="NVP" subTitle="아이디/비번 찾기" />


            <View style={authStyles.findRoot}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate('FindId');
                }}>
                    <View style={authStyles.findButtonView}>
                        <FontAwesome
                            size={120} name="id-card-o" color='white' />
                        <Text style={authStyles.findTitileText} >아이디 찾기</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate('FindPassword');
                }}>
                    <View style={authStyles.findButtonView}>
                        <MaterialCommunityIcons
                            size={120} name="cellphone-key" color='white' />
                        <Text style={authStyles.findTitileText} >비밀번호 찾기</Text>

                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View >
    )
}
export default ChoiceIdPassword;