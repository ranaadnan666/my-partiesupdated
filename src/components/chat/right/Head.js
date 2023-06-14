import { Avatar,  Stack, Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Box } from "@mui/system";
import { useState } from "react";
import ChatUserButton from "./ChatUserButton";
import image from '../../../images/pti.png'
const Head = (props) => {
  const [mobilechat, setMobilechat] = useState(false);
  return (
    <>
     
      
      <Stack
      
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          // backgroundColor="teal"
          fontSize={{
            xs: "8px",
            md: "12px",
            lg: "14px",
          }}
        >
     
          <Stack direction={"column"}>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            {/* back arrow on mobile view */}
            <Box display={{ xs: "block", md: "none" }}>
              <ArrowCircleLeftIcon
                onClick={() => {
                  setMobilechat(false);

                }}
              />
           </Box>
            
              <Avatar
                sx={{
                  width: { xs: "30px", sm: "50px" },
                  height: { xs: "30px", sm: "50px" },
                  cursor: "pointer",
                }}
                // src={
                //   // Set the `src` of the `Avatar` based on the `sms_sender` property

                //   activeChatUser?.other_user?.profile_pic

                // }
              src={props.avatar? props.avatar:image}
              />
              <Stack direction={"column"}>
              {/* <h4>{activeChatUser?.other_user?.username}</h4> */}
              {props.name? props.name:<Typography >Pakistan Tehreek-e-Insaf</Typography>}
          
              <Typography variant="p">
                {/* {activeChatUser?.other_user?.is_online ? "Active now" : "Offline"} */}
                This is releted to Pakistan
              </Typography>
              </Stack>
         
           
            </Stack>
          
         
          </Stack>
          <Stack direction="row" justifyContent={"center"} alignItems="center">
         <ChatUserButton/>
          </Stack>
        </Stack>
    
     
    </>
  );
};

export default Head;
