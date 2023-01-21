import { ProductType } from "../products/product.type";

export type ShoppingCartItemType = {
  product: ProductType;
  amout: number;
};

export type ShoppingCartType = ShoppingCartItemType[];
