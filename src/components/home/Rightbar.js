import React from 'react'
import Follower from '../userprofile/Follower'
import Activity from './Activity'
import { Box } from '@mui/material'

const Rightbar = () => {
  return (
    <Box sx={{backgroundColor:"white",padding:{xs:"0px 5px",lg:"10px 10px",xl:"10px 20px"},borderRadius:"10px"}} width={{lg:"90%",xl:"80%"}} mt={{md:0,lg:3}}>
          
            <Follower/>
            <Activity/>
         
    </Box>
  )
}

export default Rightbar