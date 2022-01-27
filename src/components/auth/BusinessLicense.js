import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import businessLicenseStyles from '../../assets/styles/businessLicense';
import RectangleCamera from '../common/RectangleCamera';

function BusinessLicense(props) {
    console.log(props.auth)
    const navigation = useNavigation();

    return (

        <View style={businessLicenseStyles.container}>

            <View style={businessLicenseStyles.header}>
                <Text style={businessLicenseStyles.headerFont}>Business license</Text>
                <Text style={businessLicenseStyles.headerFont}> Photo shoot</Text>
            </View>
            <View style={businessLicenseStyles.registerInfo}>
                <Text style={businessLicenseStyles.registerFont}>Please take a photo of your registration card</Text>
                <Text style={businessLicenseStyles.registerFont}>so that a square box appears</Text>
            </View>

            <View style={businessLicenseStyles.cameraView} >
                <RectangleCamera setBusinessLicense={(businessLicenseName, businessLicenseFilePath) => {
                    const dataToSubmit = { filename: businessLicenseName, filepath: businessLicenseFilePath };
                    console.log(businessLicenseName);
                    props.setBusinessLicense(dataToSubmit);
                    navigation.navigate('EntrepreneurInfo');

                }
                } />
            </View>

        </View >

    )
}

export default BusinessLicense;