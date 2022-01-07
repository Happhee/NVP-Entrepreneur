import { VERIFICATION_SMS_MESSAGE } from "./actionTypes";

//인증 성공
export function verifySmsMessage(dataToSubmit) {
    return {
        type: VERIFICATION_SMS_MESSAGE,
        data: dataToSubmit,
    }
}
