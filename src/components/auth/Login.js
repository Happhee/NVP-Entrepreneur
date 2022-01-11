import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Keyboard } from 'react-native';
import colors from '../../assets/colors/color';
import authStyles from '../../assets/styles/auth';
import { FooterButton } from '../common/Button';
import Header from '../common/Header';
import IconButton from '../common/IconButton';
import { TouchableWithoutFeedback } from 'react-native';
function Login(props) {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (props.entrepreneur.id) {
            props.getProfile({ id: props.entrepreneur.id })
            navigation.navigate('Main')
        }
    }, [props.entrepreneur.id])
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="로그인" />
                <View style={authStyles.inputRoot}>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>아이디</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholder="id"
                            placeholderTextColor={colors.nvpRoot}
                            onChangeText={(inputId) => {
                                setId(inputId);
                            }}
                        />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>비밀번호</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
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

                <View style={authStyles.footer}>
                    <View style={authStyles.loginButtonView}>
                        <IconButton icon='login' onPress={() => {
                            console.log('로그인요청')
                            props.login({ id: id, password: password })

                        }} />
                    </View>

                    <View style={authStyles.footerButtonView}>
                        <FooterButton onPress={() => { navigation.navigate('ChoiceIdPassword') }} buttonText='아이디/비번 찾기' />
                        <FooterButton onPress={() => { navigation.navigate('EntrepreneurInfo') }} buttonText='회원가입' />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Login;