import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
  Grid,
  InputAdornment,
  TextField,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Autocomplete,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Fab,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.png";
import NavBarLogo from "../../shared/navBar/navBArLogo/navBarLogo";
import NavBarSearchInput from "../../shared/navBar/navBarSearchInput/navBarSearchInput";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Category, StarBorder } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectProducts, getProductAsync } from "../products/productSlice";
import { Link, useNavigate } from "react-router-dom";

const pages = ["محصولات", "کاربران"];
interface Column {
  id:
    | "name"
    | "category"
    | "price"
    | "discount"
    | "priceWithDiscount"
    | "count"
    | "description";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "نام محصول", minWidth: 120 },
  { id: "category", label: "دسته بندی ", minWidth: 120 },
  { id: "price", label: "قیمت", minWidth: 100 },
  {
    id: "discount",
    label: "تخفیف",
    minWidth: 50,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "priceWithDiscount",
    label: "قیمت با تخفیف",
    minWidth: 100,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "count",
    label: "موجودی",
    minWidth: 50,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "description",
    label: "توضیحات",
    minWidth: 270,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  category: string;
  price: number;
  discount: number;
  priceWithDiscount: number;
  count: number;
  description: string;
}

function createData(
  name: string,
  category: string,
  price: number,
  discount: number,
  priceWithDiscount: number,
  count: number,
  description: string
): Data {
  return {
    name,
    category,
    price,
    discount,
    priceWithDiscount,
    count,
    description,
  };
}

const rows = [
  createData("India", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("China", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Italy", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData(
    "United States",
    "bluetooth",
    111111,
    25,
    1324171354,
    20,
    "هندزفری"
  ),
  createData("Canada", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Australia", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Germany", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Ireland", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Mexico", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Japan", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("France", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData(
    "United Kingdom",
    "bluetooth",
    111111,
    25,
    1324171354,
    20,
    "هندزفری"
  ),
  createData("Russia", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Nigeria", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
  createData("Brazil", "bluetooth", 111111, 25, 1324171354, 20, "هندزفری"),
];

const AdminPanelComponent = () => {
  const { products, searchProducts, status } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  const [open, setOpen] = React.useState(false);
  const [opene, setOpene] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [search, setSearch] = useState<string>("");

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const navigate = useNavigate();
  const chandler = (id: string) => {
    // navigate("/adminpaneladdproduct")
    console.log(id);
  };
  const Category = [
    { label: "هندزفری" },
    { label: "هدست" },
    { label: "هندزفری بلوتوثی" },
    { label: "هنزفری با سیم" },
  ];
  const Brand = [
    { label: "جی بی ال" },
    { label: "اپل" },
    { label: "شیایومی " },
    { label: " سامسونگ " },
    { label: " ال جی " },
    { label: " گوگل " },
  ];
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid container>
      <AppBar position="static" sx={{ bgcolor: "#e1e1e1", px: { sm: "20px" } }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <div>
              <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
                sx={{ height: "50px" }}
                PaperProps={{
                  sx: { width: "170px", top: 58 },
                }}
              >
                <List>
                  <ListItemText>محصول</ListItemText>
                  <List>
                    <ListItemButton>اضافه کردن محصول</ListItemButton>
                    <ListItemButton>نمایش محصولات</ListItemButton>
                  </List>
                  <ListItemText>کاربران</ListItemText>
                </List>
              </Drawer>
            </div>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                mr: "20px",
              }}
            >
              {pages.map((page: any) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: "18px",
                    mr: "5px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Link to="/">
              <Box
                component="img"
                src={logo}
                sx={{
                  width: "80px",
                  height: "50px",
                }}
              />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid
        container
        sx={{
          bgcolor: "#e1e1e1",
          justifyContent: "center",
          p: { xs: "10px", sm: "20px" },
        }}
      >
        <Box
          sx={{ flexGrow: { xs: 1, md: 0 }, width: { xs: "90%", sm: "80%" } }}
        >
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
            value={search}
            onChange={onSearchHandler}
          />
        </Box>
      </Grid>

      <Grid
        container
        xs={3}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "sticky",
          p: "10px",
          border: "1px solid black",
          margin: "20px 10px 20px 10px",
          height: "400px",
        }}
      >
        <List sx={{ width: "100%" }}>
          <ListItemText>
            <Typography variant="h6">فیلتر بر اساس :</Typography>
          </ListItemText>
          <ListItemButton>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={Category}
              disableCloseOnSelect
              getOptionLabel={(option) => option.label}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.label}
                </li>
              )}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="دسته بندی"
                  placeholder="دسته بندی"
                />
              )}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={Brand}
              disableCloseOnSelect
              getOptionLabel={(option) => option.label}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.label}
                </li>
              )}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="برند" placeholder="برند" />
              )}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>قیمت</ListItemButton>
          <Divider />
          <ListItemButton>تخفیف</ListItemButton>
          <Divider />
          <ListItemButton>قیمت با تخفیف</ListItemButton>
          <Divider />
          <ListItemButton> موجودی</ListItemButton>
          <Divider />
          <ListItemButton>تاریخ </ListItemButton>
        </List>
      </Grid>
      <Grid
        container
        xs={11}
        md={8}
        sx={{
          bgcolor: "yellow",
          position: "relative",
          mx: "auto",
          my: "20px",
          justifyContent: "center",
        }}
      >
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })} */}

                {products.map((row) => (
                  <TableRow
                    key={row.fields.name}
                    onClick={() => chandler(row.id)}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.fields.name}
                    </TableCell>
                    <TableCell align="right">{row.fields.brand}</TableCell>
                    <TableCell align="right">{row.fields.price}</TableCell>
                    <TableCell align="right">
                      {row.fields.discount * 100}
                    </TableCell>
                    <TableCell align="right">
                      {row.fields.price -
                        row.fields.price * row.fields.discount}
                    </TableCell>
                    <TableCell align="right">{row.fields.rating}</TableCell>
                    <TableCell align="right">{row.fields.reviews}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component={Grid}
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </Grid>
      <Link to="/adminpaneladdproduct">
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "absolute", bottom: -20, right: 25 }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </Grid>
  );
};

export default AdminPanelComponent;
