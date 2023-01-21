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
import React, { Fragment, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import AddToShoppingCartButton from "../../shared/addToShoppingCartButton/addToShoppingCartButton";
import DiscountDisplay from "../../shared/discoundDisplay/discountDisplay";
import PriceDisplay from "../../shared/priceDisplay/priceDisplay";
import ProductCartTitle from "../../shared/productCartTitle/productCartTitle";
import RatingDisplay from "../../shared/ratingDisplay/ratingDisplay";
import {
  addToShoppingCart,
  updateShoppingCart,
} from "../shoppingCart/shoppingCartSlice";
import { ProductType } from "./product.type";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";

interface IProduct {
  product: ProductType;
}

const Product: React.FC<IProduct> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [showAmount, setShowAmount] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);

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
        <CardActions style={{ textAlign: "center", justifyContent: "center" }}>
          {!showAmount ? (
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
                dispatch(addToShoppingCart({ product, amout: amount }));
                setShowAmount(true);
              }}
            >
              افزودن به سبد خرید
            </Button>
          ) : (
            <>
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
                        if (amount < 6) {
                          setAmount(amount + 1);
                          dispatch(
                            updateShoppingCart({ product, amout: amount + 1 })
                          );
                        }
                      }}
                    />
                  </IconButton>
                  <Typography mt="5px">{amount}</Typography>
                  <IconButton aria-label="delete">
                    <MinimizeIcon
                      fontSize="large"
                      sx={{ paddingBottom: "13px" }}
                      onClick={() => {
                        if (amount === 1) {
                          setShowAmount(false);
                          setAmount(amount - 1);
                          dispatch(
                            updateShoppingCart({ product, amout: amount - 1 })
                          );
                        } else if (amount > 1) {
                          setAmount(amount - 1);
                          dispatch(
                            updateShoppingCart({ product, amout: amount - 1 })
                          );
                        }
                      }}
                    />
                  </IconButton>
                </Box>
              </Grid>
            </>
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
        <CardMedia>
          <img
            src={product.fields.image[0].url}
            style={{ width: "85px", padding: "5px" }}
          />
        </CardMedia>
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
              {product.fields.name.length < 27
                ? product.fields.name
                : product.fields.name.slice(0, 27) + "..."}
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
              {!showAmount ? (
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
                    dispatch(addToShoppingCart({ product, amout: amount }));
                    setShowAmount(true);
                  }}
                >
                  <AddShoppingCartIcon fontSize="small" />
                </Button>
              ) : (
                <>
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
                            if (amount < 6) {
                              setAmount(amount + 1);
                              dispatch(
                                updateShoppingCart({
                                  product,
                                  amout: amount + 1,
                                })
                              );
                            }
                          }}
                        />
                      </IconButton>
                      <Typography variant="subtitle1">{amount}</Typography>
                      <IconButton aria-label="delete">
                        <MinimizeIcon
                          fontSize="large"
                          sx={{ pb: "12px", pl: "15px" }}
                          onClick={() => {
                            if (amount === 1) {
                              setShowAmount(false);
                              setAmount(amount - 1);
                              dispatch(
                                updateShoppingCart({
                                  product,
                                  amout: amount - 1,
                                })
                              );
                            } else if (amount > 1) {
                              setAmount(amount - 1);
                              dispatch(
                                updateShoppingCart({
                                  product,
                                  amout: amount - 1,
                                })
                              );
                            }
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          </CardContent>
        </Grid>
      </Card>
    </Fragment>
  );
};

export default Product;
