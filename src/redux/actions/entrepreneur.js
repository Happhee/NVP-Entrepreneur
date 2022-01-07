import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/actionTypes";
import axiosInstance from "../../lib/axiosInstance";
import { ENTREPRENEUR_URL, LOGIN_URL } from "../../lib/url";
export const login = (dataToSubmit) => {
    return (dispatch) => {
        console.log('로그인요청');
        dispatch(loginRequest())
        axiosInstance.post(ENTREPRENEUR_URL + LOGIN_URL, dataToSubmit)
            .then((res) => {
                console.loe(res)
                dispatch(loginSuccess(res.data, dataToSubmit));
            })
            .catch((err) => {
                dispatch(loginFailure(err))
            })

    }
}
const loginRequest = () => {
    return {
        type: LOGIN
    }
}
const loginSuccess = (payload, dataToSubmit) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload,
        id: dataToSubmit.id,
        password: dataToSubmit.password
    }
}
const loginFailure = (err) => {
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}
