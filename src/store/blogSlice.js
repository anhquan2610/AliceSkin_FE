import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
    blogs: [],
    isLoading: false,
    error: null,
}

//Information Blog
export const getAllBlog = createAsyncThunk('getAllBlog', async () => {
    const response = await instanceAxios.get('/api/blogs');
    return response.data;
});

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Get information blog
        builder.addCase(getAllBlog.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload;
        });
        builder.addCase(getAllBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export default blogSlice;