import { Grid, Typography } from '@mui/material'
import StarRateIcon from "@mui/icons-material/StarRate";



interface IProductRatingProps {
  rating: number;
  reviews: string;
}



const RatingDisplay:React.FC<IProductRatingProps> = ({rating, reviews}) => {
  return (
    <Grid
    container
    xs={5}
    sx={{
      justifyContent: "end",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
    }}
  >
    <Typography variant="caption" sx={{ marginLeft: "3px" }}>
      ({reviews})
    </Typography>
    <Typography variant="caption" sx={{ marginLeft: "2px" }}>
      {rating}
    </Typography>
    <StarRateIcon fontSize="small" color="warning" />
  </Grid>
  )
}

export default RatingDisplay