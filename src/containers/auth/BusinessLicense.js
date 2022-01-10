import { connect } from "react-redux";
import BusinessLicense from "../../components/auth/BusinessLicense";
import { setBusinessLicense } from "../../redux/actions/auth";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        setBusinessLicense: (dataToSubmit) => {
            dispatch(setBusinessLicense(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(BusinessLicense);