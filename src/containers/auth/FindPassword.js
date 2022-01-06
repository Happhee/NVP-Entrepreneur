import { connect } from "react-redux";
import FindPassword from "../../components/auth/FindPassword";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(FindPassword);