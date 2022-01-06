import { connect } from "react-redux";
import SettingMain from "../../components/setting/SettingMain";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(SettingMain);