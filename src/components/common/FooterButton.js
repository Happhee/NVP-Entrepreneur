import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import colors from '../../assets/colors/color';
import buttonStyles from '../../assets/styles/button';

const FooterButton = (props) => (
    <Button style={buttonStyles.footerButton}
        mode="contained"
        color={colors.nvpRoot}
        onPress={props.onPress}>
        <Text style={buttonStyles.footerButtonText}>{props.buttonText}</Text>
    </Button>
)
export default FooterButton