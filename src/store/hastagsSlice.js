import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";

const initialState = {
  hastags: [],
  isLoading: false,
  isSuccess: false,
  message: "",
};

//getAllHastags
export const getAllHastags = createAsyncThunk(
  "hastags/getAllHastags",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/hashtags`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//addHastag
export const addHastag = createAsyncThunk(
  "hastags/addHastag",
  async (hastagData, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(`/api/hashtags`, hastagData);
      notifySuccess("Add hastag successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//updateHastag
export const updateHastag = createAsyncThunk(
  "hastags/updateHastag",
  async ({ hastag_id, hastagData }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/manager/hashtags/${hastag_id}`,
        hastagData
      );
      notifySuccess("Update hastag successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Delete Hastag by Id
export const deleteHastagById = createAsyncThunk(
  "hastags/deleteHastagById",
  async (hastag_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(
        `/api/manager/hashtags/${hastag_id}`
      );
      notifySuccess("Delete hastag successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//searchHastags
export const searchHastags = createAsyncThunk(
  "hastags/searchHastags",
  async (query, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/hashtags/search?`, {
        params: { query },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const hashtagsSlice = createSlice({
  name: "hastag",
  initialState,
  reducers: {
    resetHashtagsState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //getAllHastags
    builder.addCase(getAllHastags.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllHastags.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.hastags = action.payload;
    });
    builder.addCase(getAllHastags.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });

    //addHastag
    builder.addCase(addHastag.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addHastag.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.hastags.push(action.payload);
    });
    builder.addCase(addHastag.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });

    //updateHastag
    builder.addCase(updateHastag.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateHastag.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.hastags = state.hastags.map((hastag) =>
        hastag.id === action.payload.id
          ? { ...hastag, ...action.payload }
          : hastag
      );
    });
    builder.addCase(updateHastag.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });

    //Delete Hastag by Id
    builder.addCase(deleteHastagById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteHastagById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const deteledHastagId = action.meta.arg;
      state.hastags = state.hastags.filter(
        (hastag) => hastag.id !== deteledHastagId
      );
    });
    builder.addCase(deleteHastagById.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    });

    //searchHastags
    builder.addCase(searchHastags.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchHastags.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.hastags = action.payload;
    });
    builder.addCase(searchHastags.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export const { resetHashtagsState } = hashtagsSlice.actions;
export default hashtagsSlice;
