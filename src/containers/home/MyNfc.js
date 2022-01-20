import { connect } from "react-redux";
import MyNfc from "../../components/home/MyNfc";
import WriteNfc from "../../components/home/MyNfc";
import { registerNfcId } from "../../redux/actions/entrepreneur";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        registerNfcId: (dataToSubmit) => {
            console.log(dataToSubmit)
            dispatch(registerNfcId(dataToSubmit))
        }

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(WriteNfc);