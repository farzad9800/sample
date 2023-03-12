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
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import { ProductType } from "./product.type";

interface IProduct {
  product: ProductType;
}

const ProductDetail = ({ searchProductById }: any) => {
  return (
    <Grid
      container
      xs={11}
      sx={{ margin: "auto", my: { xs: "10px", sm: "50px" }, py: "10px" }}
    >
      <Grid
        xs={12}
        sm={5}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Grid
          xs={12}
          sm={3}
          md={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "column" },
            justifyContent: { xs: "center", sm: "start" },
            textAlign: "center",
            ml: { xs: "0px", sm: "15px" },
            my: { xs: "20px", sm: 0 },
          }}
        >
          <Box
            component="img"
            src={product1}
            sx={{
              width: { xs: "20%", sm: "100%" },
              height: { xs: "50px", sm: "60px" },
              border: "1px solid black",
              py: "3px",
              mb: { xs: 0, sm: "20px" },
              ml: { xs: "10px", sm: 0 },
            }}
          />
          <Box
            component="img"
            src={product2}
            sx={{
              width: { xs: "20%", sm: "100%" },
              height: { xs: "50px", sm: "60px" },
              border: "1px solid black",
              py: "3px",
              mb: { xs: 0, sm: "20px" },
              ml: { xs: "10px", sm: 0 },
            }}
          />
          <Box
            component="img"
            src={product3}
            sx={{
              width: { xs: "20%", sm: "100%" },
              height: { xs: "50px", sm: "60px" },
              border: "1px solid black",
              py: "3px",
              mb: { xs: 0, sm: "20px" },
              ml: { xs: "10px", sm: 0 },
            }}
          />

          <Box
            component="img"
            src={product4}
            sx={{
              width: { xs: "20%", sm: "100%" },
              height: { xs: "50px", sm: "60px" },
              border: "1px solid black",
              py: "3px",
              mb: { xs: 0, sm: "20px" },
              ml: { xs: "10px", sm: 0 },
            }}
          />
        </Grid>

        <Grid container xs={12} sm={7} sx={{ ml: { sm: "15px" } }}>
          <Box
            component="img"
            src={searchProductById.map((item: any) => item.fields.image[0].url)}
            sx={{
              width: "100%",
              height: { xs: "200px", sm: "300px", md: "450px" },
              border: { xs: "none", sm: "1px solid black" },
              py: { sm: "40px" },
            }}
          />
        </Grid>
      </Grid>

      <Grid container xs={12} sm={6} sx={{ marginLeft: "5px" }}>
        <Grid container py="5px">
          <Typography sx={{ variant: { xs: "h6", md: "h5" } }}>
            {searchProductById.map((item: any) => item.fields.name)}
          </Typography>
        </Grid>
        <Grid container py="5px">
          <Typography variant="subtitle2">
            این هندزفری دارای طراحی بسایر مناسب و شیک و به علت داشتن 6 میکروفن
            مناب مکالمه و کیقیت صدا فوق العاده برای بخش موزیک می باشد
          </Typography>
        </Grid>
        <Grid container py="5px">
          <Grid container py="5px">
            <Grid container xs={5}>
              <Typography
                variant="subtitle1"
                style={{ textDecoration: "line-through", marginLeft: "5px" }}
              >
                {searchProductById.map((item: any) => item.fields.price)}
              </Typography>
              <Typography variant="subtitle1">تومان</Typography>
            </Grid>
            <Grid container xs={2} sx={{ justifyContent: "center" }}>
              <Typography variant="h6" color="blue">
                تخفیف
              </Typography>
            </Grid>
            <Grid container xs={5}>
              <Typography variant="subtitle1">
                {searchProductById.map((item: any) => item.fields.discount) *
                  searchProductById.map((item: any) => item.fields.price)}
              </Typography>
              <Typography variant="subtitle1" mr="4px">
                تومان
              </Typography>
            </Grid>
          </Grid>
          <Grid container py="5px">
            <Typography sx={{ variant: { xs: "subtitle1", md: "h6" } }}>
              قیمت نهایی :
            </Typography>
            <Typography
              sx={{ variant: { xs: "subtitle1", md: "h6" } }}
              style={{ marginLeft: "5px" }}
            >
              {searchProductById.map(
                (item: any) => item.fields.priceWithDiscount
              )}
            </Typography>
            <Typography sx={{ variant: { xs: "subtitle1", md: "h6" } }}>
              تومان
            </Typography>
          </Grid>
        </Grid>
        <Grid container py="10px">
          <Divider sx={{ borderTop: "1px solid black", width: "100%" }} />
        </Grid>
        <Grid container py="10px">
          <FormControl>
            <Typography variant="h6">انتخاب رنگ</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="black"
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="مشکی"
              />
              <FormControlLabel
                value="blue"
                control={
                  <Radio
                    sx={{
                      color: "blue",
                      "&.Mui-checked": {
                        color: "blue",
                      },
                    }}
                  />
                }
                label="آبی"
              />
              <FormControlLabel
                value="yellow"
                control={
                  <Radio
                    sx={{
                      color: "yellow",
                      "&.Mui-checked": {
                        color: "yellow",
                      },
                    }}
                  />
                }
                label="زرد"
              />
              <FormControlLabel
                value="red"
                control={
                  <Radio
                    sx={{
                      color: "red",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                }
                label="قرمز"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container py="10px">
          <Divider sx={{ borderTop: "1px solid black", width: "100%" }} />
        </Grid>
        <Grid container py="10px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">ویژگی ها</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                این هندزفری با توجه به اشتن 6 میکروفن برای مکالمه بسیار مناسب
                هست و با توجه به باتری 1000 میلی آمپری به شما برای 72 ساعت شارژ
                دهی میدهد و کاور دستگاه نیز 72 ساعت شارژدهی مضاعف دارد ، این
                هندزفری بسار طراحی زیبا و کیفیت مناسب را دارد و جز پر فروش ترین
                هندزفری های بازار است. این هندزفری به علت اینکه ژله ای است بسیار
                مناسب برای ورزشکاران است. این هندزفری از جمله پرچمداران شیلیومی
                حساب میشه که کیفیت ساخت و بدون تاخیر در انتقا صدا می باشد. این
                هندزفری از طرف فروشگاه گرتا پیشنهاد میشود و گارانتی 1 ساله نیز
                ارد..
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid container sx={{ justifyContent: "center" }} py="20px">
          <Button
            variant="contained"
            size="medium"
            sx={{ width: "100%", height: "40px" }}
            endIcon={
              <AddShoppingCartIcon
                fontSize="small"
                style={{ marginRight: "20px" }}
              />
            }
          >
            افزودن به سبد خرید
          </Button>
        </Grid>
      </Grid>
      <Grid
        xs={2}
        sm={0.5}
        sx={{
          my: { sm: "60px" },
          py: { xs: "10px", sm: "20px" },
          position: { xs: "absolute", sm: "static" },
          top: { xs: 190, sm: "none" },
          right: { xs: 30, sm: "none" },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Link to="/" color="black" style={{ marginBottom: "10px" }}>
            <FavoriteBorderIcon color="error" />
          </Link>
          <Link to="/" color="black" style={{ marginBottom: "10px" }}>
            <ShareIcon color="action" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
