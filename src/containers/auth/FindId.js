import { connect } from "react-redux";
import FindId from "../../components/auth/FindId";
import { findId } from "../../redux/actions/auth";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        findId: (dataToSubmit) => {
            dispatch(findId(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(FindId);