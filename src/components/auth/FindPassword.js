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

    useEffect(() => {

        if (props.auth.id != '') {
            navigation.navigate('NewPassword')
        }

    }, [props.auth.id])

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="Finding a Password" />
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
                        {/* <ConfirmButton buttonText='확인' onPress={() => {
                            console.log('사업자 등록번호')
                            if (!isName(name)) {
                                Alert.alert('잘못된 형식의 이름입니다');
                            }
                        }} /> */}
                    </View>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>ID</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            placeholderTextColor={colors.nvpUnder}
                            placeholder="ID"
                            onChangeText={(input) => {
                                setId(input);
                            }}
                        />
                        {/* <ConfirmButton buttonText='check' onPress={() => {
                            console.log('사업자 등록번호')
                            if (!isName(name)) {
                                Alert.alert('잘못된 형식의 이름입니다');
                            }
                        }} /> */}
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputLongTitleText}>Business Registration Number</Text>
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