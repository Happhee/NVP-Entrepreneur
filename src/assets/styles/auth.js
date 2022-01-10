import { StyleSheet } from "react-native";
import colors from "../colors/color";
const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%'
    },
    inputRoot: {
        flex: 1,
        justifyContent: 'space-around'
    },
    storeInfoRoot: {
        flex: 1.6,
        justifyContent: 'space-around'
    },
    inputView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        // flex: 3

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
        width: '55%',
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
    loginButtonView: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    nextButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        alignItems: 'center',
    },
    footerButtonView: {
        flex: 1,
        width: '55%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    findButtonView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.nvpRoot,
        borderRadius: 10,
        margin: 10,
        padding: 20,
        height: '60%'
    },
    findRoot: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '70%'
    },
    findTitileText: {
        color: 'white',
        fontFamily: 'DoHyeon-Regular',
        fontSize: 30,
        textAlign: 'center'
    },


});

export default authStyles;