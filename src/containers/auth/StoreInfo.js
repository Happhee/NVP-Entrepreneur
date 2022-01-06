import { connect } from "react-redux";
import StoreInfo from "../../components/auth/StoreInfo";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(StoreInfo);