"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.defaults.withCredentials = true;
var baseURL = import.meta.env.VITE_BASEURL;
var apiClient = axios_1.default.create({
    withCredentials: true,
    baseURL: baseURL,
    timeout: 1000,
});
apiClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return new Promise(function (resolve) {
        var originalRequest = error.config;
        var token = localStorage.getItem("token");
        if (error.response && error.response.status === 401 && token) {
            var tokenParts = JSON.parse(atob(token.split(".")[1]));
            var now = Math.ceil(Date.now() / 1000);
            originalRequest._retry = true;
            if (tokenParts.exp < now) {
                // console.log("token expirado, atualizando token");
                var response = fetch(baseURL + "/auth/refresh", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(function (res) { return res.json(); })
                    .then(function (res) {
                    // console.log(res, 'response')
                    return apiClient(originalRequest);
                })
                    .catch(function (e) {
                    return Promise.reject(e);
                });
                resolve(response);
            }
            else {
                // console.log("token não expirado");
            }
        }
        if (error.response) {
            throw error.response.data;
        }
        return Promise.reject(error);
    });
});
exports.default = apiClient;
