import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import { API_CHECK_ENTREPRENEUR_STATUS, API_CHECK_ENTREPRENEUR_STATUS_FAILURE, API_CHECK_ENTREPRENEUR_STATUS_SUCCESS, API_REQUEST } from "../actions/actionTypes";

const initialState = {
    b_no: '',
    loading: false,
    message: ''
}

function apiReducer(state = initialState, action) {
    switch (action.type) {
        case API_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case API_CHECK_ENTREPRENEUR_STATUS_SUCCESS:
            Alert.alert(action.payload.tax_type)

            return {
                ...state,
                b_no: action.b_no,
                message: action.payload.tax_type,
                loading: true
            }

        case API_CHECK_ENTREPRENEUR_STATUS_FAILURE:
            Alert.alert('요청에 실패하였습니다')
            return initialState;
    }
    return { ...state }
}

export default apiReducer;