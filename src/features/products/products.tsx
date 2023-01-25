import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Product from "./product";
import { ProductType } from "./product.type";
import { selectProducts, getProductAsync } from "./productSlice";

interface IProductsComponentsProps {}

const Products: React.FC<IProductsComponentsProps> = () => {
  const { products, status } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  if (status === "loading") {
    return (
      <Grid container sx={{ justifyContent: "center", mt: "90px" }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      container
      xs={11}
      sx={{
        display: "flex",
        margin: "auto",
        gap: 2,
        justifyContent: { xs: "start", sm: "center", lg: "start" },
        py: "30px",
        px: { xs: "5px", md: "30px" },
      }}
    >
      <Grid container mb="20px">
        <Typography variant="h5" sx={{ borderBottom: "2px dashed black" }}>
          همه محصولات
        </Typography>
      </Grid>
      {products.map((item: ProductType) => (
        <Product key={item.id} product={item} />
      ))}
    </Grid>
  );
};

export default Products;
