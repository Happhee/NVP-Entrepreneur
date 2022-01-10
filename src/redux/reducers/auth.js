import AsyncStorage from "@react-native-community/async-storage";
import { CHECK_DUPLICATE_ID, CHECK_DUPLICATE_ID_FAILURE, CHECK_DUPLICATE_ID_SUCCESS, SET_BUSINESS_LICENSE, SIGN_UP, SIGN_UP_SUCCESS, VERIFICATION_SMS_MESSAGE } from "../actions/actionTypes";

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
    filepath: '',
    loading: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case VERIFICATION_SMS_MESSAGE:
            return { ...state }

        case SET_BUSINESS_LICENSE:
            return {
                ...state,
                filename: action.data.filename,
                filepath: action.data.filepath
            }

        case CHECK_DUPLICATE_ID:
        case SIGN_UP:
            return {
                ...state,
                loading: true,
            }

        case CHECK_DUPLICATE_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                id: action.data.id
            }

        case CHECK_DUPLICATE_ID_FAILURE:
            return {
                ...state,
                loading: false
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false
            }
    }
    return { ...state }
}

export default authReducer;