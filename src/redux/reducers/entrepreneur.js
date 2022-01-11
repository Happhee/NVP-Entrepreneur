import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import { AUTO_LOGIN, AUTO_LOGIN_FAILURE, AUTO_LOGIN_SUCCESS, DELETE_ENTREPRENEUR, DELETE_ENTREPRENEUR_FAILURE, DELETE_ENTREPRENEUR_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, RESET_PASSWORD, RESET_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS } from "../actions/actionTypes";

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
        case DELETE_ENTREPRENEUR:
        case RESET_PASSWORD:
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
            Alert.alert('❌ 로그인에 실패하였습니다 ❌')
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
            Alert.alert('⭐️ 로그아웃 되었습니다 ⭐️')
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
            Alert.alert('⭐️ 회원탈퇴 되었습니다 ⭐️')
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
            Alert.alert('❌ 회원탈퇴에 실패하였습니다 ❌')
            return {
                ...state,
                loading: false

            };
        case RESET_PASSWORD_SUCCESS:
            Alert.alert('⭐️ 비밀번호가 변경 되었습니다 ⭐️');
            return {
                ...state,
                loading: false

            };
        case RESET_PASSWORD_FAILURE:
            Alert.alert('❌ 비밀번호 변경에 실패하였습니다 ❌')
            return {
                ...state,
                loading: false

            };
    }
    return { ...state }
}

export default entrepreneurReducer;