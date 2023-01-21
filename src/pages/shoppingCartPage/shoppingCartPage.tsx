import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Product from "../../features/products/product";
import { ProductType } from "../../features/products/product.type";
import products from "../../features/products/products";
import { ShoppingCartItemType, ShoppingCartType } from "../../features/shoppingCart/shoppingCart.type";
import ShoppingCartProduct from "../../features/shoppingCart/shoppingCartProduct";
import { getShoppingCartItems, selectShoppingCart } from "../../features/shoppingCart/shoppingCartSlice";
import NavBar from "../../shared/navBar/navBar/navBar";
import ShoppingCartInvoice from "../../shared/shoppingCartInvoice/shoppingCartInvoice";


interface IShoppingCartComponentsProps {}


const ShoppingCartPage = () => {


    const { items } = useAppSelector(selectShoppingCart);



  return (
    <>
    <NavBar />
    <Grid
      container
      sx={{
        justifyContent: { xs: "center", lg: "space-between" },
        mt: "40px",
      }}
    >
{items.map((cartItem: ShoppingCartItemType) => (
        <ShoppingCartProduct  item={cartItem} />
      ))}
      <ShoppingCartInvoice />
    </Grid>
    
  </>


  )
}

export default ShoppingCartPage



