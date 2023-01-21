import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  CardMedia,
  Box,
  IconButton,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import product1 from "../../assets/images/product1.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import ProductCartTitle from "../../shared/productCartTitle/productCartTitle";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { ShoppingCartItemType } from "./shoppingCart.type";
import { deleteShoppingCartItems, updateShoppingCart } from "./shoppingCartSlice";

interface IShoppingCartProductProps {
  item: ShoppingCartItemType;
}

const ShoppingCartProduct: React.FC<IShoppingCartProductProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [showAmount, setShowAmount] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(item.amout);

  // useEffect(() => {
  //   setAmount(item.amout)

  // }, [])

  return (
    <>
      <Grid
        md={9}
        lg={7}
        sx={{ display: { xs: "none", md: "flex" }, px: { lg: "30px" } }}
      >
        <Grid
          container
          mb="15px"
          sx={{
            borderRadius: "5px",
            boxShadow: "1px 1px 1px black",
            bgcolor: "#F5F5F5",
            py:{md:"10px"}
          }}
        >
          <Grid
            container
            xs={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <img
              src={item.product.fields.image[0].url}
              alt="product1"
              width="110px"
              height="120px"
            />
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
if(amount < 6){
  setAmount(amount + 1);
  dispatch(
    updateShoppingCart({ product: item.product, amout: amount + 1 })
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
                      // setAmount(amount - 1);
                      // dispatch(
                      //   updateShoppingCart({ product: item.product, amout: amount - 1 })
                      // );.
                      if (amount === 1) {
                        setAmount(amount - 1);
                        dispatch(
                          deleteShoppingCartItems(
                           item.product.id,
                          )
                        );
                      } else if (amount > 1) {
                        setAmount(amount - 1);
                        dispatch(
                          updateShoppingCart({
                            product: item.product,
                            amout: amount - 1,
                          })
                        );
                      }
                      
                    }}
                  />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={10} pr="10px">
            <List>
              <ListItem sx={{ justifyContent: "space-between" }}>
              <Typography
      variant="body2"
      color="black"
      style={{ textAlign: "start", paddingBottom: "10px" }}
    >
      {item.product.fields.name}
    </Typography>
              </ListItem>
              <ListItem>
                <ListItem sx={{ width: "40%" }}>
                  <Typography variant="inherit" ml="10px">
                    رنگ:
                  </Typography>
                  <CircleIcon sx={{ color: "yellow" }} fontSize="small" />
                  <Typography variant="inherit" mr="5px">زرد</Typography>
                </ListItem>
                <ListItem sx={{ width: "40%" }}>
                  <GppGoodIcon fontSize="small" />
                  <Typography variant="inherit" ml="10px" mr="5px">
                    گارانتی :{" "}
                  </Typography>
                  <Typography variant="inherit">18 ماهه</Typography>
                </ListItem>
              </ListItem>
              <Grid container mr="12px">
                <Grid container xs={5}>
                  <Grid container>
                    <Typography variant="inherit" ml="10px">
                      قیمت واحد :
                    </Typography>
                    <Typography style={{ textDecoration: "line-through" }}>
                      {item.product.fields.price}
                      <span style={{ paddingRight: "10px" }}>تومان</span>
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Typography variant="inherit" ml="10px">
                      قیمت نهایی :
                    </Typography>
                    <Typography>
                      {item.product.fields.priceWithDiscount}
                      <span style={{ paddingRight: "10px" }}>تومان</span>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container xs={4}>
                  <Grid container>
                    <Typography variant="inherit" ml="10px">
                      تخفیف :
                    </Typography>
                    <Typography>
                      {item.product.fields.price -
                        item.product.fields.priceWithDiscount}
                      <span style={{ paddingRight: "10px" }}>تومان</span>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                {/* <Divider sx={{ borderTop: "1px solid black", width: "90%" }} /> */}
              </Grid>
            </List>
          </Grid>
        </Grid>
      </Grid>

      <Card
        sx={{
          display: { xs: "flex", md: "none" },
          width: "92%",
          boxShadow: "1px 1px 1px 1px black",
          borderRadius: "10px",
          p: "5px",
          mb: "10px",
          bgcolor: "#F5F5F5",
        }}
      >
        <CardMedia
          sx={{
            alignContent: "center",
            alignItems: "center",
            marginTop: "10px",
            marginLeft: "8px",
          }}
        >
          <img src={product1} width="100px" height="140px" />

          <Grid container sx={{ justifyContent: "end" }} mt="15px">
            <Box
              sx={{
                display: "flex",
                width: "80px",
                height: "30px",
                borderRadius: "5px",
                justifyContent: "space-between",
                bgcolor: "yellow",
              }}
            >
              <IconButton aria-label="delete">
                <AddIcon fontSize="small" 
                                    onClick={() => {
                                      setAmount(amount + 1);
                                    }}/>
              </IconButton>
              <Typography pt="3px">{amount}</Typography>
              <IconButton aria-label="delete">
                <MinimizeIcon
                  fontSize="large"
                  sx={{ pb: "14px", pl: "10px" }}
                  onClick={() => {
                    if (amount > 1) {
                      setAmount(amount - 1);
                    }
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
        </CardMedia>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ padding: 0 }}>
            <ProductCartTitle title={item.product.fields.name}/>
            <List>
              <ListItem>
                <GppGoodIcon fontSize="small" />
                <Typography variant="caption" ml="10px" mr="5px">
                  رنگ:
                </Typography>
                <CircleIcon sx={{ color: "yellow" }} fontSize="small" />
                <Typography variant="caption" mr="5px">
                  زرد
                </Typography>
              </ListItem>
              <ListItem>
                <GppGoodIcon fontSize="small" />
                <Typography variant="caption" ml="10px" mr="5px">
                  گارانتی :{" "}
                </Typography>
                <Typography variant="caption">18 ماه </Typography>
              </ListItem>
              <ListItem>
                <ElectricRickshawIcon fontSize="small" />
                <Typography variant="caption" ml="10px" mr="5px">
                  ارسال :{" "}
                </Typography>
                <Typography variant="caption">1 روز کاری</Typography>
              </ListItem>
              <ListItem>
                <Typography
                  variant="subtitle1"
                  sx={{ display: "flex", flexDirection: "row", mr: "5px" }}
                >
                  {item.product.fields.priceWithDiscount}
                  <Typography mr={1} variant="overline">
                    تومان
                  </Typography>
                </Typography>
              </ListItem>
              <ListItem></ListItem>
            </List>
          </CardContent>
        </Grid>
      </Card>
    </>
  );
};

export default ShoppingCartProduct;
