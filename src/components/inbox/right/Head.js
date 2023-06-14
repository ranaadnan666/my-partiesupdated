import { Avatar,  Stack, Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import ChatUserButton from "./ChatUserButton";
import { ChatContext } from "../../../context/ChatContext";
const Head = (props) => {
  const [mobilechat, setMobilechat] = useState(false);
  const { data } = useContext(ChatContext);
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
           {
            props.avatar?     <Avatar
            sx={{
              width: { xs: "30px", sm: "50px" },
              height: { xs: "30px", sm: "50px" },
              cursor: "pointer",
            }}
            // src={
            //   // Set the `src` of the `Avatar` based on the `sms_sender` property

            //   activeChatUser?.other_user?.profile_pic

            // }
          src={data.user.photoURL? data?.user?.photoURL:""}
          />:    <Avatar
          sx={{
            width: { xs: "30px", sm: "50px" },
            height: { xs: "30px", sm: "50px" },
            cursor: "pointer",
          }}
          // src={
          //   // Set the `src` of the `Avatar` based on the `sms_sender` property

          //   activeChatUser?.other_user?.profile_pic

          // }
        src=""
        />
           }
          
              <Stack direction={"column"}>
              {/* <h4>{activeChatUser?.other_user?.username}</h4> */}
              <Typography >{data.user.displayName ? data.user?.displayName :"No Name"}</Typography>
          
              <Typography variant="p">
                {/* {activeChatUser?.other_user?.is_online ? "Active now" : "Offline"} */}
                online
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
