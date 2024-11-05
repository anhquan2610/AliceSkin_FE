import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifySuccess } from "../utils/Nontification.utils";

export const initialState = {
  users: [],
  isLoading: false,
  isError: null,
  message: "",
};
//List All Users
export const ListAllUsers = createAsyncThunk(
  "user/ListAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get("/api/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Delete User
export const DeleteUser = createAsyncThunk(
  "user/DeleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(`/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      // Ghi rõ lỗi trả về nếu có từ API
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

//Change Role User
export const ChangeRoleUser = createAsyncThunk(
  "user/ChangeRoleUser",
  async ({ userId, role }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/admin/user/${userId}/role`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      notifySuccess(response.data.message);
      return { userId, role }; 
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //List All Users
    builder.addCase(ListAllUsers.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(ListAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(ListAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    //Delete User
    builder.addCase(DeleteUser.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(DeleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const deletedUserId = action.meta.arg;
      state.users = state.users.filter((user) => user.id !== deletedUserId);
    });
    builder.addCase(DeleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    //Change Role User
    builder.addCase(ChangeRoleUser.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(ChangeRoleUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = state.users.map((user) =>
        user.id === action.payload.userId
          ? { ...user, role: action.payload.role } 
          : user
      );
    });
    builder.addCase(ChangeRoleUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default userSlice;
