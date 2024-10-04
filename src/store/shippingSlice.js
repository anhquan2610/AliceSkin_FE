import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
  shippings: [],
  isLoading: false,
  error: null,
}

//Get All Shipping
export const getAllShipping = createAsyncThunk("shipping/getAll", async () => {
  const response = await instanceAxios.get("/api/admin/shippings");
  return response.data;
});

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get all shipping
    builder.addCase(getAllShipping.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllShipping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shippings = action.payload;
    });
    builder.addCase(getAllShipping.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export default shippingSlice;