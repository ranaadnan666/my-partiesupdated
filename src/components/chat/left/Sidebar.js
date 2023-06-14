import { Avatar, Box,  Stack, Typography } from '@mui/material';
import React from 'react'
import image from '../../../images/pti.png'
import ProfileTab from './ProfileTab';
function Sidebar() {
  return (
    <>
      <Box sx={{ width: '95%' }}
        border="1px solid silver"
        borderRight='0'
       height={'82vh'}
      mx={"auto"}
      >
        <Box sx={{
          width: '100%',
          padding:'25px 0px',
          backgroundColor:'green'
        }}>
          <Typography textAlign={"center"} variant="h5" color={"white"}>
            Profile
         </Typography>
       </Box>
        <Stack>

          <Stack alignItems={"center"} gap={1}>
            <Avatar
             
              sx={{
                width: { xs: "100px", sm: "150px" },
                height: { xs: "100px", sm: "150px" },
                cursor: "pointer",
                marginTop:'10px'
              }}
              src={image}
            />
       
              {/* <h4>{activeChatUser?.other_user?.username}</h4> */}
            <Typography variant='h5'>Pakistan Tehreek-e-Insaf</Typography>

            <Typography variant="p" textAlign={"justify"}
          width="80%"
            >
              The Pakistan Tehreek-e-Insaf is a political party in Pakistan. It was founded in 1996 by Pakistani cricketer-turned-politician Imran Khan, who served as the country's prime minister from 2018 to 2022.
              </Typography>
            
          </Stack>
          <ProfileTab/>
       

        </Stack>

      </Box>
    </>
  )
}

export default Sidebar