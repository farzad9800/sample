import { Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import logo from "../../../assets/images/logo.png";
import { Form, Formik } from "formik";

const initialRegisterFormvalues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const RegisterComponent = () => {
  const navigate = useNavigate();

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
          ثبت نام
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
          initialValues={initialRegisterFormvalues}
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
                id="firstName"
                placeholder="نام"
                name="firstName"
                variant="outlined"
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                error={errors.firstName ? true : false}
                helperText={errors.firstName}
                sx={{ marginBottom: "20px" }}
              />

              <TextField
                id="lastName"
                placeholder="نام خانوادگی"
                name="lastName"
                variant="outlined"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                error={errors.lastName ? true : false}
                helperText={errors.lastName}
                sx={{ marginBottom: "20px" }}
              />

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
                endIcon={<FingerprintIcon style={{marginRight:"10px"}} />}
                sx={{ marginBottom: "20px" }}
              >
                ثبت نام
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container sx={{}}>
          {" "}
          <Typography textAlign="start">
            اگر قبلا ثبت نام کرده اید <Link to="/login">ورود</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterComponent;
