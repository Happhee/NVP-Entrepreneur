import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import authStyles from '../../assets/styles/auth';
import Header from '../common/Header';
import colors from '../../assets/colors/color';
import { FooterButton, ConfirmButton, IconButton, FontAwesomeButton } from '../common/Button';

function IdPassword(props) {
    const [signupIcon, setSignUpIcon] = useState('close');
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="ID/PW 생성" />
                <View style={authStyles.inputRoot}>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>아이디</Text>
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
                        <ConfirmButton buttonText='검사' onPress={() => {
                            console.log('사업자 등록번호')
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>비밀번호</Text>
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
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>비밀번호 확인</Text>
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
                        <FontAwesomeButton icon={signupIcon} size={70} onPress={() => {
                            navigation.navigate('Login')
                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default IdPassword;