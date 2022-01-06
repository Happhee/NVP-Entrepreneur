import { combineReducers } from "redux";
import authReducer from "./auth";
import entrepreneurReducer from "./entrepreneur";
export const rootReducer = combineReducers({
    auth: authReducer,
    entrepreneur: entrepreneurReducer,
});