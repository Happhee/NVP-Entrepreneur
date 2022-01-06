import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import colors from '../../assets/colors/color';
import signupStyles from '../../assets/styles/signup';
import FooterButton from '../common/FooterButton';
import Header from '../common/Header';

function Login(props) {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={signupStyles.container}>
            <Header title="NVP" subTitle="로그인" />
            <View style={signupStyles.inputRoot}>
                <View style={signupStyles.inputView}>
                    <Text style={signupStyles.inputTitleText}>아이디</Text>
                    <TextInput
                        style={signupStyles.inputTextInput}
                        placeholder="id"
                        placeholderTextColor={colors.nvpRoot}
                        onChangeText={(inputId) => {
                            setId(inputId);
                        }}
                    />
                </View>
                <View style={signupStyles.inputView}>
                    <Text style={signupStyles.inputTitleText}>비밀번호</Text>
                    <TextInput
                        style={signupStyles.inputTextInput}
                        keyboardType="number-pad"
                        maxLength={6}
                        placeholder="password"
                        placeholderTextColor={colors.nvpRoot}
                        secureTextEntry
                        onChangeText={(inputPassword) => {
                            setPassword(inputPassword);
                        }}
                    />
                </View>
            </View>
            <View style={signupStyles.footer}>
                <View style={signupStyles.footerButtonView}>
                    <FooterButton onPress={() => { console.log('아이디비번찾기') }} buttonText='아이디/비번 찾기' />
                    <FooterButton onPress={() => { console.log('회원가입') }} buttonText='회원가입' />
                </View>

            </View>
        </View>
    )
}
export default Login;