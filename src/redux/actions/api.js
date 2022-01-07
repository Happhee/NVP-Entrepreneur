import apiInstance from "../../lib/apiInstance";
import { API_STATUS_URL, API_VAILDATE_URL, SERVICE_KEY } from "../../lib/url";
import { API_CHECK_ENTREPRENEUR_STATUS, API_CHECK_ENTREPRENEUR_STATUS_FAILURE, API_CHECK_ENTREPRENEUR_STATUS_SUCCESS, API_REQUEST } from "./actionTypes";

export const checkEntrepreneurStatus = (dataToSubmit) => {
    return (dispatch) => {
        console.log('api요청');
        dispatch(apiRequest())
        apiInstance.post(API_STATUS_URL + SERVICE_KEY, dataToSubmit)
            .then((res) => {
                console.log('api 결과');
                const resData = JSON.parse(res.request._response)
                console.log(resData.data[0]);
                dispatch(checkEntrepreneurStatusSuccess(resData.data[0], dataToSubmit));
            })
            .catch((err) => {
                console.log('api 결과2');


                dispatch(checkEntrepreneurStatusFailure(err))
            })

    }
}

const apiRequest = () => {
    return {
        type: API_REQUEST
    }
}
const checkEntrepreneurStatusSuccess = (payload, dataToSubmit) => {
    console.log('상태 성공')
    return {
        type: API_CHECK_ENTREPRENEUR_STATUS_SUCCESS,
        payload: payload,
        b_no: dataToSubmit.b_no,
    }
}
const checkEntrepreneurStatusFailure = (err) => {
    console.log('상태 실패')
    return {
        type: API_CHECK_ENTREPRENEUR_STATUS_FAILURE,
        payload: err
    }
}




export const checkEntrepreneurVaildate = (dataToSubmit) => {
    return (dispatch) => {
        console.log(dataToSubmit)
        dispatch(apiRequest())
        apiInstance.post(API_VAILDATE_URL + SERVICE_KEY, dataToSubmit)
            .then((res) => {
                console.log('api 결과');
                const resData = JSON.parse(res.request._response)
                console.log(resData.data[0]);
                dispatch(checkEntrepreneurVaildateSuccess(resData.data[0], dataToSubmit));
            })
            .catch((err) => {
                console.log('api 결과2');
                dispatch(checkEntrepreneurVaildateFailure(err))
            })

    }
}


const checkEntrepreneurVaildateSuccess = (payload, dataToSubmit) => {
    console.log('상태 성공')
    return {
        type: API_CHECK_ENTREPRENEUR_STATUS_SUCCESS,
        payload: payload,
        b_no: dataToSubmit.b_no,
    }
}
const checkEntrepreneurVaildateFailure = (err) => {
    console.log('상태 실패')
    return {
        type: API_CHECK_ENTREPRENEUR_STATUS_FAILURE,
        payload: err
    }
}