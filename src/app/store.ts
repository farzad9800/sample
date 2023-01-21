import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import shoppingcartReducer from '../features/shoppingCart/shoppingCartSlice';


export const store = configureStore({
  reducer: {
    product: productReducer,
    shoppingcart: shoppingcartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
