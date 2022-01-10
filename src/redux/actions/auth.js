import { CHECK_DUPLICATE_ID, CHECK_DUPLICATE_ID_FAILURE, CHECK_DUPLICATE_ID_SUCCESS, SET_BUSINESS_LICENSE, SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, VERIFICATION_SMS_MESSAGE } from "./actionTypes";
import axiosInstance from "../../lib/axiosInstance";
import { CHECK_ID_URL, ENTREPRENEUR_URL, SIGN_UP_URL } from "../../lib/url";
//인증 성공
export function verifySmsMessage(dataToSubmit) {
    return {
        type: VERIFICATION_SMS_MESSAGE,
        data: dataToSubmit,
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
        axiosInstance.get(ENTREPRENEUR_URL + CHECK_ID_URL, dataToSubmit)
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


export const signup = (dataToSubmit) => {
    return (dispatch) => {
        console.log('회원가입 요청');
        dispatch(signupRequest())
        axiosInstance.post(SIGN_UP_URL, dataToSubmit)
            .then((res) => {
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