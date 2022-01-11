import { StyleSheet } from "react-native";
import colors from "../colors/color";
const infoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-around'
    },

    inputView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',


    },
    titleText: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 25,
        width: '30%',
        padding: 5,
        textAlign: 'center'
    },

    titleContent: {
        backgroundColor: colors.signUpInput,
        fontSize: 23,
        fontFamily: 'DoHyeon-Regular',
        color: colors.nvpRoot,
        padding: 10,
        textAlign: 'center',
    },
    border: {
        width: '55%',
        borderRadius: 20,
        padding: 5,
        textAlign: 'center',
        backgroundColor: colors.signUpInput,

    }


});

export default infoStyles;