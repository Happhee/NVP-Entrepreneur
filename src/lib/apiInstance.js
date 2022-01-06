import axios from "axios";
import { API_BASE_URL } from "./url";

const apiInstance = axios.create({
    baseURL: API_BASE_URL
});

apiInstance.interceptors.request.use(
    //요청 보내기전 수행
    async config => {
        console.log(config);


        return config;
    },
    //오류 요청
    function (err) {
        return Promise.reject(err)
    }
)

//응답 가로채기
apiInstance.interceptors.response.use(
    //200대 응답 
    async function (res) {
        console.log('응답')
        console.log(res);
        return res
    },
    // //200 이외 응답
    async function (err) {
        console.log('에러ㅓ')
        // console.log(err.config);
        console.log(err);
        //     const {
        //         config,
        //         res: { status },
        //     } = err;

        //     if (status === 401) {
        //         //토큰 만료시
        //         if (!err.res.ok) {
        //             const originalReq = config;
        //             const refreshToken = await AsyncStorage.getItem('refreshToken');
        //             if (refreshToken) {
        //                 const { data } = await axios.post(
        //                     USER_URL + '/users/refresh',
        //                     { refreshToken },
        //                 );

        //                 const {
        //                     accessToken: newAccessToken,
        //                     refreshToken: newRefreshToken
        //                 } = data;

        //                 await AsyncStorage.multiSet([
        //                     ['accessToken', newAccessToken],
        //                     ['refreshToken', newRefreshToken]
        //                 ]);

        //                 axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        //                 originalReq.headers.Authorization = `Bearer ${newAccessToken}`;
        //                 return axios(originalReq);
        //             }
        //         }
        //     }
        return Promise.reject(err);
    }
)
export default apiInstance;
