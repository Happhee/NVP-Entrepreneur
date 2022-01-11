import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import { CHECK_DUPLICATE_ID, CHECK_DUPLICATE_ID_FAILURE, CHECK_DUPLICATE_ID_SUCCESS, FIND_ID, FIND_ID_FAILURE, FIND_ID_SUCCESS, FIND_PASSWORD, FIND_PASSWORD_FAILURE, FIND_PASSWORD_SUCCESS, SET_BUSINESS_LICENSE, SET_ENTREPRENEUR_INFO, SET_PASSWORD, SET_STORE_INFO, SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, VERIFICATION_SMS_MESSAGE } from "../actions/actionTypes";

const initialState = {
    id: '',
    name: '',
    password: '',
    store_num: '',
    store_name: '',
    store_phone: '',
    store_date: '',
    store_address: '',
    filename: '',
    filepath: '',
    loading: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case VERIFICATION_SMS_MESSAGE:
            return { ...state }

        case SET_ENTREPRENEUR_INFO:
            return {
                ...state,
                store_num: action.data.store_num,
                name: action.data.name,
                store_date: action.data.store_date,

            }
        case SET_STORE_INFO:
            return {
                ...state,
                store_name: action.data.store_name,
                store_address: action.data.store_address,
                store_phone: action.data.store_phone,


            }
        case SET_BUSINESS_LICENSE:
            return {
                ...state,
                filename: action.data.filename,
                filepath: action.data.filepath,

            }

        case CHECK_DUPLICATE_ID:
        case SIGN_UP:
        case FIND_ID:
        case FIND_PASSWORD:
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
        case SET_PASSWORD:
            return {
                ...state,
                password: action.data.password
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case FIND_ID_SUCCESS:
            return {
                ...state,
                id: action.payload.id
            }

        case FIND_PASSWORD_SUCCESS:
            Alert.alert('⭐️ 새 비밀번호를 설정해주세요 ⭐️');
            return {
                ...state,
                loading: false
            }

        case CHECK_DUPLICATE_ID_FAILURE:
        case SIGN_UP_FAILURE:
        case FIND_ID_FAILURE:
        case FIND_PASSWORD_FAILURE:
            Alert.alert(action.message);
            return {
                ...state,
                loading: false
            }


    }
    return { ...state }
}

export default authReducer;