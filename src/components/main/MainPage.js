import { Button, Grid, Stack } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { NavLink } from 'react-router-dom';
const MainPage = () => {
  return (
    <Grid container p={2}>
   <Grid xs={12} sm={8} md={6} lg={5} mx={"auto"}  height={"96.4vh"}  >
   <Stack direction="column" spacing={2} width={{xs:"95%",sm:"90%",xl:"65%"}} mx={"auto"}  height={"100%"} justifyContent={"center"}>
   <Stack rowGap={3} sx={{backgroundColor:"white",p:{xs:4,md:6},borderRadius:"20px"}}>
   <NavLink style={{textDecoration:"none"}} to="/signin">
      <Button sx={{width:"100% "}} variant="outlined" startIcon={<LoginIcon />}>
        Login
      </Button>
      </NavLink>
      <NavLink  style={{textDecoration:"none"}} to="/signup">
      <Button sx={{width:"100% "}} variant="contained" endIcon={<LockOpenIcon />}>
        Signup
      </Button>
      </NavLink>
      <NavLink style={{textDecoration:"none"}} to="/new/home/anouncement">
      <Button sx={{width:"100% "}} variant="outlined" startIcon={<LoginIcon />}>
        containe without login
      </Button>
      </NavLink>
   </Stack>
    </Stack>
   </Grid>
    </Grid>
  )
}

export default MainPage