//Thực hiện việc login, logout, register, update thông tin user

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null, //Login thành công -> trả ra thông tin của tk user
      isFetching: false, //Loading
      error: false,
    },
    register:{
      isFetching: false,
      error: false,
      success: false,
    },
    logout:{
      isFetching: false,
      error: false,
    }
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
     
    },
    loginFaild: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    //Register...................
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
     
    },
    registerFaild: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },

  //Logout...................
  logoutSuccess: (state, action) => {
    state.logout.isFetching = false;
    state.logout.currentUser = null;
    state.logout.error = false;
   
  },
  logoutFaild: (state) => {
    state.logout.isFetching = false;
    state.logout.error = true;
  },
  logoutStart: (state) => {
    state.logout.isFetching = true;

  },
}
});

export const { 
    loginStart, 
    loginSuccess, 
    loginFaild,
    registerStart,
    registerSuccess,
    registerFaild ,
    logoutStart,
    logoutSuccess,
    logoutFaild
} = authSlice.actions;

export default authSlice.reducer;