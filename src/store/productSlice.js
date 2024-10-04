import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  selectedProduct: "",
};

//Get All Product
export const getAllProduct = createAsyncThunk("product/getAll", async () => {
  const response = await instanceAxios.get("/api/products");
  return response.data;
});

//Get Product by ID
export const getProductById = createAsyncThunk(
  "product/getById",
  async (product_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/products/${product_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get all product
    builder.addCase(getAllProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Get product by ID
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default productSlice;
