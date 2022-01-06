import { connect } from "react-redux";
import MyInformation from "../../components/setting/MyInformation";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(MyInformation);