import { Grid, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import BasicTabs from '../../components/home/Tab'
import MenuBar from '../../components/home/Left'


const Home = () => {

  return (
  <>
    <Grid sx={{display:{xs:"block",md:"none"}}}> 
    <BasicTabs/>
    </Grid>
    <Grid sx={{display:{xs:"none",md:"block"}}} p={{md:1,lg:3}}>
      {/* <TabHome/> */}
      <Grid >
        <MenuBar/>
      </Grid>
      <Stack width={"70%"} marginLeft={{md:"265px",lg:"335px"}}>
      <Outlet/>
      </Stack>
      </Grid>
  </>
  )
}

export default Home