import {
  MenuItem,
  Grid,
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import MinimizeIcon from "@mui/icons-material/Minimize";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import product1 from "../../../assets/images/product1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCartItemType } from "../../features/shoppingCart/shoppingCart.type";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  updateShoppingCart,
  deleteShoppingCartItems,
} from "../../features/shoppingCart/shoppingCartSlice";

interface IShoppingCartProductProps {
  item: ShoppingCartItemType;
}

const ShoppingCartMenuItemDrop: React.FC<IShoppingCartProductProps> = ({
  item,
}) => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<number>(item.amout);
  const [totalPrice, setTotalPrice] = useState<number>(
    item.product.fields.priceWithDiscount
  );

  useEffect(() => {
    setTotalPrice(amount * item.product.fields.priceWithDiscount);
  }, [amount]);
  
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
                width: "85%",
                height: "35px",
                boxShadow: "1px 1px 1px black",
                bgcolor: "yellow",
                borderRadius: "10px",
                justifyContent: "space-between",
              }}
            >
              <IconButton aria-label="delete">
                <AddIcon
                  fontSize="small"
                  onClick={() => {
                    if (item.amout < 6) {
                      dispatch(
                        updateShoppingCart({
                          product: item.product,
                          amout: item.amout + 1,
                          totalPrice:
                            (item.amout + 1) *
                            item.product.fields.priceWithDiscount,
                        })
                      );
                    }
                  }}
                />
              </IconButton>
              <Typography mt="7px">{item.amout}</Typography>
              <IconButton aria-label="delete">
                <MinimizeIcon
                  fontSize="large"
                  sx={{ paddingBottom: "12px" }}
                  onClick={() => {
                    if (item.amout === 1) {
                      dispatch(deleteShoppingCartItems(item.product.id));
                    } else if (item.amout > 1) {
                      dispatch(
                        updateShoppingCart({
                          product: item.product,
                          amout: item.amout - 1,
                          totalPrice:
                            (item.amout - 1) *
                            item.product.fields.priceWithDiscount,
                        })
                      );
                    }
                  }}
                />
              </IconButton>
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
