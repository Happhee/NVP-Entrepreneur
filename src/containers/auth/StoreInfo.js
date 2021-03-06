import { connect } from "react-redux";
import StoreInfo from "../../components/auth/StoreInfo";
import { setStoreInfo, verifySmsMessage } from "../../redux/actions/auth";
import { expireMessage, postMessage } from "../../redux/actions/sms";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        postMessage: function (dataToSubmit) {
            dispatch(postMessage(dataToSubmit))
        },
        expireMessage: function (dataToSubmit) {
            dispatch(expireSmsMessage(dataToSubmit))
        },
        verifyMessage: function (dataToSubmit) {
            dispatch(verifySmsMessage(dataToSubmit));
        },
        setStoreInfo: function (dataToSubmit) {
            dispatch(setStoreInfo(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(StoreInfo);