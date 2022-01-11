import Splash from "../components/common/Splash";
import { connect } from 'react-redux';
import { autoLogin } from "../redux/actions/entrepreneur";


function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        autoLogin: (dataToSubmit) => {
            dispatch(autoLogin(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Splash);