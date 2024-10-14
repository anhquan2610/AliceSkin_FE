import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";

const initialState = {
  blogs: [],
  blogsUser: [],
  hashtags: [],
  isLoading: false,
  error: null,
  selectedBlog: "",
  isSuccess: false,
  message: "",
};

// Get All  Blog
export const getAllBlog = createAsyncThunk("getAllBlog", async () => {
  const response = await instanceAxios.get("/api/blogs/published");
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

  // Get All Hashtags
  export const getAllHashtags = createAsyncThunk("getAllHashtags", async () => {
    const response = await instanceAxios.get("/api/hashtags");
    return response.data;
  });

  //Create Blog
  export const createBlog = createAsyncThunk(
    "createBlog",
    async (blogData, { rejectWithValue }) => {
      try {
        const response = await instanceAxios.post("/api/blogs", blogData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

  //GetUserBlog
  export const GetUserBlog = createAsyncThunk(
    "GetUserBlog", 
    async (_, {rejectWithValue}) => {
      try {
        const response = await instanceAxios.get("/api/my-blogs");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );



const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    resetBlogState (state) {
      state.isLoading = false;
      state.error = null;
      state.message = "";
      state.isSuccess = false;
    }
  },
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

    //Get all hashtags
    builder.addCase(getAllHashtags.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllHashtags.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getAllHashtags.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Create blog
    builder.addCase(createBlog.pending, (state) => {
      state.isLoading = true;
      
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.blogs.push(action.payload);
      state.message = "Create blog successfully";
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.payload;
      state.error = action.payload.message;
    });

    //Get user blog
    builder.addCase(GetUserBlog.pending, (state) => {
      state.isLoading = true;
    }); 
    builder.addCase(GetUserBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogsUser = action.payload;
    });
    builder.addCase(GetUserBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.message = action.payload.message; 
    });
  },
});


export const { resetBlogState } = blogSlice.actions;
export default blogSlice;
