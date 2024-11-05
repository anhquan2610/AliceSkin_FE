import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";

const initialState = {
  shippings: [],
  isLoading: false,
  error: null,
  message: "",
  isSuccess: false,
};

//Get All Shipping
export const getAllShipping = createAsyncThunk("shipping/getAll", async () => {
  const response = await instanceAxios.get("/api/shippings");
  return response.data;
});

//Show All Shipping Manage
export const showAllShippingManage = createAsyncThunk(
  "shipping/showAll",
  async () => {
    const response = await instanceAxios.get("/api/admin/shippings");
    return response.data;
  }
);

//Add Shipping by Admin
export const addShipping = createAsyncThunk(
  "shipping/add",
  async (shippingData, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(
        "/api/admin/shippings",
        shippingData
      );

      notifySuccess("Add Shipping Successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Update Shipping by Id
export const updateShippingById = createAsyncThunk(
  "shipping/updateById",
  async ({ shipping_id, shippingData }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/admin/shippings/${shipping_id}`,
        shippingData
      );

      notifySuccess("Update Shipping Successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Delte Shipping by Id
export const deleteShippingById = createAsyncThunk(
  "shipping/deleteById",
  async (shipping_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(
        `/api/admin/shippings/${shipping_id}`
      );

      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    resetShippingState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.message = "";
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    //Get all shipping
    builder.addCase(getAllShipping.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllShipping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shippings = action.payload;
    });
    builder.addCase(getAllShipping.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Show all shipping manage
    builder.addCase(showAllShippingManage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(showAllShippingManage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shippings = action.payload;
    });
    builder.addCase(showAllShippingManage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Add shipping by Admin
    builder.addCase(addShipping.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addShipping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shippings.push(action.payload);
      state.isSuccess = true;
    });
    builder.addCase(addShipping.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });

    //Update shipping by ID
    builder.addCase(updateShippingById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateShippingById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.shippings = state.shippings.map((shipping) =>
        shipping.id === action.payload.id
          ? { ...shipping, ...action.payload }
          : shipping
      );
    });
    builder.addCase(updateShippingById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });

    //Delete shipping by ID
    builder.addCase(deleteShippingById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteShippingById.fulfilled, (state, action) => {
      state.isLoading = false;
      const deletedShippingId = action.meta.arg;
      state.shippings = state.shippings.filter(
        (shipping) => shipping.id !== deletedShippingId
      );
    });
    builder.addCase(deleteShippingById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export const { resetShippingState } = shippingSlice.actions;
export default shippingSlice;
