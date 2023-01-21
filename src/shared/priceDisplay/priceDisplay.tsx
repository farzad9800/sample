import { Typography } from '@mui/material'



interface IProductpriceWithDiscountProps {
  priceWithDiscount: number;
}




const PriceDisplay:React.FC<IProductpriceWithDiscountProps> = ({priceWithDiscount}) => {
  return (
    <Typography
    sx={{
      display: "flex",
      flexDirection: "row",
      mr:{xs:"2px",md:"30px"}
    }}
  >
    {priceWithDiscount} <Typography mr={1}>تومان</Typography>
  </Typography>
  )
}

export default PriceDisplay