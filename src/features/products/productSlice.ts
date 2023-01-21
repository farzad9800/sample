import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { ProductType } from "./product.type";
import { getAllProducts } from "./productAPI";

interface ProductState {
  products: ProductType[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProductState = {
  products: [],
  status: "idle",
};

export const getProductAsync = createAsyncThunk<ProductType[]>(
  "products/getProducts",
  async () => {
    const products = await getAllProducts();
    return products;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state: ProductState) => {
        state.status = "loading";
      })
      .addCase(getProductAsync.fulfilled, (state: ProductState, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getProductAsync.rejected, (state: ProductState) => {
        state.status = "failed";
      });
  },
});

export const selectProducts = (state: RootState) => state.product;

export default productSlice.reducer;
