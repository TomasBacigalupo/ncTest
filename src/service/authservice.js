import http from "./httpservice";
import {getLoggedUserInformation} from './apiservice';
import jwtDecode from "jwt-decode";
const apiEndpoint = "/auth";
const tokenKey = "members-secret";


//Required to access protected API endpoints.
http.setJwt(getJwt());

export async function login(username, password) {
    const { data: jwt, status } = await http.post(apiEndpoint, { username, password });
    //const { token } = jwt;
    if(status >= 400){
        return null;
    }
    localStorage.setItem(tokenKey, jwt.token);
    http.setJwt(jwt.token);
}
export function setJwt(jwt){
    localStorage.setItem(tokenKey, jwt);
    http.setJwt(jwt);
}
export async function checkLogin(dni, password) {
    const data = await http.post(apiEndpoint, { dni, password });
    return data;
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        //console.log(jwtDecode(jwt));
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}


export default {
    login,
    logout,
    getCurrentUser,
    // loginWithJwt,
    getJwt,
    checkLogin,
    setJwt
};

