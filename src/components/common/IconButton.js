import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import colors from '../../assets/colors/color';
import buttonStyles from '../../assets/styles/button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const IconButton = (props) => (
    <Button style={buttonStyles.iconButton}
        mode="contained"
        color={colors.nvpRoot}
        onPress={props.onPress}>
        <Icon name={props.icon} size={70} />
    </Button>
)
export default IconButton