import { connect } from "react-redux";
import NewPassword from "../../components/auth/NewPassword";
import { newPassword } from "../../redux/actions/auth";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        newPassword: (dataToSubmit) => {
            dispatch(newPassword(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(NewPassword);