import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import colors from '../../assets/colors/color';
import buttonStyles from '../../assets/styles/button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const FooterButton = (props) => (
    <Button style={buttonStyles.footerButton}
        mode="contained"
        color={colors.nvpRoot}
        onPress={props.onPress}>
        <Text style={buttonStyles.footerButtonText}>{props.buttonText}</Text>
    </Button>
)

export const ConfirmButton = (props) => (
    <Button style={buttonStyles.confirmButton}
        mode="contained"
        color={colors.nvpRoot}
        onPress={props.onPress}>
        <Text style={buttonStyles.footerButtonText}>{props.buttonText}</Text>
    </Button>
)


export const IconButton = (props) => (
    <Button style={buttonStyles.iconButton}
        mode="contained"
        color={colors.nvpRoot}
        onPress={props.onPress}>
        <Icon name={props.icon} size={70} />
    </Button>
)

export const MaterialCommunityIconsButton = (props) => (

    <MaterialCommunityIcons name={props.icon} size={props.size} />


)

export const FontAwesomeButton = (props) => (
    <Button style={buttonStyles.iconButton}
        mode="contained"
        color={colors.nvpRoot}
        onPress={props.onPress}>
        <FontAwesome name={props.icon} size={props.size} />
        <Text  >{props.buttonName}</Text>
    </Button>
)

