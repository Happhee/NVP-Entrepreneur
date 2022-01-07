import AsyncStorage from "@react-native-community/async-storage";
import { VERIFICATION_SMS_MESSAGE } from "../actions/actionTypes";

const initialState = {
    id: '',
    name: '',
    password: '',
    store_num: '',
    store_name: '',
    store_phone: '',
    store_kind: '',
    store_location: '',
    store_address: '',
    filename: '',
    loading: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case VERIFICATION_SMS_MESSAGE:
            return { ...state }
    }
    return { ...state }
}

export default authReducer;