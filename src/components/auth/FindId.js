import React, { useState } from 'react';
import { View, Text, Button, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import authStyles from '../../assets/styles/auth';
import Header from '../common/Header';
import colors from '../../assets/colors/color';
import { FooterButton, ConfirmButton, IconButton, FontAwesomeButton } from '../common/Button';
import { isName, isPhoneNumber } from '../../utils/regex';
import { useEffect } from 'react';

function FindId(props) {
    const [findIcon, setFindIcon] = useState('close');
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [store_number, setStoreNumber] = useState('');
    const [phone, setPhone] = useState('')

    useEffect(() => {

        if (isName(name) && isPhoneNumber(phone) && store_number.length === 10) {
            setFindIcon('search')
        }
    })

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="Finding the ID" />
                <View style={authStyles.inputRoot}>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Name</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholderTextColor={colors.nvpUnder}
                            placeholder=""
                            onChangeText={(input) => {
                                setName(input);

                            }}
                        />
                        <ConfirmButton buttonText='Check' onPress={() => {
                            console.log('사업자 등록번호')
                            // if (!isName(name)) {
                            //     Alert.alert('잘못된 형식의 이름입니다');
                            // }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Business Registration Number</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={10}
                            placeholder="10 digits"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(inputNumber) => {
                                setStoreNumber(inputNumber);
                                if (inputNumber.length == 10) {
                                    Keyboard.dismiss();
                                }
                            }}

                        />
                        <ConfirmButton buttonText='Check' onPress={() => {
                            console.log('사업자 등록번호')
                            if (store_number.length != 10) {
                                Alert.alert('Please enter it in 10 digits');
                            }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Phone Number</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={11}
                            placeholder="Phone Number"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(input) => {
                                setPhone(input);
                                if (input.length == 11) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='Check' onPress={() => {
                            console.log('사업자 등록번호')
                            if (!isPhoneNumber(phone)) {
                                Alert.alert('Invalid phone number');
                            }
                        }} />
                    </View>




                </View>
                <View style={authStyles.nextButtonView}>
                    <View style={authStyles.loginButtonView}>
                        <FontAwesomeButton icon={findIcon} size={70} onPress={() => {

                            if (findIcon === 'search') {
                                const dataToSubmit = { name: name, phone: phone, store_num: store_number };
                                console.log(dataToSubmit);
                                props.findId(dataToSubmit)
                            }
                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default FindId;