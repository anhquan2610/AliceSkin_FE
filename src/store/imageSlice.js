import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
    imageUrl: "",
    isLoading: false,
    isSuccess: false
}

export const uploadImage = createAsyncThunk(
    "uploadImage",
    async (file, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append("image", file);

            const response = await instanceAxios.post("/api/upload", formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data.url;
    }catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        resetImageState: (state) => {
            state.imageUrl = "";
            state.isLoading = false;
            state.isSuccess = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImage.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(uploadImage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.imageUrl = action.payload;
        });
        builder.addCase(uploadImage.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export const { resetImageState } = imageSlice.actions;
export default imageSlice;