import * as React from 'react';
import { View, Text, Button } from 'react-native';
import headerStyles from '../../assets/styles/header';
function Header(props) {

    return (
        <View style={headerStyles.headerRoot}>
            <View style={headerStyles.titleView}>
                <Text style={headerStyles.titleText}>{props.title}</Text>
            </View>
            <View style={headerStyles.subTitleView}>
                <Text style={headerStyles.subTitleText}>{props.subTitle}</Text>
            </View>
        </View>

    )
}
export default Header;