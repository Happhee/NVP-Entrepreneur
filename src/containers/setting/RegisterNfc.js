import { connect } from "react-redux";
import RegisterNfc from "../../components/setting/RegisterNfc";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(RegisterNfc);