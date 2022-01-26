import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import {
    AUTO_LOGIN, AUTO_LOGIN_FAILURE, AUTO_LOGIN_SUCCESS, DELETE_ENTREPRENEUR, DELETE_ENTREPRENEUR_FAILURE, DELETE_ENTREPRENEUR_SUCCESS,
    LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT,
    REGISTER_NFC_ID, REGISTER_NFC_ID_FAILURE, REGISTER_NFC_ID_SUCCESS,
    RESET_PASSWORD, RESET_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    id: '',
    name: '',
    store_num: '',
    store_name: '',
    store_phone: '',
    store_kind: '',
    store_address: '',
    filename: '',
    nfcId: '',
    loading: false
}

function entrepreneurReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case LOGIN:
        case AUTO_LOGIN:
        case DELETE_ENTREPRENEUR:
        case RESET_PASSWORD:
        case REGISTER_NFC_ID:
            return {

                ...state,
                loading: true,
            }

        case LOGIN_SUCCESS:
            console.log(action.payload.accessToken);
            AsyncStorage.multiSet([
                ['accessToken', action.payload.accessToken],
                ['refreshToken', action.payload.refreshToken],
                ['id', action.data.id]
            ]);
            return {
                ...state,
                id: action.data.id,
                password: action.data.password,
                loading: false
            }

        case LOGIN_FAILURE:
        case AUTO_LOGIN_FAILURE:
            Alert.alert('❌ Failed to log in ❌')
            return {
                ...state,
                loading: false
            };

        case AUTO_LOGIN_SUCCESS:
            return {
                ...state,
                id: action.data.id,
                name: action.payload.name,
                store_num: action.payload.store_num,
                store_name: action.payload.store_name,
                store_phone: action.payload.store_phone,
                store_kind: action.payload.store_kind,
                store_address: action.payload.store_address,
                filename: action.payload.filename,
                loading: false
            }

        case LOGOUT:
            AsyncStorage.clear();
            Alert.alert('⭐️ Success Logout ⭐️')
            return {
                ...state,
                id: '',
                name: '',
                store_num: '',
                store_name: '',
                store_phone: '',
                store_kind: '',
                store_address: '',
                filename: '',
            }

        case DELETE_ENTREPRENEUR_SUCCESS:
            AsyncStorage.clear();
            Alert.alert('⭐️ Success Membership Withdrawal ⭐️')
            return {
                ...state,
                id: '',
                name: '',
                store_num: '',
                store_name: '',
                store_phone: '',
                store_kind: '',
                store_address: '',
                filename: '',
                loading: false
            }

        case DELETE_ENTREPRENEUR_FAILURE:
            Alert.alert('❌ Failure Membership Withdrawal ❌')
            return {
                ...state,
                loading: false

            };
        case RESET_PASSWORD_SUCCESS:
            Alert.alert('⭐️ The password has been changed ⭐️');
            return {
                ...state,
                loading: false

            };
        case RESET_PASSWORD_FAILURE:
            Alert.alert('❌ Failed to change the password ❌')
            return {
                ...state,
                loading: false

            };

        case REGISTER_NFC_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                nfcId: data.nfcId
            }

        case REGISTER_NFC_ID_FAILURE:
            Alert.alert('❌ NFC registration failed ❌')
            return {
                ...state,
                loading: false

            };
    }
    return { ...state }
}

export default entrepreneurReducer;