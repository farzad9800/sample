import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { ProductType } from "./product.type";
import { getAllProducts } from "./productAPI";

interface ProductState {
  products: ProductType[];
  searchProducts: ProductType[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProductState = {
  products: [],
  searchProducts: [],
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
  reducers: {
    searchProduct: (state: ProductState, action: PayloadAction<string>) => {
      state.searchProducts = state.products.filter((item: ProductType) =>
        item.fields.name.includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state: ProductState) => {
        state.status = "loading";
      })
      .addCase(
        getProductAsync.fulfilled,
        (state: ProductState, action: PayloadAction<ProductType[]>) => {
          state.status = "idle";
          state.products = action.payload;
          state.searchProducts = action.payload;
        }
      )
      .addCase(getProductAsync.rejected, (state: ProductState) => {
        state.status = "failed";
      });
  },
});

export const { searchProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export default productSlice.reducer;
