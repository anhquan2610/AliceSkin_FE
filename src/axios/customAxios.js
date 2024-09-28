import axios from "axios";

const BASE_URL= "http://127.0.0.1:8000";

//Custom axios instance
export const instanceAxios = axios.create({
  baseURL: BASE_URL,
});



//interceptor for request (Trước khi gửi request và sau khi nhận phản hồi sẽ lgi)
instanceAxios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// instanceAxios.interceptors.response.use(function (response) {
//   console.log("response", response);
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });

