import React, { useState } from 'react';
import { View, Text, Button, TextInput, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import authStyles from '../../assets/styles/auth';
import Header from '../common/Header';
import colors from '../../assets/colors/color';
import { FooterButton, ConfirmButton, IconButton, FontAwesomeButton } from '../common/Button';
import { isName } from '../../utils/regex';
import { NOT_ENTREPRENEUR_NUMBER } from '../../redux/actions/actionTypes';

function EntrepreneurInfo(props) {
    const [number, setNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('remove')

    const navigation = useNavigation();
    console.log(props)

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="사업자 정보 입력" />
                <View style={authStyles.inputRoot}>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>사업자  등록번호</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={10}
                            placeholder="숫자 10자리"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(inputNumber) => {
                                setNumber(inputNumber);
                                if (inputNumber.length == 10) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='확인' onPress={() => {
                            console.log('사업자 등록번호')
                            props.checkEntrepreneurStatus({ b_no: [number] })
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>대표자  성명</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholderTextColor={colors.nvpUnder}
                            placeholder="한글2-4자"
                            onChangeText={(inputName) => {
                                setName(inputName);

                            }}
                        />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>개업일자</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={8}
                            placeholder="YYYYMMDD"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(inputStartDate) => {
                                setStartDate(inputStartDate);
                                if (inputStartDate.length == 8) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                    </View>
                    <View style={authStyles.buttonView}>
                        <ConfirmButton buttonText='사업자 등록증 촬영하기' onPress={() => {
                            navigation.navigate('BusinessLicense')
                        }} />
                    </View>

                </View>
                <View style={authStyles.nextButtonView}>
                    <View style={authStyles.loginButtonView}>
                        <FontAwesomeButton icon={icon} size={70} onPress={() => {
                            const dataToSubmit = {
                                "businesses": [{
                                    "b_no": number,
                                    "start_dt": startDate,
                                    "p_nm": name,
                                }]
                            }
                            // if (props.api.message === NOT_ENTREPRENEUR_NUMBER) {
                            //     Alert.alert('사업자 인증을 먼저 해주세요')
                            // } else 
                            if (!isName(name)) {
                                Alert.alert('이름을 정확하게 입력해주세요')
                            } else if (startDate.length != 8) {
                                Alert.alert('개업일자를 형식에 맞춰 입력해주세요')
                            } else {
                                console.log(dataToSubmit)
                                props.checkEntrepreneurVaildate(dataToSubmit);
                            }
                            setIcon('arrow-right')
                            navigation.navigate('StoreInfo')
                        }} />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default EntrepreneurInfo;