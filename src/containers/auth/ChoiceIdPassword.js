import { connect } from "react-redux";
import ChoiceIdPassword from "../../components/auth/ChoiceIdPassword";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(ChoiceIdPassword);