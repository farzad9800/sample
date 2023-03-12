import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import DiscountDisplay from "../../shared/discoundDisplay/discountDisplay";
import PriceDisplay from "../../shared/priceDisplay/priceDisplay";
import ProductCartTitle from "../../shared/productCartTitle/productCartTitle";
import RatingDisplay from "../../shared/ratingDisplay/ratingDisplay";
import {
  addToShoppingCart,
  deleteShoppingCartItems,
  selectShoppingCart,
  updateShoppingCart,
} from "../shoppingCart/shoppingCartSlice";
import { ProductType } from "./product.type";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { ShoppingCartItemType } from "../shoppingCart/shoppingCart.type";
import ProductDetailPage from "../../pages/productDetailPage/productDetailPage";
import { generatePath, Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IProduct {
  product: ProductType;
}

const Product: React.FC<IProduct> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [showAmount, setShowAmount] = useState<boolean>(true);
  const [amount, setAmount] = useState<number>(1);
  const { items } = useAppSelector(selectShoppingCart);
  const navigate = useNavigate();

  useEffect(() => {
    items.map((item: ShoppingCartItemType) =>
      item.product.id === product.id ? setShowAmount(false) : ""
    );
  }, [showAmount]);

  const existOnShopCart = (items: ShoppingCartItemType[]) => {
    const item = items.find(
      (item: ShoppingCartItemType) => item.product.id === product.id
    );

    if (item) {
      return (
        <Grid
          sx={{
            display: { xs: "none", sm: "flex" },
            height: "20px",
            mx: "auto",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "110px",
              height: "35px",
              borderRadius: "5px",
              justifyContent: "space-between",
              bgcolor: "yellow",
            }}
          >
            <IconButton aria-label="delete">
              <AddIcon
                fontSize="small"
                onClick={() => {
                  if (item.amout < 6) {
                    dispatch(
                      updateShoppingCart({
                        product,
                        amout: item.amout + 1,
                        totalPrice:
                          (item.amout + 1) * product.fields.priceWithDiscount,
                      })
                    );
                  }
                }}
              />
            </IconButton>
            <Typography mt="5px">{item.amout}</Typography>
            <IconButton aria-label="delete">
              <MinimizeIcon
                fontSize="large"
                sx={{ paddingBottom: "13px" }}
                onClick={() => {
                  if (item.amout === 1) {
                    setShowAmount(true);
                    dispatch(deleteShoppingCartItems(product.id));
                  } else if (item.amout > 1) {
                    dispatch(
                      updateShoppingCart({
                        product: product,
                        amout: item.amout - 1,
                        totalPrice:
                          (item.amout - 1) * product.fields.priceWithDiscount,
                      })
                    );
                  }
                }}
              />
            </IconButton>
          </Box>
        </Grid>
      );
    } else {
      return (
        <Button
          sx={{
            display: { xs: "none", sm: "flex" },
            width: "80%",
            borderRadius: "5px",
            bgcolor: "yellow",
            color: "black",
          }}
          size="small"
          variant="contained"
          startIcon={<AddShoppingCartIcon sx={{ marginLeft: "10px" }} />}
          onClick={() => {
            setShowAmount(false);
            dispatch(
              addToShoppingCart({
                product,
                amout: amount,
                totalPrice: product.fields.priceWithDiscount,
              })
            );
          }}
        >
          افزودن به سبد خرید
        </Button>
      );
    }
  };

  const existOnShopCartxs = (items: ShoppingCartItemType[]) => {
    const item = items.find(
      (item: ShoppingCartItemType) => item.product.id === product.id
    );

    if (item) {
      return (
        <Grid
          container
          xs={5}
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "70px",
              height: "25px",
              borderRadius: "5px",
              justifyContent: "space-between",
              bgcolor: "yellow",
              mr: "5px",
            }}
          >
            <IconButton aria-label="delete">
              <AddIcon
                fontSize="small"
                onClick={() => {
                  if (item.amout < 6) {
                    dispatch(
                      updateShoppingCart({
                        product,
                        amout: item.amout + 1,
                        totalPrice:
                          (item.amout + 1) * product.fields.priceWithDiscount,
                      })
                    );
                  }
                }}
              />
            </IconButton>
            <Typography variant="subtitle1">{item.amout}</Typography>
            <IconButton aria-label="delete">
              <MinimizeIcon
                fontSize="large"
                sx={{ pb: "12px", pl: "15px" }}
                onClick={() => {
                  if (item.amout === 1) {
                    setShowAmount(true);
                    dispatch(deleteShoppingCartItems(product.id));
                  } else if (item.amout > 1) {
                    dispatch(
                      updateShoppingCart({
                        product: product,
                        amout: item.amout - 1,
                        totalPrice:
                          (item.amout - 1) * product.fields.priceWithDiscount,
                      })
                    );
                  }
                }}
              />
            </IconButton>
          </Box>
        </Grid>
      );
    } else {
      return (
        <Button
          size="small"
          variant="contained"
          sx={{
            display: { xs: "flex", sm: "none" },
            borderRadius: "10px",
            bgcolor: "yellow",
            color: "black",
          }}
          onClick={() => {
            setShowAmount(false);
            dispatch(
              addToShoppingCart({
                product,
                amout: amount,
                totalPrice: product.fields.priceWithDiscount,
              })
            );
          }}
        >
          <AddShoppingCartIcon fontSize="small" />
        </Button>
      );
    }
  };
  const [id, setId] = useState(product.id);

  const selectHandler = () => {
    setId(product.id);
    console.log(product.id);
    console.log(id);
    product.id && navigate(generatePath("productdetail/:id", { id }));
  };

  return (
    <Fragment>
      <Card
        sx={{
          display: { xs: "none", sm: "block" },
          width: "320px",
          boxShadow: "1px 1px 1px 1px black",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
          paddingTop: "10px",
          borderRadius: "10px",
          bgcolor: "#F5F5F5",
          pb: "10px",
        }}
      >
        <Box onClick={selectHandler}>
          <Grid container xs={11} margin="auto">
            <CardMedia>
              <img
                src={product.fields.image[0].url}
                width={product.fields.image[0].width}
                height={product.fields.image[0].height}
                style={{ borderRadius: "10px" }}
              />
            </CardMedia>
          </Grid>

          <CardContent sx={{ padding: "15px" }}>
            <ProductCartTitle title={product.fields.name} />

            <Grid container>
              <DiscountDisplay
                discount={product.fields.discount}
                price={product.fields.price}
              />
              <RatingDisplay
                rating={product.fields.rating}
                reviews={product.fields.reviews}
              />
              <Grid xs={12}>
                <Grid container justifyContent="space-between">
                  <PriceDisplay
                    priceWithDiscount={product.fields.priceWithDiscount}
                  />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
        <CardActions style={{ textAlign: "center", justifyContent: "center" }}>
          {showAmount ? (
            <Button
              sx={{
                display: { xs: "none", sm: "flex" },
                width: "80%",
                borderRadius: "5px",
                bgcolor: "yellow",
                color: "black",
              }}
              size="small"
              variant="contained"
              startIcon={<AddShoppingCartIcon sx={{ marginLeft: "10px" }} />}
              onClick={() => {
                setShowAmount(false);
                dispatch(
                  addToShoppingCart({
                    product,
                    amout: amount,
                    totalPrice: product.fields.priceWithDiscount,
                  })
                );
              }}
            >
              افزودن به سبد خرید
            </Button>
          ) : (
            <>{existOnShopCart(items)}</>
          )}
        </CardActions>
      </Card>

      <Card
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          bgcolor: "#F5F5F5",
          boxShadow: "1px 1px 1px 1px black",
          borderRadius: "10px",
          py: "5px",
          px: "2px",
        }}
      >
        <Box onClick={selectHandler}>
          <CardMedia>
            <img
              src={product.fields.image[0].url}
              style={{ width: "85px", padding: "5px" }}
            />
          </CardMedia>
        </Box>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              padding: "5px",
              "&:last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <Typography
              variant="subtitle2"
              color="black"
              style={{ textAlign: "start", paddingBottom: "10px" }}
            >
              {product.fields.name.length < 24
                ? product.fields.name
                : product.fields.name.slice(0, 24) + "..."}
            </Typography>
            <Grid container mb="8px" justifyContent="space-between">
              <DiscountDisplay
                discount={product.fields.discount}
                price={product.fields.price}
              />
              <RatingDisplay
                rating={product.fields.rating}
                reviews={product.fields.reviews}
              />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
                justifyContent: "space-between",
              }}
            >
              <Grid container xs={7}>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mr: { md: "30px" },
                  }}
                  variant="subtitle1"
                >
                  {product.fields.priceWithDiscount}{" "}
                  <Typography
                    variant="overline"
                    sx={{ mr: { xs: "3px", md: "6px" } }}
                  >
                    تومان
                  </Typography>
                </Typography>
              </Grid>
              {showAmount ? (
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    borderRadius: "10px",
                    bgcolor: "yellow",
                    color: "black",
                  }}
                  onClick={() => {
                    setShowAmount(false);
                    dispatch(
                      addToShoppingCart({
                        product,
                        amout: amount,
                        totalPrice: product.fields.priceWithDiscount,
                      })
                    );
                  }}
                >
                  <AddShoppingCartIcon fontSize="small" />
                </Button>
              ) : (
                <>{existOnShopCartxs(items)}</>
              )}
            </Grid>
          </CardContent>
        </Grid>
      </Card>
    </Fragment>
  );
};

export default Product;
