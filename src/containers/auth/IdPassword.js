import { connect } from "react-redux";
import IdPassword from "../../components/auth/IdPassword";
import { checkDuplicateId, setPassword, signup } from "../../redux/actions/auth";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        checkDuplicateId: (dataToSubmit) => {
            dispatch(checkDuplicateId(dataToSubmit))
        },
        setPassword: (dataToSubmit) => {
            dispatch(setPassword(dataToSubmit))
        },
        signup: (dataToSubmit) => {
            dispatch(signup(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(IdPassword);