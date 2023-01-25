import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";

const NavBarSearchInput = () => {
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
    />
  );
};

export default NavBarSearchInput;
