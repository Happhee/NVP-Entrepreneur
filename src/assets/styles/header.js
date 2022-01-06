import { StyleSheet } from "react-native";
import colors from "../colors/color";
const headerStyles = StyleSheet.create({
    headerRoot: {
        flex: 1
    },
    titleView: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 80,
        textDecorationLine: 'underline',
        textDecorationColor: colors.nvpUnder,
        borderBottomWidth: 5,
        marginBottom: 40
    },
    subTitleView: {
        alignItems: 'center',
    },
    subTitleText: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 40,

    },
});

export default headerStyles;