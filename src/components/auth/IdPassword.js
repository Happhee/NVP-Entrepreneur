import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import authStyles from '../../assets/styles/auth';
import Header from '../common/Header';
import colors from '../../assets/colors/color';
import { FooterButton, ConfirmButton, IconButton, FontAwesomeButton } from '../common/Button';

function IdPassword(props) {
    const [signupIcon, setSignUpIcon] = useState('close');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successPassword, setSuccessPassword] = useState(false);
    const navigation = useNavigation();
    console.log(props.auth)

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="Create ID/PW" />
                <View style={authStyles.inputRoot}>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>ID</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholderTextColor={colors.nvpRoot}
                            onChangeText={(inputId) => {
                                setId(inputId);

                            }}
                        />
                        <ConfirmButton buttonText='Check' onPress={() => {
                            props.checkDuplicateId({ id: id })
                            Keyboard.dismiss();
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>PW</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            placeholder="6 digits"
                            placeholderTextColor={colors.nvpUnder}
                            secureTextEntry
                            onChangeText={(inputPassword) => {
                                setPassword(inputPassword);
                                if (inputPassword.length == 6) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='Set' onPress={() => {
                            if (password.length === 6) {
                                Alert.alert('Please check the simple number.')
                            }
                            else {
                                Alert.alert('Please enter the simple number in 6 digits.')
                            }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Checking the PW</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            placeholderTextColor={colors.nvpRoot}
                            secureTextEntry
                            onChangeText={(inputPassword) => {
                                setConfirmPassword(inputPassword);

                            }}
                        />
                        <ConfirmButton buttonText='Check' onPress={() => {
                            Keyboard.dismiss();
                            if (password === confirmPassword) {
                                Alert.alert('I\'m done setting the password')
                                setSuccessPassword(true);
                                props.setPassword({ password: password });
                                if (props.auth.id) {
                                    setSignUpIcon('check');
                                }
                                // props.navigation.navigate('CheckCertificate')
                            }
                            else {
                                Alert.alert('The convenience number is different!!');
                            }
                        }} />
                    </View>

                </View>
                <View style={authStyles.nextButtonView}>
                    <View style={authStyles.loginButtonView}>
                        <FontAwesomeButton icon={signupIcon} size={70} onPress={() => {
                            console.log(signupIcon)
                            if (signupIcon === 'check') {
                                const dataToSubmit = {
                                    id: props.auth.id,
                                    name: props.auth.name,
                                    password: props.auth.password,
                                    store_num: props.auth.store_num,
                                    store_name: props.auth.store_name,
                                    store_phone: props.auth.store_phone,
                                    phone: props.auth.store_phone,
                                    store_kind: props.auth.store_date,
                                    store_address: props.auth.store_address,
                                    filename: props.auth.filename
                                }
                                props.signup(dataToSubmit)
                                const formData = new FormData();
                                console.log(formData);
                                const photo = {
                                    uri: props.auth.filepath,
                                    type: 'multipart/form-data',
                                    name: `${props.auth.filename}`
                                }
                                formData.append('image', photo);
                                props.uploadCertificate(formData)
                                navigation.navigate('Login')

                            }
                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}
export default IdPassword;