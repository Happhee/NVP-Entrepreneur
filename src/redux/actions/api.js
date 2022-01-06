import apiInstance from "../../lib/apiInstance";
import { API_STATUS_URL, SERVICE_KEY } from "../../lib/url";
import { API_CHECK_ENTREPRENEUR_STATUS, API_CHECK_ENTREPRENEUR_STATUS_FAILURE, API_CHECK_ENTREPRENEUR_STATUS_SUCCESS } from "./actionTyps";

export const checkEntrepreneurStatus = (dataToSubmit) => {
    return (dispatch) => {
        console.log('api요청');
        dispatch(checkEntrepreneurStatusRequest())
        apiInstance.post(API_STATUS_URL + SERVICE_KEY, dataToSubmit)
            .then((res) => {
                console.log('api 결과');
                console.log(res.request._response)
                dispatch(checkEntrepreneurStatusSuccess(res.data, dataToSubmit));
            })
            .catch((err) => {
                console.log('api 결과2');


                dispatch(checkEntrepreneurStatusFailure(err))
            })

    }
}

const checkEntrepreneurStatusRequest = () => {
    return {
        type: API_CHECK_ENTREPRENEUR_STATUS
    }
}
const checkEntrepreneurStatusSuccess = (payload, dataToSubmit) => {
    return {
        type: API_CHECK_ENTREPRENEUR_STATUS_SUCCESS,
        payload: payload,
        id: dataToSubmit.id,
        password: dataToSubmit.password
    }
}
const checkEntrepreneurStatusFailure = (err) => {
    return {
        type: API_CHECK_ENTREPRENEUR_STATUS_FAILURE,
        payload: err
    }
}