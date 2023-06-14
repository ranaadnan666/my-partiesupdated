import { Grid, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import "../../index.css"

const Container = () => {

  return (
    <div>
      
        <Grid>
            <Navbar/>
        </Grid>
        <Stack  marginTop={"70px"}>
            <Outlet />
        </Stack>
    </div>
  )
}

export default Container