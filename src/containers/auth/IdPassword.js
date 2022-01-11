import { connect } from "react-redux";
import IdPassword from "../../components/auth/IdPassword";
import { checkDuplicateId, setPassword, signup } from "../../redux/actions/auth";
import { uploadCertificate } from "../../redux/actions/certificate";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        checkDuplicateId: (dataToSubmit) => {
            dispatch(checkDuplicateId(dataToSubmit))
        },
        setPassword: (dataToSubmit) => {
            dispatch(setPassword(dataToSubmit))
        },
        signup: (dataToSubmit) => {
            dispatch(signup(dataToSubmit))
        },
        uploadCertificate: (formData) => {
            dispatch(uploadCertificate(formData));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(IdPassword);