import { StyleSheet } from "react-native";
import colors from "../colors/color";

const businessLicenseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },
    header: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 40,
    },
    registerFont: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 20,
        color: colors.nvpRoot,
        textAlign: 'center',
        marginBottom: 20
    },
    registerInfo: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flex: 0.5,

    },
    cameraView: {
        flex: 5
    },
});

export default businessLicenseStyles;