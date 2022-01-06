import { connect } from "react-redux";
import EntrepreneurInfo from "../../components/auth/EntrepreneurInfo";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(EntrepreneurInfo);