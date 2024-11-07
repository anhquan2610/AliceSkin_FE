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

//Get All Orders
export const fetchAllOrders = createAsyncThunk(
  "order/fetchAllOrders",
  async () => {
    const response = await instanceAxios.get("/api/orders");
    return response.data;
  }
);
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

//Get Order By UserId
export const fetchOrderByUserId = createAsyncThunk(
  "order/fetchOrderByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/orders/user/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Get Order By OrderId
export const fetchOrderByOrderId = createAsyncThunk(
  "order/fetchOrderByOrderId",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/order/${orderId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Confirm Delivery
export const confirmDelivery = createAsyncThunk(
  "order/confirmDelivery",
  async (orderID, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(
        `/api/manager/orders/confirm-delivery/${orderID}`
      );
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Change Order Status
export const changeOrderStatus = createAsyncThunk(
  "order/changeOrderStatus",
  async ({ order_id, status }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/manager/update-status/${order_id}`,
        {
          status,
        }
      );
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Submit Review
export const submitReview = createAsyncThunk(
  "order/submitReview",
  async ({ orderId, review }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(
        `/api/reviews/${orderId}`,
        review
      );
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
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
    //Get All Orders
    builder.addCase(fetchAllOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = action.payload;
    });
    builder.addCase(fetchAllOrders.rejected, (state, action) => {
      state.isLoading = false;
    });

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

    //Get Order By UserId
    builder.addCase(fetchOrderByUserId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrderByUserId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = action.payload;
    });
    builder.addCase(fetchOrderByUserId.rejected, (state, action) => {
      state.isLoading = false;
    });

    //Get Order By OrderId
    builder.addCase(fetchOrderByOrderId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrderByOrderId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = action.payload;
    });
    builder.addCase(fetchOrderByOrderId.rejected, (state, action) => {
      state.isLoading = false;
    });

    //Change Order Status
    builder.addCase(changeOrderStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeOrderStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = state.orders.map((order) =>
        order.order_id === action.payload.order_id
          ? { ...order, status: action.payload.status }
          : order
      );
    });
    builder.addCase(changeOrderStatus.rejected, (state, action) => {
      state.isLoading = false;
    });

    //Confirm Delivery
    builder.addCase(confirmDelivery.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(confirmDelivery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = state.orders.map((order) =>
        order.order_id === action.payload.order_id
          ? { ...order, payment_status: action.payload.payment_status }
          : order
      );
    });
    builder.addCase(confirmDelivery.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });

    //Submit Review
    builder.addCase(submitReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(submitReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(submitReview.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });
  },
});

export const { resetOderState } = orderSlice.actions;
export default orderSlice;
