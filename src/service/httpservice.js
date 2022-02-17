import axios from "axios";


axios.defaults.baseURL = "http://127.0.0.1:8081";

axios.defaults.headers.common["Cache-Control"] = "no-cache";
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.log("unexpected: ", error);
        // const { data } = error.response;
        // const msg = { data } ? data : error.response;
        // toast.error(`⚠️ ${msg}`);
        return Promise.reject(error);
    }
    console.log(error.response);
    //toast.error(`⚠️ ${error.response.data}`);
    return Promise.reject(error);
});

function setJwt(jwt) {
    if (jwt) axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
};
