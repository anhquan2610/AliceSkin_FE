import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
  orders: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  paymentUrl: null,
};

//Create Order
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/orders", orderData);
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Create Payment
export const createPayment = createAsyncThunk(
  "order/createPayment",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(
        `/api/payment/vnpay/create/${orderId}`
      );
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Payment Status
export const fetchPaymentStatus = createAsyncThunk(
  "order/fetchPaymentStatus",
  async (params, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get("/api/payment/vnpay/return", {
        params,
      });

      return response.data;
    } catch (error) {
      notifyError("Payment failed. Please try again!");
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOderState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //Create Order
    builder.addCase(createOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders.push(action.payload);
      state.id = action.payload.id;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });

    //Create Payment
    builder.addCase(createPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.paymentUrl = action.payload.payment_url;
    });
    builder.addCase(createPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });

    //Payment Status
    builder.addCase(fetchPaymentStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPaymentStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.paymentStatus = action.payload;
    });
    builder.addCase(fetchPaymentStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action;
    });
  },
});

export const { resetOderState } = orderSlice.actions;
export default orderSlice;
