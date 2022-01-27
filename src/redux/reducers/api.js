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
            Alert.alert('This is a business number that is not registered with the National Tax Service')

            return {
                ...state,
                b_no: action.b_no,
                message: action.payload.tax_type,
                loading: true
            }

        case API_CHECK_ENTREPRENEUR_STATUS_FAILURE:
            return initialState;
    }
    return { ...state }
}

export default apiReducer;