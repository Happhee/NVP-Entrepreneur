import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import authStyles from '../../assets/styles/auth';
import Header from '../common/Header';
import colors from '../../assets/colors/color';
import { FooterButton, ConfirmButton, IconButton, FontAwesomeButton } from '../common/Button';

function SetPassword(props) {
    const [signupIcon, setSignUpIcon] = useState('close');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successPassword, setSuccessPassword] = useState(false);
    const navigation = useNavigation();


    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="PW 재설정" />
                <View style={authStyles.inputRoot}>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>새로운   비밀번호</Text>
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
                        <ConfirmButton buttonText='설정' onPress={() => {
                            if (password.length === 6) {
                                Alert.alert('간편번호 확인을 진행해주세요')
                            }
                            else {
                                Alert.alert('간편번호는 6자리로 입력해주세요')
                            }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>새로운   비밀번호 확인</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            placeholderTextColor={colors.nvpRoot}
                            secureTextEntry
                            onChangeText={(inputPassword) => {
                                setConfirmPassword(inputPassword);

                            }}
                        />
                        <ConfirmButton buttonText='확인' onPress={() => {
                            Keyboard.dismiss();
                            if (password === confirmPassword) {
                                Alert.alert('비밀번호 설정이 완료되었습니다')
                                setSuccessPassword(true);
                                setSignUpIcon('check');
                            }
                            else {
                                Alert.alert('간편번호가 다릅니다!!')
                            }
                        }} />
                    </View>


                </View>
                <View style={authStyles.nextButtonView}>
                    <View style={authStyles.loginButtonView}>
                        <FontAwesomeButton icon={signupIcon} size={70} onPress={() => {
                            props.setPassword(password);

                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default SetPassword;