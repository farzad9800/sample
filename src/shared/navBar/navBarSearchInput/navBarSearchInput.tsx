import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { searchProduct } from "../../../features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";


const NavBarSearchInput = () => {

  const [ search, setSearch ] = useState<string>("")

  const dispatch = useAppDispatch()

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    dispatch(searchProduct(e.target.value))
  }


  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder="جستجو"
      size="small"
      fullWidth
      sx={{ bgcolor: "#f9f8f8", height: "40px" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      value= {search}
      onChange= {onSearchHandler}
    />
  );
};

export default NavBarSearchInput;
