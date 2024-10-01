import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
    
        products: [],
        isLoading: false,
        error: null,
    
}

export const getAllProduct = createAsyncThunk('product/getAll', async () => {
    const response = await instanceAxios.get('/api/products');
    return response.data; 
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null; 
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload; 
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error; 
            });
    }
});

export default productSlice;
