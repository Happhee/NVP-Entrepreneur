import { connect } from "react-redux";
import EntrepreneurInfo from "../../components/auth/EntrepreneurInfo";
import { checkEntrepreneurStatus } from "../../redux/actions/api";
import { checkEntrepreneurVaildate } from "../../redux/actions/api";
import { setEntrepreneurInfo } from "../../redux/actions/auth";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        checkEntrepreneurStatus: function (dataToSubmit) {
            dispatch(checkEntrepreneurStatus(dataToSubmit))
        },
        checkEntrepreneurVaildate: function (dataToSubmit) {
            dispatch(checkEntrepreneurVaildate(dataToSubmit))
        },
        setEntrepreneurInfo: function (dataToSubmit) {
            dispatch(setEntrepreneurInfo(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(EntrepreneurInfo);