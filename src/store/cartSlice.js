import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";

const initialState = {
  cart: {
    items: [],
  },
  isLoading: false,
  error: null,
};

//List all items in cart
export const getCartItems = createAsyncThunk("getCartItems", async () => {
  const response = await instanceAxios.get("/api/cart");
  return response.data;
});

//Add Item To Cart
export const addItemToCart = createAsyncThunk(
  "addItemToCart",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/cart", {
        product_id: productId,
        quantity,
      });
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Update Item in Cart
export const updateItemInCart = createAsyncThunk(
  "updateItemInCart",
  async ({ item_id, data }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(`/api/cart/${item_id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Remove Item From Cart
export const removeItemFromCart = createAsyncThunk(
  "removeItemFromCart",
  async (item_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(`/api/cart/${item_id}`);
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Change status cart
export const completeCart = createAsyncThunk(
  "completeCart",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/cart/complete"); // Cập nhật đường dẫn API của bạn
      notifySuccess(response.data.message);
      return response.data; // Trả về thông tin giỏ hàng đã được cập nhật
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
  }
);



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //List all items in cart-------------------------------------
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
  
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    //Add Item To Cart-------------------------------------------
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.cart = action.payload;
   
    });
    //Update Item in Cart----------------------------------------
    builder.addCase(updateItemInCart.fulfilled, (state, action) => {
      if (!state.cart.items) return;
      const index = state.cart.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.items[index] = action.payload;
  
      }
    });
    //Remove Item From Cart--------------------------------------
    builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
      if (!state.cart.items) return;
      state.cart.items = state.cart.items.filter((item) => item.id !== action.meta.arg.item.id);

    });

    //Change status cart-----------------------------------------
    builder.addCase(completeCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});



export default cartSlice;
