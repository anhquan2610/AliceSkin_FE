import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";

const initialState = {
  brands: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  selectedBrand: {
    products: [],
  },
};

//Get all brands
export const getAllBrands = createAsyncThunk("brand/getAllBrands", async () => {
  const response = await instanceAxios.get("/api/brands");
  return response.data;
});

//Add brand by Admin
export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (brandData, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/manager/brands", brandData);
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Show brand by ID
export const showBrandById = createAsyncThunk(
  "brand/showBrandById",
  async (brand_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/brands/${brand_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Get brand by ID
export const getBrandById = createAsyncThunk(
    "brand/getBrandById",
    async (brand_id, { rejectWithValue }) => {
        try {
            const response = await instanceAxios.get(`/api/manager/brands/${brand_id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

//Update brand by Admin
export const updateBrandById = createAsyncThunk(
  "brand/updateBrandById",
  async ({ brand_id, brandData }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(
        `/api/manager/brands/${brand_id}`,
        brandData
      );
      notifySuccess("Brand updated successfully!");
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Delete brand by Admin
export const deleteBrandById = createAsyncThunk(
  "brand/deleteBrandById",
  async (brand_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(
        `/api/manager/brands/${brand_id}`
      );
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetBrandState: (state) => {
      state.isLoading = false;
      state.message = "";
      state.isSuccess = false;
      state.selectedBrand = {};
    },
  },
  extraReducers: (builder) => {
    // Get all brands
    builder.addCase(getAllBrands.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBrands.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brands = action.payload;
    });
    builder.addCase(getAllBrands.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });

    // Show brand by ID
    builder.addCase(showBrandById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(showBrandById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedBrand = action.payload;
      state.selectedBrand.products = action.payload.products;
    });
    builder.addCase(showBrandById.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });

    // Add brand by Admin
    builder.addCase(addBrand.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBrand.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brands.push(action.payload);
      state.isSuccess = true;
    });
    builder.addCase(addBrand.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Get brand by ID
    builder.addCase(getBrandById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBrandById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedBrand = action.payload;
        }
    );
    builder.addCase(getBrandById.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error.message;
    }
    );

    //Update brand by Admin
    builder.addCase(updateBrandById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBrandById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.brands = state.brands.map((brand) =>
        brand.brand_id === action.payload.brand_id
          ? { ...brand, ...action.payload }
          : brand
      );
    });
    builder.addCase(updateBrandById.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Delete brand by Admin
    builder.addCase(deleteBrandById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBrandById.fulfilled, (state, action) => {
      state.isLoading = false;
      const deleteBrandId = action.meta.arg;
      state.brands = state.brands.filter(
        (brand) => brand.brand_id !== deleteBrandId
      );
    });
    builder.addCase(deleteBrandById.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { resetBrandState } = brandSlice.actions;
export default brandSlice;
