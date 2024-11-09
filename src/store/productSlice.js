import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axios/customAxios";
import { notifyError, notifySuccess } from "../utils/Nontification.utils";
import { getAllBrands } from "./brandSlice";
;

const initialState = {
  products: [],
  reviews: [],
  totalReviews: 0,
  isLoading: false,
  error: null,
  selectedProduct: {},
  message: "",
  isSuccess: false,
};

//Get All Product
export const getAllProduct = createAsyncThunk("product/getAll", async () => {
  const response = await instanceAxios.get("/api/products");
  return response.data;
});

//Get Product by ID
export const getProductById = createAsyncThunk(
  "product/getById",
  async (product_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/products/${product_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Get Review by Product ID
export const getReviewByProductId = createAsyncThunk(
  "product/getReviewByProductId",
  async (product_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/products/${product_id}/reviews`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);




//Get Total Review by Product ID
export const getTotalReviewByProductId = createAsyncThunk(
  "product/getTotalReviewByProductId",
  async (product_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.get(`/api/reviews/product/${product_id}/count`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Add new Product
export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.post("/api/manager/products", productData);
      notifySuccess(response.data.message);
      return response.data;
      
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);


//Change Status Product by Admin
export const changeStatusProductByAdmin = createAsyncThunk(
  "product/changeStatusProductByAdmin",
  async ({ product_id, status }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(`/api/manager/products/${product_id}/status`, { status });
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Update Product by Admin
export const updateProductByAdmin = createAsyncThunk(
  "product/updateProductByAdmin",
  async ({ product_id, productData }, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.put(`/api/manager/products/${product_id}`, productData);

      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//Delete Product by ID
export const deleteProductById = createAsyncThunk(
  "product/deleteProductById",
  async (product_id, { rejectWithValue }) => {
    try {
      const response = await instanceAxios.delete(`/api/manager/products/${product_id}`);
      notifySuccess(response.data.message);
      return response.data;
    } catch (error) {
      notifyError(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProductState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.selectedProduct = {};
    },
  },
  extraReducers: (builder) => {
    //Get all product
    builder.addCase(getAllProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Get product by ID
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //Get review by product ID
    builder.addCase(getReviewByProductId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviewByProductId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload.reviews;
    });
    builder.addCase(getReviewByProductId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    

    //Get total review by product ID
    builder.addCase(getTotalReviewByProductId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTotalReviewByProductId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totalReviews = action.payload.total_reviews;
    });
    builder.addCase(getTotalReviewByProductId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });

    //Add new product
    builder.addCase(addNewProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.isSuccess = true;
      

     
    });
    builder.addCase(addNewProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Change status product by Admin
    builder.addCase(changeStatusProductByAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeStatusProductByAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.map((product) =>
        product.product_id === action.payload.product.product_id
          ? { ...product, ...action.payload.product } 
          : product
      );
    });
    builder.addCase(changeStatusProductByAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    
    //Update product by Admin
    builder.addCase(updateProductByAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProductByAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = state.products.map((product) =>
        product.product_id === action.payload.product_id
          ? { ...product, ...action.payload } 
          : product
      );
    });
    builder.addCase(updateProductByAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Delete product by ID
    builder.addCase(deleteProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      const deleteProductId = action.meta.arg;
      state.products = state.products.filter((product) => product.product_id !== deleteProductId);
    });
    builder.addCase(deleteProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { resetProductState } = productSlice.actions;
export default productSlice;
