import { StyleSheet } from "react-native";
import colors from "../colors/color";

const buttonStyles = StyleSheet.create({
    footerButton: {
        borderRadius: 10,
        backgroundColor: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 21,
        marginBottom: 10,
        marginLeft: 4,
        marginRight: 4,
    },
    footerButtonText: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 20,
        justifyContent: 'center',
        color: 'white'

    },

});

export default buttonStyles;