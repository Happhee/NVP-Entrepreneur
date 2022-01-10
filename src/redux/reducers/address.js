import AsyncStorage from "@react-native-community/async-storage";
import { VERIFICATION_SMS_MESSAGE } from "../actions/actionTypes";

const initialState = {
    postcode: '',
    addr: '',
    extraAddr: '',
    loading: false
}

function addressReducer(state = initialState, action) {

    return { ...state }
}

export default addressReducer;