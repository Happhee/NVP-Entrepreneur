import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import authStyles from '../../assets/styles/auth';
import Header from '../common/Header';
import colors from '../../assets/colors/color';
import { FooterButton, ConfirmButton, IconButton, FontAwesomeButton } from '../common/Button';
import { isPhoneNumber } from '../../utils/regex';
import { MESSAGE_TIME_OUT, NO_EXIST_MESSAGE } from '../../redux/actions/actionTypes';
import DaumPostcode from 'react-daum-postcode';
const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

function StoreInfo(props) {
    const [storeName, setStoreName] = useState('');
    const [storePhone, setStorePhone] = useState('');
    const [message, setMessage] = useState(NO_EXIST_MESSAGE)
    const [successMessage, setSuccessMessage] = useState(true);
    const [address, setAddress] = useState(false)

    const [icon, setIcon] = useState('remove')
    const navigation = useNavigation();
    // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
    const [min, setMin] = useState(padNumber(3, 2));
    const [sec, setSec] = useState(padNumber(0, 2));
    const time = useRef(180);
    const timerId = useRef(null);
    const route = useRoute();

    useEffect(() => {
        setAddress(true);
        console.log(
            '재렌더링'
        )
    }, [route.params.address[0]])
    console.log(props.address);
    console.log(props.sms);

    const startTimer = () => {
        clearInterval(timerId.current);
        time.current = 180;
        setMin(padNumber(3, 2));
        setSec(padNumber(0, 2));
        timerId.current = setInterval(() => {
            time.current -= 1;
            setSec(padNumber(time.current % 60, 2));
            setMin(padNumber(parseInt(time.current / 60), 2));
        }, 1000);


    }
    const stopTimer = () => {
        setMin(padNumber(3, 2));
        setSec(padNumber(0, 2));
        clearInterval(timerId.current);
    }
    useEffect(() => {
        if (time.current <= 0) {
            clearInterval(timerId.current);
            props.expireSmsMessage();
        }
    }, [sec]);




    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={authStyles.container}>
                <Header title="NVP" subTitle="가게 정보 입력" />
                <View style={authStyles.storeInfoRoot}>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>상호명</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            onChangeText={(inputStoreName) => {
                                setStoreName(inputStoreName);
                            }}
                        />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>사업장   주소</Text>

                        <Text style={authStyles.inputTextInput}>우편번호 [{props.address.postcode}] </Text>




                        <ConfirmButton buttonText='찾기' onPress={() => {
                            navigation.navigate('SearchAddress')
                        }} />
                    </View>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}></Text>

                        <Text style={authStyles.inputTextInput}>{props.address.addr}</Text>
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}></Text>

                        <Text style={authStyles.inputTextInput}>{props.address.extraAddr}</Text>
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>사업자  전화번호</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={11}
                            placeholder="전화번호"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(input) => {
                                setStorePhone(input);
                                if (input.length == 11) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='인증' onPress={() => {
                            if (isPhoneNumber(storePhone)) {
                                Alert.alert('인증 유효시간은 3분입니다');
                                startTimer();
                                props.postMessage({ phone: storePhone });

                            } else {
                                Alert.alert('잘못된 형식의 전화번호입니다');
                                stopTimer();
                            }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>인증번호</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={6}
                            placeholder="인증번호 확인"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(input) => {
                                setMessage(input);
                                if (input.length == 6) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='확인' onPress={() => {
                            if (parseInt(props.sms.message) === parseInt(message)) {

                                setSuccessMessage(true);
                                Alert.alert('인증에 성공하였습니다! 다음단계로 이동해주세요')
                                setIcon('arrow-right')
                                // props.navigation.navigate('SetPassword')
                                stopTimer();
                                Keyboard.dismiss();
                            }
                            else if (props.sms.message === MESSAGE_TIME_OUT) {
                                Alert.alert('인증시간이 지났습니다! 재인증을 해주세요');
                                Keyboard.dismiss();
                            }
                            else {
                                Alert.alert('잘못된 인증번호입니다! 다시 입력해주세요')
                            }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}></Text>
                        <Text>{min}:{sec}</Text>

                    </View>

                </View>
                <View style={authStyles.nextButtonView}>
                    <View style={authStyles.loginButtonView}>
                        <FontAwesomeButton icon={icon} size={70} onPress={() => {
                            props.setStoreInfo({
                                store_name: storeName,
                                store_address: '[' + props.address.postcode + ']' + props.address.addr + props.address.extraAddr,
                                store_phone: storePhone
                            })
                            navigation.navigate('IdPassword')
                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}
export default StoreInfo;