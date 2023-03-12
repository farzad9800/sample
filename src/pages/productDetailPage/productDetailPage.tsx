import {
  Grid,
  Typography,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import React, { Fragment } from "react";
import NavBar from "../../shared/navBar/navBar/navBar";
import ProductDetail from "../../features/products/productDetail";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchProductCart } from "../../features/shoppingCart/shoppingCartSlice";
import { searchProduct,  selectProducts } from "../../features/products/productSlice";
import { ProductType } from "../../features/products/product.type";
import {   generatePath, useNavigate, useParams } from "react-router-dom";



interface IProduct {
  product:ProductType;
}


const ProductDetailPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { products } = useAppSelector(selectProducts);
  const navBarHandler = (value: string) => {
    dispatch(searchProduct(value))
  }

// console.log("alooo" + id)
// const a =  products.filter((item) => item.id === id)
// a.forEach((item) => console.log( item))
// const searchproductbyid = (id: string) => {
//     products.filter((item) => item.id === id)
// }

const product =  products.filter((item) => item.id === id)


  return (
<Fragment>
  <NavBar searchHandler={navBarHandler}/>
  <ProductDetail searchProductById = {product} />
</Fragment>
  );
};

export default ProductDetailPage;
