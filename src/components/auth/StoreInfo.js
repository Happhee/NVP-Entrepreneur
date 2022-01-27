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
                <Header title="NVP" subTitle="Store Information" />
                <View style={authStyles.storeInfoRoot}>

                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Store Name</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            onChangeText={(inputStoreName) => {
                                setStoreName(inputStoreName);
                            }}
                        />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputTitleText}>Address</Text>

                        <Text style={authStyles.inputTextInput}>Postal code [{props.address.postcode}] </Text>




                        <ConfirmButton buttonText='Search' onPress={() => {
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
                        <Text style={authStyles.inputTitleText}>Phone Number</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={11}
                            placeholder="Phone Number"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(input) => {
                                setStorePhone(input);
                                if (input.length == 11) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='Certify' onPress={() => {
                            if (isPhoneNumber(storePhone)) {
                                Alert.alert('The valid time is 3 minutes');
                                startTimer();
                                props.postMessage({ phone: storePhone });

                            } else {
                                Alert.alert('Invalid phone number');
                                stopTimer();
                            }
                        }} />
                    </View>
                    <View style={authStyles.inputView}>
                        <Text style={authStyles.inputLongTitleText}>Certified Number</Text>
                        <TextInput
                            style={authStyles.inputTextInput}
                            keyboardType="number-pad"
                            maxLength={6}
                            placeholder="6 digits"
                            placeholderTextColor={colors.nvpUnder}
                            onChangeText={(input) => {
                                setMessage(input);
                                if (input.length == 6) {
                                    Keyboard.dismiss();
                                }
                            }}
                        />
                        <ConfirmButton buttonText='Check' onPress={() => {
                            if (parseInt(props.sms.message) === parseInt(message)) {

                                setSuccessMessage(true);
                                Alert.alert('I succeeded in proving it! Please move on to the next step')
                                setIcon('arrow-right')
                                // props.navigation.navigate('SetPassword')
                                stopTimer();
                                Keyboard.dismiss();
                            }
                            else if (props.sms.message === MESSAGE_TIME_OUT) {
                                Alert.alert('Time for proof has passed! Please re-certify it');
                                Keyboard.dismiss();
                            }
                            else {
                                Alert.alert('Invalid authentication number! Please type it again')
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