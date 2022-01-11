import { connect } from "react-redux";
import Withdrawal from "../../components/setting/Withdrawal";
import { deleteEntrepreneur } from "../../redux/actions/entrepreneur";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        deleteEntrepreneur: (dataToSubmit) => {
            dispatch(deleteEntrepreneur(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Withdrawal);