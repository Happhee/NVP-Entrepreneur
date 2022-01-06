import AsyncStorage from "@react-native-community/async-storage";

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
        case LOGIN:
            return {
                ...state,
                loading: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
            }
    }
    return { ...state }
}

export default authReducer;