import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";

const initialState = {
  blogs: [],
  blogsUser: [],
  hashtags: [],
  comments: [],
  isLoading: false,
  error: null,
  selectedBlog: {},
  isSuccess: false,
  message: "",
  user: {},
  status_counts: {
    draft: 0,
    published: 0,
  },
};

// Get All  Blog
export const getAllBlog = createAsyncThunk("getAllBlog", async () => {
  const token = localStorage.getItem("token");
  const response = await instanceAxios.get("/api/blogs/published",{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
});

//Get All Blog for adminpage
export const getAllBlogAdmin = createAsyncThunk("getAllBlogAdmin", async () => {
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
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Delete Blog by User
export const deleteBlogByUser = createAsyncThunk(
  "deleteBlogByUser",
  async (blog_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(`/api/blogs/delete/${blog_id}`);
      notifySuccess("Delete blog successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Delete Blog by Admin
export const deleteBlogByAdmin = createAsyncThunk(
  "deleteBlogByAdmin",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(`/api/manager/blogs/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Change Status Blog by Admin
export const changeStatusBlogByAdmin = createAsyncThunk(
  "changeStatusBlogByAdmin",
  async ({ blog_id, status }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/manager/blogs/changestatus/${blog_id}`,
        { status }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//GetUserBlog
export const GetUserBlog = createAsyncThunk(
  "GetUserBlog",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get("/api/my-blogs");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Get Commnet by Blog ID
export const getCommentByBlogId = createAsyncThunk(
  "blog/getCommentByBlogId",
  async (blog_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(
        `/api/blogs/${blog_id}/comments`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Create Comment by Blog ID
export const addComment = createAsyncThunk(
  "blog/addComment",
  async ({ blog_id, commentData, parent_id }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(
        `/api/blogs/${blog_id}/comments`,
        {
          ...commentData,
          parent_id,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Update Commnet by User
export const updateCommentByUser = createAsyncThunk(
  "blog/updateCommentByUser",
  async ({ blog_id, comment_id, commentData }, { rejectWithValue }) => {
    try {
      // const response = await instanceAxios.post(`/api/blogs/${blog_id}/comments`, {
      //   ...commentData,
      //   parent_id,
      // });
      console.log("Adding comment with parent_id:", parent_id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Delete Comment by User
export const deleteCommentByUser = createAsyncThunk(
  "blog/deleteCommentByUser",
  async ({ blog_id, comment_id }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(
        `/api/blogs/${blog_id}/comments/${comment_id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Like for blog
export const likeByBlogId = createAsyncThunk(
  "blog/likeByBlogId",
  async (blog_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(`/api/blogs/like/${blog_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Unlike for blog
export const unlikeByBlogId = createAsyncThunk(
  "blog/unlikeByBlogId",
  async (blog_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(`/api/blogs/like/${blog_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Update Blog By User
export const updateBlogByUser = createAsyncThunk(
  "blog/updateBlogByUser",
  async ({ blog_id, blogData }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/blogs/${blog_id}`,
        blogData
      );
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
    resetBlogState(state) {
      state.isLoading = false;
      state.error = null;
      state.message = "";
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    //Get information blog---------------------------------------------
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

    //Get all blog for admin---------------------------------------------
    builder.addCase(getAllBlogAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBlogAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload.blogs;
      state.status_counts = action.payload.status_counts; 
    });
    builder.addCase(getAllBlogAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Get blog by ID---------------------------------------------
    builder.addCase(getBlogById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedBlog = action.payload;
    });
    builder.addCase(getBlogById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Get all hashtags---------------------------------------------
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

    //Create blog---------------------------------------------
    builder.addCase(createBlog.pending, (state) => {
      state.isLoading = true;
      state.message = "";
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

    //Delete blog by User---------------------------------------------
    builder.addCase(deleteBlogByUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBlogByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const deletedBlogId = action.meta.arg;
      state.blogs = state.blogs.filter((blog) => blog.blog_id !== deletedBlogId);
      state.blogsUser = state.blogsUser.filter((blog) => blog.blog_id !== deletedBlogId);
    });
    builder.addCase(deleteBlogByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Delete blog by Admin---------------------------------------------
    builder.addCase(deleteBlogByAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBlogByAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const deleteBlogId = action.meta.arg;
      state.blogs = state.blogs.filter((blog) => blog.blog_id !== deleteBlogId);
    });
    builder.addCase(deleteBlogByAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Change Status Blog by Admin---------------------------------------------
    builder.addCase(changeStatusBlogByAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeStatusBlogByAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

      
      state.blogs = state.blogs.map((blog) =>
        blog.blog_id === action.payload.blog_id
          ? { ...blog, status: action.payload.status } 
          : blog
      );
    });
    builder.addCase(changeStatusBlogByAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Get blog  user---------------------------------------------
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

    //Get comment by blog ID---------------------------------------------
    builder.addCase(getCommentByBlogId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCommentByBlogId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(getCommentByBlogId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Create Comment by Blog ID---------------------------------------------
    builder.addCase(addComment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.parent_id) {
        const parentComment = state.comments.find(
          (comment) => comment.comment_id === action.payload.parent_id
        );
        if (parentComment) {
          parentComment.replies = parentComment.replies || [];
          parentComment.replies.push(action.payload);
        }
      } else {
        state.comments.push(action.payload);
      }
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Update Comment by User---------------------------------------------
    builder.addCase(updateCommentByUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateCommentByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const updatedComment = action.payload;
      state.comments = state.comments.map((comment) =>
        comment.comment_id === updatedComment.comment_id
          ? updatedComment
          : comment
      );
    });
    builder.addCase(updateCommentByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action;
      state.message = action.payload.message;
    });

    const removeCommentById = (comments, commentId) => {
      return comments
        .filter((comment) => comment.comment_id !== commentId)
        .map((comment) => ({
          ...comment,
          replies: comment.replies
            ? removeCommentById(comment.replies, commentId)
            : [],
        }));
    };

    //Delete Comment By User---------------------------------------------
    builder.addCase(deleteCommentByUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCommentByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.comments = removeCommentById(
        state.comments,
        action.meta.arg.comment_id
      );
    });
    builder.addCase(deleteCommentByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.message = action.payload.message;
    });

    //Like for blog---------------------------------------------
    builder.addCase(likeByBlogId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(likeByBlogId.fulfilled, (state, action) => {
      state.isLoading = false;
      if (
        state.selectedBlog &&
        state.selectedBlog.blog_id === action.payload.blog_id
      ) {
        state.selectedBlog.like = action.payload.like;
      }
    });
    builder.addCase(likeByBlogId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Unlike for blog---------------------------------------------
    builder.addCase(unlikeByBlogId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(unlikeByBlogId.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.selectedBlog && state.selectedBlog.blog_id === action.payload.blog_id) {
        state.selectedBlog.like = action.payload.like;
      }
    });
    builder.addCase(unlikeByBlogId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    

    //Update Blog By User---------------------------------------------
    builder.addCase(updateBlogByUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBlogByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = "Blog updated successfully";
      state.selectedBlog = action.payload;
    });
    builder.addCase(updateBlogByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.error = action.payload;
    });
  },
});

export const { resetBlogState } = blogSlice.actions;
export default blogSlice;
