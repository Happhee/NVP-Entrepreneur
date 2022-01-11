import { CHECK_DUPLICATE_ID, CHECK_DUPLICATE_ID_FAILURE, CHECK_DUPLICATE_ID_SUCCESS, FIND_ID, FIND_ID_FAILURE, FIND_ID_SUCCESS, FIND_PASSWORD, FIND_PASSWORD_FAILURE, SET_BUSINESS_LICENSE, SET_ENTREPRENEUR_INFO, SET_PASSWORD, SET_STORE_INFO, SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, VERIFICATION_SMS_MESSAGE } from "./actionTypes";
import axiosInstance from "../../lib/axiosInstance";
import { CHECK_ID_URL, ENTREPRENEUR_URL, FIND_ID_URL, FIND_PASSWORD_URL, SIGN_UP_URL } from "../../lib/url";

//인증 성공
export function verifySmsMessage(dataToSubmit) {
    return {
        type: VERIFICATION_SMS_MESSAGE,
        data: dataToSubmit,
    }
}
export const setEntrepreneurInfo = (dataToSubmit) => {
    return {
        type: SET_ENTREPRENEUR_INFO,
        data: dataToSubmit
    }
}
export const setStoreInfo = (dataToSubmit) => {
    return {
        type: SET_STORE_INFO,
        data: dataToSubmit
    }
}
export function setBusinessLicense(dataToSubmit) {
    return {
        type: SET_BUSINESS_LICENSE,
        data: dataToSubmit
    }
}

export const checkDuplicateId = (dataToSubmit) => {
    console.log('아이디 중복 체크');
    console.log(dataToSubmit);
    return (dispatch) => {
        dispatch(checkDuplicateIdRequest())
        axiosInstance.post(ENTREPRENEUR_URL + CHECK_ID_URL, dataToSubmit)
            .then((res) => {
                dispatch(checkDuplicateIdSuccess(dataToSubmit))
            })
            .catch((err) => {
                dispatch(checkDuplicateIdFailure(err))
            })
    }
}

const checkDuplicateIdRequest = () => {
    return {
        type: CHECK_DUPLICATE_ID
    }
}
const checkDuplicateIdSuccess = (dataToSubmit) => {
    return {
        type: CHECK_DUPLICATE_ID_SUCCESS,
        data: dataToSubmit
    }
}
const checkDuplicateIdFailure = (err) => {
    return {
        type: CHECK_DUPLICATE_ID_FAILURE,
        err: err
    }
}
export const setPassword = (dataToSubmit) => {
    return {
        type: SET_PASSWORD,
        data: dataToSubmit
    }
}

export const signup = (dataToSubmit) => {
    return (dispatch) => {
        console.log('회원가입 요청');
        dispatch(signupRequest())
        axiosInstance.post(ENTREPRENEUR_URL + SIGN_UP_URL, dataToSubmit)
            .then((res) => {
                console.log('회원가입 요청');

                const token = res.data;
                dispatch(signupSuccess(dataToSubmit, token));
            })
            .catch((err) => {
                dispatch(signupFailure(err.message))
            })
    }

}




export const signupRequest = (dataToSubmit) => {
    return {
        type: SIGN_UP
    }
}

export const signupSuccess = (dataToSubmit, token) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: token,
        data: dataToSubmit
    }
}

export const signupFailure = (err) => {
    return {
        type: SIGN_UP_FAILURE,
        payload: err
    }
}


export const findId = (dataToSubmit) => {
    return (dispatch) => {
        dispatch(findIdRequest())
        axiosInstance.post(ENTREPRENEUR_URL + FIND_ID_URL, dataToSubmit)
            .then((res) => {
                dispatch(findIdSuccess(res.data))
            })
            .catch((err) => {
                console.log(err.response.data.message)
                dispatch(findIdFailure(err.response.data.message))
            })
    }
}

const findIdRequest = () => {
    return {
        type: FIND_ID
    }
}

const findIdSuccess = (data) => {
    return {
        type: FIND_ID_SUCCESS,
        payload: data
    }
}

const findIdFailure = (err) => {
    return {
        type: FIND_ID_FAILURE,
        message: err
    }
}


export const findPassword = (dataToSubmit) => {
    return (dispatch) => {
        dispatch(findPasswordRequest())
        axiosInstance.post(ENTREPRENEUR_URL + FIND_PASSWORD_URL, dataToSubmit)
            .then((res) => {
                dispatch(findPasswordSuccess(dataToSubmit));
            })
            .catch((err) => {
                dispatch(findPasswordFailure(err.response.data.message))
            })
    }
}

const findPasswordRequest = () => {
    return {
        type: FIND_PASSWORD,
    }
}

const findPasswordSuccess = (data) => {
    return {
        type: FIND_PASSWORD_SUCCESS,
        payload: data
    }
}

const findPasswordFailure = (err) => {
    return {
        type: FIND_PASSWORD_FAILURE,
        message: err
    }
}