import axios from "axios";
axios.defaults.withCredentials = true;
const baseURL = import.meta.env.VITE_BASEURL;

const apiClient = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  timeout: 1000,
});
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve) => {
      const originalRequest = error.config;
      const token = localStorage.getItem("token");
      if (error.response && error.response.status === 401 && token) {
        const tokenParts = JSON.parse(atob(token.split(".")[1]));
        const now = Math.ceil(Date.now() / 1000);
        originalRequest._retry = true;
        if (tokenParts.exp < now) {
          // console.log("token expirado, atualizando token");
          const response = fetch(baseURL + "/auth/refresh", {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              // console.log(res, 'response')
              return apiClient(originalRequest);
            })
            .catch((e) => {
              return Promise.reject(e);
            });
          resolve(response);
        } else {
          // console.log("token não expirado");
        }
      }

      if (error.response) {
        throw error.response.data;
      }

      return Promise.reject(error);
    });
  },
);

export default apiClient;
