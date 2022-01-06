import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import { API_CHECK_ENTREPRENEUR_STATUS, API_CHECK_ENTREPRENEUR_STATUS_FAILURE, API_CHECK_ENTREPRENEUR_STATUS_SUCCESS } from "../actions/actionTyps";

const initialState = {
    number: '',
    loading: false
}

function apiReducer(state = initialState, action) {
    switch (action.type) {
        case API_CHECK_ENTREPRENEUR_STATUS:
            return {
                ...state,
                loading: true,
            }

        case API_CHECK_ENTREPRENEUR_STATUS_SUCCESS:
            return {
                ...state,

                loading: true
            }

        case API_CHECK_ENTREPRENEUR_STATUS_FAILURE:
            Alert.alert('요청에 실패하였습니다')
            return initialState;
    }
    return { ...state }
}

export default apiReducer;