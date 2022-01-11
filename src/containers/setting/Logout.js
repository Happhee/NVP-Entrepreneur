import { connect } from "react-redux";
import Logout from "../../components/setting/Logout";
import { logout } from "../../redux/actions/entrepreneur";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Logout);