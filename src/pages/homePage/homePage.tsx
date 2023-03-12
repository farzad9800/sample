import { Grid } from "@mui/material";
import Products from "../../features/products/products";
import NavBar from "../../shared/navBar/navBar/navBar";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { searchProduct } from "../../features/products/productSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navBarHandler = (value: string) => {
    dispatch(searchProduct(value))
  }


  return (
    <Grid container>
      <NavBar searchHandler= {navBarHandler}/>
      <Products />
    </Grid>
  );
};

export default HomePage;
