import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Postcode from 'react-native-daum-postcode';
const SearchAddress = (props) => {
    const navigation = useNavigation();
    const [extraAddr, setExtraAddr] = useState('');

    console.log(props.address);
    props.address.extraAddr = extraAddr;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Postcode
                style={{ width: 400, height: 200 }}
                jsOptions={{ animated: true }}
                onSelected={(data) => {
                    props.address.addr = '';
                    props.address.extraAddr = '';
                    props.address.postcode = data.zonecode
                    if (data.userSelectedType === 'R') {
                        // 사용자가 도로명 주소를 선택했을 경우
                        props.address.addr = data.roadAddress;

                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                            props.address.extraAddr = data.bname;
                            // 건물명이 있고, 공동주택일 경우 추가한다.

                            if (data.buildingName !== '' && data.apartment === 'Y') {

                                setExtraAddr((prev) => {
                                    return prev !== '' ? `${prev}, ${data.buildingName}` : `${data.buildingName}`;
                                });

                            }
                        } else {
                            props.address.extraAddr = ''

                        }
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        // setExtraAddr(data.jibunAddress);
                        props.address.extraAddr = data.jibunAddress;
                    }
                    // navigation.navigate('StoreInfo');

                }}
            />
        </View>
    );
};
export default SearchAddress;