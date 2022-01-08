import { combineReducers } from "redux";
import addressReducer from "./address";
import apiReducer from "./api";
import authReducer from "./auth";
import entrepreneurReducer from "./entrepreneur";
import smsReducer from "./sms";
export const rootReducer = combineReducers({
    auth: authReducer,
    entrepreneur: entrepreneurReducer,
    api: apiReducer,
    sms: smsReducer,
    address: addressReducer
});