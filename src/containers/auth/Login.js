import { connect } from "react-redux";
import Login from "../../components/auth/Login";
import { login } from "../../redux/actions/entrepreneur";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        login: function (dataToSubmit) {
            dispatch(login(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Login);