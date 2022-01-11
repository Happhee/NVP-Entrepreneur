import axiosInstance from "../../lib/axiosInstance";
import { ENTREPRENEUR_URL, PROFILE_URL, UPLOAD_URL } from "../../lib/url";

import { CERTIFICATE_UPLOAD, CERTIFICATE_UPLOAD_FAILURE, CERTIFICATE_UPLOAD_SUCCESS, DOWNLOAD_CERTIFICATE, DOWNLOAD_CERTIFICATE_FAILURE, DOWNLOAD_CERTIFICATE_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS } from "./actionTypes";

const CERTIFICATE_URL = '/certificate';

export const uploadCertificate = (formData) => {
    console.log('파일 업로드 하기')
    console.log(formData);
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    return (dispatch) => {
        dispatch(uploadCertificateRequest())
        axiosInstance.post(ENTREPRENEUR_URL + UPLOAD_URL, formData, config)
            .then((res) => {
                console.log(res.data);
                console.log('파일 업로드 하기 성공')

                dispatch(uploadCertificateSuccess({ filepath: res.path, filename: res.filename }))
            })
            .catch((err) => {
                dispatch(uploadCertificateFailure(err));
            })

    }
}

export const uploadCertificateRequest = () => {
    return {
        type: CERTIFICATE_UPLOAD
    };
}
export const uploadCertificateSuccess = (dataToSubmit) => {
    return {
        type: CERTIFICATE_UPLOAD_SUCCESS,
        data: dataToSubmit
    }
}

export const uploadCertificateFailure = (err) => {
    return {
        type: CERTIFICATE_UPLOAD_FAILURE,
        err: err
    }
}





export const resetPassword = (dataToSubmit) => {
    return (dispatch) => {
        dispatch(resetPasswordRequest())
        axiosInstance.patch(ENTREPRENEUR_URL + PROFILE_URL, dataToSubmit)
            .then((res) => {
                console.log('비빌번호 재설정완료')
                dispatch(resetPasswordSuccess(dataToSubmit))
            })
            .catch((err) => {
                dispatch(resetPasswordFailure(err))
            })
    }
}

const resetPasswordRequest = () => {
    return {
        type: RESET_PASSWORD
    }
}
const resetPasswordSuccess = (dataToSubmit) => {
    return {
        type: RESET_PASSWORD_SUCCESS,
        data: dataToSubmit,
    }
}

const resetPasswordFailure = (err) => {
    return {
        type: RESET_PASSWORD_FAILURE,
        err: err
    }
}

