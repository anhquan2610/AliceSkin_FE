import axios from "axios";
import { jwtDecode } from "jwt-decode";

//Custom axios instance
export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});




//interceptor for request (Trước khi gửi request và sau khi nhận phản hồi sẽ lgi)
