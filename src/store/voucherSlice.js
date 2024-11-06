import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";

const initialState = {
  vouchers: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//Get all Voucher
export const getAllVoucher = createAsyncThunk(
  "voucher/getAllVoucher",
  async () => {
    const response = await instanceAxios.get("/api/vouchers");
    return response.data;
  }
);

//Add Voucher by Admin
export const addVoucher = createAsyncThunk(
  "voucher/addVoucher",
  async (voucherData, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post(
        "/api/manager/vouchers",
        voucherData
      );
      notifySuccess("Add Voucher Successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Update Voucher by Admin
export const updateVoucherById = createAsyncThunk(
  "voucher/updateVoucherById",
  async ({ voucher_id, voucherData }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/manager/vouchers/${voucher_id}`,
        voucherData
      );
      notifySuccess("Update Voucher Successfully");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Delete Voucher by ID
export const deleteVoucherById = createAsyncThunk(
  "voucher/deleteVoucherById",
  async (voucher_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(
        `/api/manager/vouchers/${voucher_id}`
      );
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Change Voucher Status by Admin
export const changeVoucherStatus = createAsyncThunk(
  "voucher/changeVoucherStatus",
  async ({ voucher_id, status }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/manager/vouchers/${voucher_id}/status`,
        { status }
      );
      notifySuccess(response.data.message);
      return { voucher_id, status };
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const voucherSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: {
    resetVoucherState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    //getAllVoucher
    builder.addCase(getAllVoucher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllVoucher.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.vouchers = action.payload;
    });
    builder.addCase(getAllVoucher.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Add Voucher by Admin
    builder.addCase(addVoucher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addVoucher.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.vouchers.push(action.payload);
    });
    builder.addCase(addVoucher.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Update Voucher by Admin
    builder.addCase(updateVoucherById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateVoucherById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.vouchers = state.vouchers.map((voucher) =>
        voucher.voucher_id === action.payload.voucher_id
          ? { ...voucher, ... action.payload }
          : voucher
      );
    });
    builder.addCase(updateVoucherById.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Delete Voucher by ID
    builder.addCase(deleteVoucherById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteVoucherById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const deleteVoucherId = action.meta.arg;
      state.vouchers = state.vouchers.filter(
        (voucher) => voucher.voucher_id !== deleteVoucherId
      );
    });
    builder.addCase(deleteVoucherById.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Change Voucher Status by Admin
    builder.addCase(changeVoucherStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeVoucherStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
     
      state.vouchers = state.vouchers.map((voucher) =>
        voucher.voucher_id === action.payload.voucher_id
          ? { ...voucher, status: action.payload.status }
          : voucher
      );
    });
    builder.addCase(changeVoucherStatus.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { resetVoucherState } = voucherSlice.actions;
export default voucherSlice;
