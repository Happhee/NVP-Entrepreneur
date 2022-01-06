import { connect } from "react-redux";
import EntrepreneurInfo from "../../components/auth/EntrepreneurInfo";
import { checkEntrepreneurStatus } from "../../redux/actions/api";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        checkEntrepreneurStatus: function (dataToSubmit) {
            dispatch(checkEntrepreneurStatus(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(EntrepreneurInfo);