import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/actionTyps";

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

function entrepreneurReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,

                loading: true
            }

        case LOGIN_FAILURE:
            Alert.alert('로그인에 실패하였습니다')
            return initialState;
    }
    return { ...state }
}

export default entrepreneurReducer;