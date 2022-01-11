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

function FindPassword(props) {
    const [findIcon, setFindIcon] = useState('close');
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [store_number, setStoreNumber] = useState('');

    useEffect(() => {

        if (isName(name) && store_number.length === 10) {
            setFindIcon('search')
        }

    })

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="비밀번호 찾기" />
                <View style={authStyles.inputRoot}>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>이름</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholderTextColor={colors.nvpUnder}
                            placeholder="한글2-4자"
                            onChangeText={(input) => {
                                setName(input);

                            }}
                        />
                        <ConfirmButton buttonText='확인' onPress={() => {
                            console.log('사업자 등록번호')
                            if (!isName(name)) {
                                Alert.alert('잘못된 형식의 이름입니다');
                            }
                        }} />
                    </View>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>아이디</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholderTextColor={colors.nvpUnder}
                            placeholder="아이디"
                            onChangeText={(input) => {
                                setId(input);
                            }}
                        />
                        <ConfirmButton buttonText='확인' onPress={() => {
                            console.log('사업자 등록번호')
                            if (!isName(name)) {
                                Alert.alert('잘못된 형식의 이름입니다');
                            }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>사업자  등록번호</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={10}
                            placeholder="숫자 10자리"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(inputNumber) => {
                                setStoreNumber(inputNumber);
                                if (inputNumber.length == 10) {
                                    Keyboard.dismiss();
                                }
                            }}

                        />
                        <ConfirmButton buttonText='확인' onPress={() => {
                            console.log('사업자 등록번호')
                            if (store_number.length != 10) {
                                Alert.alert('10자리로 입력해주세요');
                            }
                        }} />
                    </View>





                </View>
                <View style={authStyles.nextButtonView}>
                    <View style={authStyles.loginButtonView}>
                        <FontAwesomeButton icon={findIcon} size={70} onPress={() => {

                            if (findIcon === 'search') {
                                const dataToSubmit = {
                                    id: id,
                                    name: name,
                                    store_num: store_number
                                };
                                props.findPassword(dataToSubmit);
                            }
                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default FindPassword;