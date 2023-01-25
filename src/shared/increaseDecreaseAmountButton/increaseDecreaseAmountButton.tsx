import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { ShoppingCartItemType } from "../../features/shoppingCart/shoppingCart.type";
import {
  updateShoppingCart,
  deleteShoppingCartItems,
} from "../../features/shoppingCart/shoppingCartSlice";

interface IIncreaseDecreaseAmountButtonProps {
  item: ShoppingCartItemType;
}

export const IncreaseDecreaseAmountButton: React.FC<
  IIncreaseDecreaseAmountButtonProps
> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
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
          <Typography mt="5px">{item.amout}</Typography>
          <IconButton aria-label="delete">
            <MinimizeIcon
              fontSize="large"
              sx={{ paddingBottom: "13px" }}
              onClick={() => {
                if (item.amout === 1) {
                  // setShowAmount(false);
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
    </>
  );
};
