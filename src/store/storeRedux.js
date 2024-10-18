// Code to create a store using Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import blogSlice from "./blogSlice";
import productSlice from "./productSlice";
import shippingSlice from "./shippingSlice";
import imageSlice from "./imageSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({

  reducer:{
    [authSlice.name]: authSlice.reducer,
    [blogSlice.name]: blogSlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [shippingSlice.name]: shippingSlice.reducer,
    [imageSlice.name]: imageSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  }
});