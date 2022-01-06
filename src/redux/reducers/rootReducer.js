import { combineReducers } from "redux";
import apiReducer from "./api";
import authReducer from "./auth";
import entrepreneurReducer from "./entrepreneur";
export const rootReducer = combineReducers({
    auth: authReducer,
    entrepreneur: entrepreneurReducer,
    api: apiReducer
});