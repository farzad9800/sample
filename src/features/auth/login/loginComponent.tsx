import { Grid, Typography, TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import logo from "../../../assets/images/logo.png";
import LoginIcon from "@mui/icons-material/Login";

const initialRegisterValue = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        padding: { xs: "15px", md: "40px 70px" },
      }}
    >
      <Grid container sx={{ justifyContent: "end" }}>
        <Link to="/">
          <ArrowBackIcon fontSize="large" color="action" />
        </Link>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
        mb="20px"
      >
        <Link
          style={{
            textAlign: "center",
          }}
          to="/"
        >
          <img src={logo} alt="Greta-Logo" width="100%" height="80px" />
        </Link>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
          }}
        >
          ورود
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          boxShadow: { md: "2px 2px 2px 2px gray" },
          border: { xs: "1px solid gray", md: "none" },
          padding: { xs: "20px 10px", md: "30px" },
        }}
      >
        <Formik
          initialValues={initialRegisterValue}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <Form>
              <TextField
                id="email"
                placeholder="ایمیل"
                name="email"
                variant="outlined"
                fullWidth
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                id="password"
                placeholder="رمز عبور"
                name="password"
                variant="outlined"
                fullWidth
                type="password"
                value={values.password}
                onChange={handleChange}
                error={errors.password ? true : false}
                helperText={errors.password}
                sx={{ marginBottom: "20px" }}
              />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                startIcon={<LoginIcon style={{ marginLeft: "10px" }} />}
                sx={{ marginBottom: "20px" }}
              >
                ورود
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container sx={{}}>
          {" "}
          <Typography textAlign="start">
            اگر قبلا ثبت نام نکرده اید <Link to="/register">عضویت</Link>
          </Typography>
        </Grid>

        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Email or Password Is Not Valid
          </Alert>
        </Snackbar>
        <Snackbar
          open={loginSuccessOpen}
          autoHideDuration={6000}
          onClose={handleCloseLoginSuccess}
        >
          <Alert
            onClose={handleCloseLoginSuccess}
            severity="success"
            sx={{ width: "100%" }}
          >
            Login Successfully
          </Alert>
        </Snackbar> */}
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
