import * as React from 'react';
import { View, Text } from 'react-native';
import infoStyles from '../../assets/styles/information';
function MyInformation(props) {
    console.log(props.entrepreneur)
    return (
        <View style={infoStyles.container}>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>이름</Text>
                <View style={infoStyles.border}>

                    <Text style={infoStyles.titleContent}>{props.entrepreneur.name}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>아이디</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.id}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>상호명</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_name}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>가게           전화번호</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_phone}</Text>
                </View>
            </View>

            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>주소</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_address}</Text>
                </View>
            </View>
            <View style={infoStyles.inputView}>
                <Text style={infoStyles.titleText}>개업날짜</Text>
                <View style={infoStyles.border}>
                    <Text style={infoStyles.titleContent}>{props.entrepreneur.store_kind}</Text>
                </View>
            </View>
        </View>
    )
}
export default MyInformation;