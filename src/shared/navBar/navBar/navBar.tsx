import {
  Grid,
  Box,
  Tooltip,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBarLogo from "../navBArLogo/navBarLogo";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useAppSelector } from "../../../app/hooks";
import { selectShoppingCart } from "../../../features/shoppingCart/shoppingCartSlice";
import { ShoppingCartItemType } from "../../../features/shoppingCart/shoppingCart.type";
import ShoppingCartMenuItemDrop from "../../shoppingCartMenuItemDrop/shoppingCartMenuItemDrop";
import NavBarSearchInput from "../navBarSearchInput/navBarSearchInput";

const NavBar = () => {
  const { items } = useAppSelector(selectShoppingCart);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let a: number = 0;

  return (
    <Grid
      container
      sx={{
        px: { xs: "10px", md: "40px" },
        bgcolor: "#e1e1e1",
        boxShadow: "1px 1px gray",
      }}
      py="30px"
    >
      <NavBarLogo />

      <Grid sx={{ display: { xs: "none", md: "flex" } }} md={4}>
        <NavBarSearchInput />
      </Grid>

      <Grid
        container
        xs={6}
        md={4}
        sx={{
          justifyContent: { xs: "end", md: "center" },
          pr: { xs: 0, md: "70px" },
        }}
      >
        <Grid>
          <Box>
            <Tooltip title="سبد خرید">
              <IconButton
                onClick={handleClick}
                onMouseOver={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Link to="/shoppingcart">
                  {" "}
                  <Badge badgeContent={items.length} color="error">
                    <AddShoppingCartIcon
                      fontSize="medium"
                      sx={{ color: "black" }}
                    />
                  </Badge>
                </Link>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            PaperProps={{
              elevation: 0,
              sx: {
                display: { xs: "none", md: "flex" },
                overflow: "auto",
                width: "25%",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 120,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              sx={{ bgcolor: "#f9f8f8", mx: "6px", borderRadius: "10px" }}
            >
              <Grid container xs={6}>
                <Link
                  to="/shoppingcart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Grid container>
                    <Typography variant="subtitle2" ml="10px">
                      مشاهده سبد خرید
                    </Typography>
                    {items.length ? (
                      <KeyboardDoubleArrowLeftIcon fontSize="small" />
                    ) : (
                      ""
                    )}
                  </Grid>
                </Link>
              </Grid>
              {items.length ? (
                <Grid xs={6} textAlign="end">
                  <Typography variant="caption">{items.length}</Typography>
                  <Typography variant="caption" mr="5px">
                    کالا
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
            </MenuItem>
            {items.length ? (
              items.map((cartItem: ShoppingCartItemType) => (
                <ShoppingCartMenuItemDrop item={cartItem} />
              ))
            ) : (
              <Grid container pr="50px">
                <Typography>سبد خرید شما خالی است</Typography>
              </Grid>
            )}

            <Divider />

            {items.length ? (
              <MenuItem>
                <Grid container xs={6}>
                  <Typography>
                    {" "}
                    {items.reduce(
                      (accumulator, item) => accumulator + item.totalPrice,
                      0
                    )}
                  </Typography>
                  <Typography mr="5px">تومان</Typography>
                </Grid>
                <Grid xs={6} sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ bgcolor: "yellow", color: "black", width: "80%" }}
                  >
                    پرداخت
                  </Button>
                </Grid>
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
        </Grid>
        <Grid sx={{ mr: { xs: "20px", md: "40px" } }} mt="5px">
          <Tooltip title="حساب کاربری">
            <Link to="/">
              <PersonIcon fontSize="medium" sx={{ color: "black" }} />
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" }, mt: "20px" }}>
        <NavBarSearchInput />
      </Grid>
    </Grid>
  );
};

export default NavBar;
