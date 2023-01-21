import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { ShoppingCartItemType } from "../../features/shoppingCart/shoppingCart.type";
import { selectShoppingCart } from "../../features/shoppingCart/shoppingCartSlice";

interface IShoppingCartInvoiceProps {}

const ShoppingCartInvoice: React.FC<IShoppingCartInvoiceProps> = () => {
  const { items } = useAppSelector(selectShoppingCart);

  return (
    <Grid
      xs={11}
      md={9}
      lg={4}
      container
      sx={{
        bgcolor: "#c5c5c5",
        marginLeft: { lg: "50px" },
        justifyContent: "center",
        boxShadow: "1px 1px 1px black",
        borderRadius: "5px",
        position: { lg: "fixed" },
        left: "0",
      }}
      pt="20px"
      pb="40px"
    >
      <Grid
        xs={11}
        sx={{ border: "1px solid black", borderRadius: "5px" }}
        m="auto"
      >
        <List>
          <ListItem sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6">جزییات پرداخت</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "space-between" }}>
            <Typography>مبلغ کل :</Typography>
            <Typography>
              {items.reduce(
                (accumulator, item) => accumulator + item.totalPrice,
                0
              )}

              <span style={{ paddingRight: "10px" }}>تومان</span>
            </Typography>
          </ListItem>
          <ListItem
            sx={{ justifyContent: "space-between", paddingBottom: "30px" }}
          >
            <Typography> هزینه ارسال :</Typography>
            <Typography>
              20000<span style={{ paddingRight: "10px" }}>تومان</span>
            </Typography>
          </ListItem>

          <Divider
            variant="middle"
            sx={{
              borderTop: "1px solid black",
              width: "90%",
              textAlign: "center",
            }}
          />
          <ListItem
            sx={{ justifyContent: "space-between", paddingTop: "30px" }}
          >
            <Typography> مبلغ قابل پرداخت :</Typography>
            <Typography>
              {items.reduce(
                (accumulator, item) => accumulator + item.totalPrice,
                0
              ) + 20000}
              <span style={{ paddingRight: "10px" }}>تومان</span>
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid container xs={11} sx={{ display: "flex" }}>
        <Grid container xs={1} mt="5px" ml="5px">
          <ReportGmailerrorredIcon />
        </Grid>
        <Grid container xs={10}>
          {" "}
          <Typography variant="overline">
            کالاهای موجود در سبد شما ثبت و رزور نشده اند. برای ثبت سفارش مراحل
            بعدی را تکمیل کنید
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={11}>
        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: "yellow", color: "black" }}
        >
          پرداخت
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShoppingCartInvoice;
