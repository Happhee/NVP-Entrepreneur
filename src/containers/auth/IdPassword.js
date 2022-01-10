import { connect } from "react-redux";
import IdPassword from "../../components/auth/IdPassword";
import { checkDuplicateId } from "../../redux/actions/auth";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        checkDuplicateId: (dataToSubmit) => {
            dispatch(checkDuplicateId(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(IdPassword);