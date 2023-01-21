import { Grid } from '@mui/material'
import React from 'react'
import Products from '../../features/products/products'
import NavBar from '../../shared/navBar/navBar/navBar'

const HomePage = () => {
  return (
    <Grid container>
    <NavBar />
    <Products />
  </Grid>
  )
}

export default HomePage