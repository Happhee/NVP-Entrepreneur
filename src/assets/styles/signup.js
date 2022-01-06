import { StyleSheet } from "react-native";
import colors from "../colors/color";
const signupStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%'
    },
    inputRoot: {
        flex: 1,
        justifyContent: 'space-around'
    },
    inputView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputTitleText: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 25,
        width: '22%',
        padding: 5,
        textAlign: 'center'
    },
    inputTextInput: {
        backgroundColor: colors.signUpInput,
        fontSize: 23,
        fontFamily: 'DoHyeon-Regular',
        color: colors.nvpRoot,
        width: '70%',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        textAlign: 'center',
    },

    contentInput: {
        backgroundColor: colors.signUpInput,
        fontSize: 23,
        fontFamily: 'DoHyeon-Regular',
        color: colors.nvpRoot,
        width: '50%',
        borderRadius: 10,
        padding: 5,
        marginRight: 10,
        textAlign: 'center',
    },
    meesageContent: {
        marginBottom: 5,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    messageInput: {
        backgroundColor: colors.signUpInput,
        fontSize: 23,
        fontFamily: 'DoHyeon-Regular',
        color: colors.nvpRoot,
        width: '100%',
        borderRadius: 10,
        padding: 5,
        marginRight: 10,
        textAlign: 'center',
    },

    footer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    footerButtonView: {
        flex: 2,
        width: '55%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }

});

export default signupStyles;