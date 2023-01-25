import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../app/hooks";
import { ShoppingCartItemType } from "../../features/shoppingCart/shoppingCart.type";
import ShoppingCartProduct from "../../features/shoppingCart/shoppingCartProduct";
import { selectShoppingCart } from "../../features/shoppingCart/shoppingCartSlice";
import NavBar from "../../shared/navBar/navBar/navBar";
import ShoppingCartInvoice from "../../shared/shoppingCartInvoice/shoppingCartInvoice";

interface IShoppingCartComponentsProps {}

const ShoppingCartPage: React.FC<IShoppingCartComponentsProps> = () => {
  const { items } = useAppSelector(selectShoppingCart);

  return (
    <>
      <NavBar />
      <Grid
        container
        sx={{
          justifyContent: { xs: "center", lg: "space-between" },
          mt: "40px",
          pb: "30px",
        }}
      >
        {items.length ? (
          items.map((cartItem: ShoppingCartItemType) => (
            <ShoppingCartProduct item={cartItem} />
          ))
        ) : (
          <Grid container pr="50px">
            <Typography>سبد خرید شما خالی است</Typography>
          </Grid>
        )}
        <ShoppingCartInvoice />
      </Grid>
    </>
  );
};

export default ShoppingCartPage;
