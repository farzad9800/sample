import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { ShoppingCartType, ShoppingCartItemType } from "./shoppingCart.type";

interface ShoppingCartState {
  items: ShoppingCartItemType[];
  searchProductsCart: ShoppingCartItemType[];
}

const initialState: ShoppingCartState = {
  items: [],
  searchProductsCart: [],
};

export const shoppingcartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    addToShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<ShoppingCartItemType>
    ) => {
      state.items.push(action.payload);
      state.searchProductsCart.push(action.payload);
    },

    updateShoppingCart: (
      state: ShoppingCartState,
      action: PayloadAction<ShoppingCartItemType>
    ) => {
      state.items = state.items.map((item: ShoppingCartItemType) =>
        item.product.id === action.payload.product.id
          ? (item = action.payload)
          : item
      );
      state.searchProductsCart = state.searchProductsCart.map((item: ShoppingCartItemType) =>
      item.product.id === action.payload.product.id
        ? (item = action.payload)
        : item
    );
    },
    deleteShoppingCartItems: (state: ShoppingCartState, action) => {
      state.items = state.items.filter(
        (item: ShoppingCartItemType) => item.product.id !== action.payload
      );
      state.searchProductsCart = state.searchProductsCart.filter(
        (item: ShoppingCartItemType) => item.product.id !== action.payload
      );
    },
    searchProductCart: (state: ShoppingCartState, action: PayloadAction<string>) => {
      state.searchProductsCart = state.items.filter((item: ShoppingCartItemType) =>
        item.product.fields.name.includes(action.payload)
      );
    },
  },
});

export const {
  addToShoppingCart,
  updateShoppingCart,
  deleteShoppingCartItems,
  searchProductCart,
} = shoppingcartSlice.actions;

export const selectShoppingCart = (state: RootState) => state.shoppingcart;

export default shoppingcartSlice.reducer;
