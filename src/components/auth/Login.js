import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Keyboard } from 'react-native';
import colors from '../../assets/colors/color';
import signupStyles from '../../assets/styles/signup';
import FooterButton from '../common/FooterButton';
import Header from '../common/Header';
import IconButton from '../common/IconButton';
import { TouchableWithoutFeedback } from 'react-native';
function Login(props) {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
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
                                if (inputPassword.length == 6) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                    </View>

                </View>

                <View style={signupStyles.footer}>
                    <View style={signupStyles.loginButtonView}>
                        <IconButton icon='login' onPress={() => {
                            console.log('로그인요청')
                            props.login({ id: id, password: password })
                        }} />
                    </View>

                    <View style={signupStyles.footerButtonView}>
                        <FooterButton onPress={() => { navigation.navigate('ChoiceIdPassword') }} buttonText='아이디/비번 찾기' />
                        <FooterButton onPress={() => { navigation.navigate('StoreInfo') }} buttonText='회원가입' />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Login;