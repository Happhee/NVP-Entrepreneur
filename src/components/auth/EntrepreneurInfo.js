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
    console.log(props.auth)

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="Business Information" />
                <View style={authStyles.inputRoot}>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputLongTitleText}>Business Registration Number</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={10}
                            placeholder="10 digits"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(inputNumber) => {
                                setNumber(inputNumber);
                                if (inputNumber.length == 10) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='Check' onPress={() => {
                            console.log('????????? ????????????')
                            props.checkEntrepreneurStatus({ b_no: [number] })
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Name</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholderTextColor={colors.nvpUnder}
                            placeholder="2-4"
                            onChangeText={(inputName) => {
                                setName(inputName);

                            }}
                        />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Opening Date</Text>
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
                        <ConfirmButton buttonText='Filming a Business License' onPress={() => {
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
                            //     Alert.alert('????????? ????????? ?????? ????????????')
                            // } else 
                            /*if (!isName(name)) {
                                Alert.alert('????????? ???????????? ??????????????????')
                            } else */if (startDate.length != 8) {
                                Alert.alert('Please enter the opening date according to the format')
                            } else {
                                console.log(dataToSubmit)
                                props.checkEntrepreneurVaildate(dataToSubmit);
                            }
                            setIcon('arrow-right')
                            props.setEntrepreneurInfo({
                                store_num: number,
                                name: name,
                                store_date: startDate
                            })
                            navigation.navigate('StoreInfo', { address: true })
                        }} />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default EntrepreneurInfo;