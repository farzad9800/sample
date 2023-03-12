import { Button, Grid, Input, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import { Field, Form, Formik } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

interface ProductValues {
  productName: string;
  description: string;
  price: number;
  discount: number;
  count: number;
  image: string;
}

const AdminPanelAddProductComponent: React.FC<{}> = () => {
  const initialValues: ProductValues = {
    productName: "",
    description: "",
    price: 0,
    discount: 0,
    count: 0,
    image: "",
  };
  return (
    <Grid sx={{py:{xs:"10px", md:"40px"}}}>
            <Grid container sx={{ justifyContent: "end", px:{xs:"10px", md:"40px"} }}>
        <Link to="/adminpanel">
          <ArrowBackIcon fontSize="large" color="action" />
        </Link>
      </Grid>
            <Grid
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h5">افزودن محصول</Typography>
        </Grid>
      <Grid
        container
        xs={11}
        sx={{ margin: "auto", mt: "20px", p: "20px", border:"1px solid black" }}
      >
        <Grid xs={12} item sx={{ }}>
          <Formik
            initialValues={initialValues}
            //  validate={values => {
            //    const errors = {};
            //    if (!values.price) {
            //      errors.price = 'Required';
            //    } {
            //      errors.price = 'Invalid price ';
            //    }
            //    return errors;
            //  }}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form>
                <Grid container xs={12} sx={{ marginTop:"15px" }}>
                  <Grid container md={1.5} >
                    <label htmlFor="productName">عنوان محصول</label>
                  </Grid>
                  <Grid container xs={12} md={10} sx={{ marginTop: {xs:"5px", md:0} }}>
                    <Field
                      id="productName"
                      name="productName"
                      placeholder="عنوان محصول"
                      component={TextField}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} sx={{ marginTop:"15px" }}>
                  <Grid container md={1.5}>
                    <label htmlFor="description">توضیحات</label>
                  </Grid>
                  <Grid container xs={12} md={10} sx={{ marginTop: {xs:"5px", md:0} }}>
                    <Field
                      id="description"
                      name="description"
                      placeholder="توضیحات"
                      component={TextField}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12}>
                  <Grid container xs={12} md={6} sx={{ marginTop:"15px" }} >
                    <Grid container md={3} >
                      {" "}
                      <label htmlFor="price">قیمت</label>
                    </Grid>
                    <Grid container xs={12} md={8} sx={{ marginTop: {xs:"5px", md:0} }}>
                      <Field
                        id="price"
                        name="price"
                        placeholder="قیمت"
                        component={TextField}
                        size="small"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container xs={12} md={6} sx={{ marginTop:"15px" }}>
                    <Grid container md={3}>
                      <label htmlFor="discount">تخفیف</label>
                    </Grid>
                    <Grid container xs={12} md={8} sx={{ marginTop: {xs:"5px", md:0} }}>
                      <Field
                        id="discount"
                        name="discount"
                        placeholder="تخفیف"
                        component={TextField}
                        size="small"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container xs={12} sx={{ marginTop:"15px" }}>
                  <Grid container md={1.5} >
                    <label htmlFor="category"> دسته بندی</label>
                  </Grid>
                  <Grid container xs={12} md={10} sx={{ marginTop: {xs:"5px", md:0} }}>
                    <Field
                      id="category"
                      name="category"
                      placeholder="دسته بندی"
                      component={TextField}
                      size="small"
                      select
                      fullWidth
                    >
                    <MenuItem value="handsfree">
                      هندزفری
                    </MenuItem>
                    <MenuItem value="headset">
                      هدست
                    </MenuItem>
                    </Field>
                  </Grid>
                </Grid>
                <Grid container xs={12} sx={{ marginTop:"15px" }}>
                  <Grid container md={1.5} >
                    <label htmlFor="brand">  برند</label>
                  </Grid>
                  <Grid container xs={12} md={10} sx={{ marginTop: {xs:"5px", md:0} }}>
                    <Field
                      id="brand"
                      name="brand"
                      placeholder=" برند"
                      component={TextField}
                      size="small"
                      select
                      fullWidth
                    >
                                        <MenuItem value="handsfree">
                      هندزفری
                    </MenuItem>
                    <MenuItem value="headset">
                      هدست
                    </MenuItem>
                    </Field>
                  </Grid>
                </Grid>
                <Grid container xs={12} sx={{ marginTop:"15px" }}>
                  <Grid container md={1.5} >
                    <label htmlFor="image">عکس</label>
                  </Grid>
                  <Grid container xs={12} md={10} sx={{ marginTop: {xs:"5px", md:0} }}>
                    <Field
                      id="image"
                      name="image"
                      placeholder="عکس"
                      component={TextField}
                      size="small"
                      fullWidth
                      type="file"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  sx={{ marginTop:"15px", justifyContent: "center" }}
                >
                  <Button type="submit" sx={{ bgcolor:"yellow", width: {xs:"100%" , md:"50%"}, color:"black", fontSize:"18px"}}>
                    ذخیره
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminPanelAddProductComponent;
