import { connect } from "react-redux";
import ResetPassword from "../../components/setting/ResetPassword";
import { resetPassword } from "../../redux/actions/certificate";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        resetPassword: (dataToSubmit) => {
            dispatch(resetPassword(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(ResetPassword);