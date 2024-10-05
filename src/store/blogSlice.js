import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
  blogs: [],
  isLoading: false,
  error: null,
  selectedBlog: '',
};

// Get Information Blog
export const getAllBlog = createAsyncThunk("getAllBlog", async () => {
  const response = await instanceAxios.get("/api/blogs");
  return response.data;
});

// Get Blog by ID
export const getBlogById = createAsyncThunk(
    "getBlogById",
    async (blog_id, { rejectWithValue }) => {
      try {
        const response = await instanceAxios.get(`/api/blogs/${blog_id}`);
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.response.data); 
      }
    }
  );



const blogSlice = createSlice({
  name: "blog",
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

    //Get blog by ID
    builder.addCase(getBlogById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedBlog = action.payload; //save information blog
    });
    builder.addCase(getBlogById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default blogSlice;
