import { AUTO_LOGIN, AUTO_LOGIN_FAILURE, AUTO_LOGIN_SUCCESS, DELETE_ENTREPRENEUR, DELETE_ENTREPRENEUR_FAILURE, DELETE_ENTREPRENEUR_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER_NFC_ID, REGISTER_NFC_ID_FAILURE, REGISTER_NFC_ID_SUCCESS } from "../actions/actionTypes";
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
                dispatch(autoLoginFailure(err.response.data.message))
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



export const logout = () => {
    return { type: LOGOUT }
}



export const deleteEntrepreneur = (dataToSubmit) => {
    return (dispatch) => {
        console.log('회원삭제');
        dispatch(deleteEntrepreneurRequest())
        console.log(dataToSubmit);

        axiosInstance.delete(ENTREPRENEUR_URL, { data: dataToSubmit })
            .then((res) => {
                console.log('회원삭제성공');

                dispatch(deleteEntrepreneurSuccess())
            })
            .catch((err) => {
                console.log('회원삭제실패');

                dispatch(deleteEntrepreneurFailure(err))
            })
    }
}

export const deleteEntrepreneurRequest = () => {
    return {
        type: DELETE_ENTREPRENEUR
    }
}

export const deleteEntrepreneurSuccess = () => {
    console.log('회원삭제성공');

    return {
        type: DELETE_ENTREPRENEUR_SUCCESS
    }
}

export const deleteEntrepreneurFailure = (err) => {
    return {
        type: DELETE_ENTREPRENEUR_FAILURE,
        message: err
    }
}


export const registerNfcId = (dataToSubmit) => {
    return (dispatch) => {
        console.log('회원삭제');
        dispatch(registerNfcIdRequest())
        console.log(dataToSubmit);

        // axiosInstance.post(ENTREPRENEUR_URL, { data: dataToSubmit })
        //     .then((res) => {
        //         console.log('일련번호 등록 성공');

        //         dispatch(registerNfcIdSuccess(dataToSubmit))
        //     })
        //     .catch((err) => {
        //         console.log('일련번호 등록 실패');

        //         dispatch(registerNfcIdFailure(err))
        //     })
    }
}

const registerNfcIdRequest = () => {
    console.log('요청')
    return {
        type: REGISTER_NFC_ID,
    }
}

const registerNfcIdSuccess = (dataToSubmit) => {
    return {
        type: REGISTER_NFC_ID_SUCCESS,
        data: dataToSubmit
    }
}

const registerNfcIdFailure = (err) => {
    return {
        type: REGISTER_NFC_ID_FAILURE,
        message: err
    }
}