import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/images/logo.png";

const NavBarLogo = () => {
  return (
    <Grid container xs={6} md={4}>
    <Link to="/">
    <img src={logo} alt="mayzel-logo" width="70px" height="40px" />
    </Link>
  </Grid>
  )
}

export default NavBarLogo