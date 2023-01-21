import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppDispatch } from "../../app/hooks";
import { addToShoppingCart } from "../../features/shoppingCart/shoppingCartSlice";
import { ProductType } from "../../features/products/product.type";

interface IAddToShoppingCartButtonProps {
  product: ProductType;
  amount: number;
}

const AddToShoppingCartButton: React.FC<IAddToShoppingCartButtonProps> = ({
  product,
  amount,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
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
          dispatch(
            addToShoppingCart({
              product,
              amout: amount,
              totalPrice: (amount - 1) * product.fields.priceWithDiscount,
            })
          );
          // setShowAmount(true);
        }}
      >
        افزودن به سبد خرید
      </Button>

      <Button
        size="small"
        variant="contained"
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "60%",
          borderRadius: "5px",
          bgcolor: "yellow",
          color: "black",
          mr: "10px",
        }}
      >
        <AddShoppingCartIcon fontSize="small" />
      </Button>
    </>
  );
};

export default AddToShoppingCartButton;
