import { connect } from "react-redux";
import FindPassword from "../../components/auth/FindPassword";
import { findPassword } from "../../redux/actions/auth";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        findPassword: (dataToSubmit) => {
            dispatch(findPassword(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(FindPassword);