//Thực hiện việc login, logout, register, update thông tin user

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
  user: "",
  token: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
  isSuccess: false,
  message: "",
};
//Sign Up User
export const signUp = createAsyncThunk(
  "signUpUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/register", user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Sign In User
export const signIn = createAsyncThunk(
  "signInUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/login", credentials);
      localStorage.setItem("token", response.data?.access_token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Forgot Password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/password/forgot", {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Reset Password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    { email, password, password_confirmation, token },
    { rejectWithValue }
  ) => {
    try {
      const response = await instanceAxios.post("/api/password/reset", {
        email,
        password,
        password_confirmation,
        token,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Get User by Id
export const getUserById = createAsyncThunk(
  "auth/getUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//fetch user by token
export const fetchUserByToken = createAsyncThunk(
  'user/fetchById',
  async () => {
    const token = localStorage.getItem('token');
    const response = await instanceAxios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

//Change Password
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (passwordData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await instanceAxios.post('/api/change-password', passwordData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data || 'An error occurred while changing the password');
    }
  }
);

//Update User
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await instanceAxios.put(`/api/user/update/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    resetAuthState: (state) => { 
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.isError = false;
    } 
  },
  extraReducers: (builder) => {
    //Register
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.isSuccess = false;
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    //Login
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.user;
      state.token = action.payload.access_token;
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
      state.message = action.payload.message;
    });

    //Forgot Password
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    //Reset Password
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.isSuccess = false;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    //Get User by Id
    builder.addCase(getUserById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
    });

    builder.addCase(getUserById.rejected, (state, action) => {
      state.isLoading = false;
    });
    
    //fetch user by token
    builder.addCase(fetchUserByToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserByToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUserByToken.rejected, (state) => {
      state.isLoading = false;
    });

    //Change Password
    builder.addCase(changePassword.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.errorMessage = action.payload;
      state.message = action.payload.message;
    });

    //Update User
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = { ...state.user, ...action.payload };
      state.message = action.payload.message;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});


export const { logout, resetAuthState } = authSlice.actions;

export default authSlice;
