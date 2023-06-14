
import { Stack } from '@mui/material'
import React from 'react'
import Rightbar from '../../components/home/Rightbar'
import UserProfile from '../../components/userprofile/UserProfile'

function User() {
  return (
       <Stack direction={"row"} width={{xs:"100%",md:"75%"}}>
          <UserProfile/>
          <Stack display={{xs:"none",md:"block"}} sx={{position:"fixed",right:"-10px"}} width={"35%"} p={0.5}   overflow={"auto"}
          height={
            "85vh"}>
            <Rightbar/>
          </Stack>
      </Stack>
  )
}

export default User