import http from "./httpservice";

export function getMembers() {
    return http.get(`/api/members`);
}

export function createMember(data) {
    return http.post(`/api/members`, data);
}