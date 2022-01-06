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

function entrepreneurReducer(state = initialState, action) {
    return { ...state }
}

export default entrepreneurReducer;