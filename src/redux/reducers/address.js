import AsyncStorage from "@react-native-community/async-storage";
import { LOGOUT, VERIFICATION_SMS_MESSAGE } from "../actions/actionTypes";

const initialState = {
    postcode: '',
    addr: '',
    extraAddr: '',
    loading: false
}

function addressReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return { ...initialState };
    }
    return { ...state }
}

export default addressReducer;