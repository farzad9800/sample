import axios from "axios";
import { ProductType } from "./product.type";

export const getAllProducts = async () => {
  const products = await axios.get(
    `https://api.airtable.com/v0/appKWkEIp6UozPprT/products?api_key=keyyWz426zsnMKavb`
  );
  console.log("products", products.data.records);
  return products.data.records;
};
