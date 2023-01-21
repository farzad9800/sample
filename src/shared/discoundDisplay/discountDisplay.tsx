import { Grid, Avatar, Typography } from "@mui/material";

interface IProductDiscountProps {
  discount: number;
  price: number;
}

const DiscountDisplay: React.FC<IProductDiscountProps> = ({
  discount,
  price,
}) => {
  return (
    <Grid container xs={6} justifyContent="start">
      <Avatar
        sx={{
          bgcolor: "blue",
          width: "28px",
          height: "24px",
          marginLeft: "5px",
        }}
      >
        <Grid>
          <Typography variant="caption" display="block" gutterBottom>
            <span>%</span>
            {discount * 100}
          </Typography>
        </Grid>
      </Avatar>
      <Typography variant="overline" style={{ textDecoration: "line-through" }}>
        {price}
      </Typography>
    </Grid>
  );
};

export default DiscountDisplay;
