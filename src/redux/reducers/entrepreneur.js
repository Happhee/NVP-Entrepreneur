import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import { AUTO_LOGIN, AUTO_LOGIN_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/actionTypes";

const initialState = {
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

function entrepreneurReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
        case AUTO_LOGIN:
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
                loading: true
            }

        case LOGIN_FAILURE:
            Alert.alert('로그인에 실패하였습니다')
            return initialState;

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
            }

        case LOGOUT:
            AsyncStorage.clear();
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
    }
    return { ...state }
}

export default entrepreneurReducer;