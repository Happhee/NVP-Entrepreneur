import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import authStyles from '../../assets/styles/auth';
import Header from '../common/Header';
import colors from '../../assets/colors/color';
import { FooterButton, ConfirmButton, IconButton, FontAwesomeButton } from '../common/Button';

function FindId(props) {
    const [signupIcon, setSignUpIcon] = useState('close');
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="아이디 찾기" />
                <View style={authStyles.inputRoot}>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>이름</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            placeholderTextColor={colors.nvpRoot}
                            secureTextEntry
                            onChangeText={(inputPassword) => {
                                setPassword(inputPassword);
                                if (inputPassword.length == 6) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>전화번호</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            placeholderTextColor={colors.nvpRoot}
                            secureTextEntry
                            onChangeText={(inputPassword) => {
                                setPassword(inputPassword);
                                if (inputPassword.length == 6) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='인증' onPress={() => {
                            console.log('사업자 등록번호')
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>인증번호</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            placeholderTextColor={colors.nvpRoot}
                            secureTextEntry
                            onChangeText={(inputPassword) => {
                                setPassword(inputPassword);
                                if (inputPassword.length == 6) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='확인' onPress={() => {
                            console.log('사업자 등록번호')
                        }} />
                    </View>


                </View>
                <View style={authStyles.nextButtonView}>
                    <View style={authStyles.loginButtonView}>
                        <FontAwesomeButton icon='home' size={70} onPress={() => {
                            navigation.navigate('Login')
                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default FindId;