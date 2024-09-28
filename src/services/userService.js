
// import { loginFaild, loginStart, loginSuccess, logoutFaild, logoutStart, logoutSuccess, registerFaild, registerStart, registerSuccess, } from "../store/authSlice";
// import { instanceAxios} from "../axios/customAxios";



// export const loginApi = async (user, dispatch, navigate) => {
//   dispatch(loginStart());
//   try {
//     const res = await instanceAxios.post("/api/login", user);
//     dispatch(loginSuccess(res.data));
//     navigate("/home");
//   } catch (err) {
//     dispatch(loginFaild());
//   }
// };

// export const registerAccount = async (user, dispatch, navigate) => {
//   dispatch(registerStart());
//   try {
//     await instanceAxios.post("/api/register", user);
//     dispatch(registerSuccess());
//     navigate("/login");
//   } catch (err) {
//     dispatch(registerFaild());
//   }
// };

// export const logOut = async (dispatch, id, navigate, accesToken) => {
//   dispatch(logoutStart());
//   try {
//     await instanceAxios.post("/api/logout", id);
//     dispatch(logoutSuccess());
//     navigate("/login");
//   } catch (err) {
//     dispatch(logoutFaild());
//   }
// };

// export default { loginApi, registerAccount, logOut };





