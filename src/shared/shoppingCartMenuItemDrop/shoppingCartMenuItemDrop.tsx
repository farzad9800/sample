import {
  MenuItem,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { ShoppingCartItemType } from "../../features/shoppingCart/shoppingCart.type";
import { useEffect, useState } from "react";

interface IShoppingCartProductProps {
  item: ShoppingCartItemType;
}

const ShoppingCartMenuItemDrop: React.FC<IShoppingCartProductProps> = ({
  item,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(
    item.product.fields.priceWithDiscount
  );

  useEffect(() => {
    setTotalPrice(item.amout * item.product.fields.priceWithDiscount);
  }, [item.amout]);

  return (
    <>
      <MenuItem sx={{ mb: "5px" }}>
        <Grid xs={4}>
          <Grid container>
            <img
              src={item.product.fields.image[0].url}
              width="70px"
              height="80px"
            />
          </Grid>

          <Grid
            sx={{
              height: "20px",
              mx: "auto",
              mt: "20px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "80%",
                height: "30px",
                boxShadow: "1px 1px 1px black",
                bgcolor: "yellow",
                borderRadius: "10px",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle1">{item.amout}</Typography>
              <Typography variant="subtitle1">عدد</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <List>
            <ListItem>
              <Grid>
                <Typography
                  sx={{
                    color: "black",
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    textAlign: "start",
                  }}
                  variant="body2"
                >
                  {item.product.fields.name}
                </Typography>
              </Grid>
            </ListItem>
            <ListItem>
              <CircleIcon sx={{ color: "yellow" }} fontSize="small" />
              <Typography
                sx={{ display: "inline", color: "black", mr: "5px" }}
                variant="caption"
              >
                زرد
              </Typography>
            </ListItem>
            <ListItem>
              <GppGoodIcon fontSize="small" />
              <Typography
                sx={{ display: "inline", mr: "5px", color: "black" }}
                variant="caption"
              >
                گارانتی 18 ماهه
              </Typography>
            </ListItem>
            <ListItem sx={{ justifyContent: "end" }}>
              <Typography variant="subtitle1" mr="5px">
                {totalPrice}
              </Typography>
              <Typography variant="caption" mr="5px">
                تومان
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </MenuItem>
      <Divider />
    </>
  );
};

export default ShoppingCartMenuItemDrop;
