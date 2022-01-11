import { AUTO_LOGIN, AUTO_LOGIN_FAILURE, AUTO_LOGIN_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/actionTypes";
import axiosInstance from "../../lib/axiosInstance";
import { ENTREPRENEUR_URL, LOGIN_URL, PROFILE_URL } from "../../lib/url";
export const login = (dataToSubmit) => {
    return (dispatch) => {
        console.log('로그인요청');
        dispatch(loginRequest())
        axiosInstance.post(ENTREPRENEUR_URL + LOGIN_URL, dataToSubmit)
            .then((res) => {
                console.log('로그인성공');
                console.log(res.data)
                dispatch(loginSuccess(res.data.data, dataToSubmit));
            })
            .catch((err) => {
                console.log('로그인실패');

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
        data: dataToSubmit
    }
}
const loginFailure = (err) => {
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}


export const autoLogin = (dataToSubmit) => {
    return (dispatch) => {
        console.log('자동로그인요청')
        console.log(dataToSubmit);
        dispatch(autoLoginRequest())

        axiosInstance.get(ENTREPRENEUR_URL + PROFILE_URL, dataToSubmit)
            .then((res) => {
                dispatch(autoLoginSuccess(res.data.data, dataToSubmit))
            })
            .catch(err => {
                dispatch(autoLoginFailure(err))
            })
    }
}

const autoLoginRequest = () => {
    return {
        type: AUTO_LOGIN,
    }
}

const autoLoginSuccess = (payload, dataToSubmit) => {
    return {
        type: AUTO_LOGIN_SUCCESS,
        data: dataToSubmit,
        payload: payload
    }
}

const autoLoginFailure = (err) => {
    return {
        type: AUTO_LOGIN_FAILURE,
        data: err,
    }
}

