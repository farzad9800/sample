import { Typography } from "@mui/material";
import { title } from "process";

interface IProductCartTitleProps {
  title: string;
}

const productCartTitle: React.FC<IProductCartTitleProps> = ({ title }) => {
  return (
    <Typography
      variant="body2"
      color="black"
      style={{ textAlign: "start", paddingBottom: "10px" }}
    >
      {title.length < 38 ? title : title.slice(0, 38) + "..."}
    </Typography>
  );
};

export default productCartTitle;
