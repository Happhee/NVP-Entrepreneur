import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Keyboard } from 'react-native';
import colors from '../../assets/colors/color';
import authStyles from '../../assets/styles/auth';
import { FooterButton } from '../common/Button';
import Header from '../common/Header';
import IconButton from '../common/IconButton';
import { TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
function Login(props) {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    console.log(props.entrepreneur);
    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                if (value) {
                    console.log('여기 ' + value);
                    props.getProfile({ id: value })
                    navigation.navigate('Main')
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }, [props.entrepreneur])

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="LOGIN" />
                <View style={authStyles.inputRoot}>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>ID</Text>
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
                        <Text style={authStyles.inputTitleText}>PW</Text>
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
                            console.log(id)
                            props.login({ id: id, password: password })
                            setLogin(true)

                        }} />
                    </View>

                    <View style={authStyles.footerButtonView}>
                        <FooterButton onPress={() => { navigation.navigate('ChoiceIdPassword') }} buttonText='Finding ID/PW' />
                        <FooterButton onPress={() => { navigation.navigate('EntrepreneurInfo') }} buttonText='SIGN UP' />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Login;