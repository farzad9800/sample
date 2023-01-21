import { ProductType } from "../products/product.type";

export type ShoppingCartItemType = {
  product: ProductType;
  amout: number;
  totalPrice: number;
};

export type ShoppingCartType = ShoppingCartItemType[];
