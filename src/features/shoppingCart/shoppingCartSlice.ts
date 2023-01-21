import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { ShoppingCartType, ShoppingCartItemType } from "./shoppingCart.type";

interface ShoppingCartState {
  items: ShoppingCartItemType[];
}

const initialState: ShoppingCartState = {
  items: [],
};

export const shoppingcartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    addToShoppingCart: (state: ShoppingCartState, action: PayloadAction<ShoppingCartItemType>) => {
      state.items.push(action.payload);
    },

    updateShoppingCart: (state: ShoppingCartState, action: PayloadAction<ShoppingCartItemType>) => {
      state.items = state.items.map((item: ShoppingCartItemType) =>
        item.product.id === action.payload.product.id
          ? (item = action.payload)
          : item
      );
    },
    getShoppingCartItems: (state: ShoppingCartState, action) => {
        state.items = action.payload;
      },
      deleteShoppingCartItems: (state: ShoppingCartState, action) => {
        state.items= state.items.filter((item:ShoppingCartItemType) => item.product.id !== action.payload)
      },


  },
});

export const { addToShoppingCart, updateShoppingCart, getShoppingCartItems, deleteShoppingCartItems } = shoppingcartSlice.actions;

export const selectShoppingCart = (state: RootState) => state.shoppingcart;

export default shoppingcartSlice.reducer;
