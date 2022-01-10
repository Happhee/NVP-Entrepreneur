import { connect } from "react-redux";
import SearchAddress from "../../components/auth/SearchAddress";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(SearchAddress);