import {Stack, Typography } from "@mui/material";
import moment from "moment";
// import moment from "moment";

import { useAppContext } from "../../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { onSnapshot,doc } from "firebase/firestore";
import { db } from "../../../firebase/Auth";


// import { useAppContext } from "../../../context/app-context";

const Body = () => {
  const { currentuser } = useAppContext();

 
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    // console.log(messages,"data");
    
    // console.log(currentuser.uid );
    return () => {
      unSub();
    };
  }, [data.chatId]);
  
 
  

  return (
    <Stack 
    
      maxHeight={{
        xs: "calc(100vh - 20px)",
        sm: "calc(100vh - 210px)",
        md: "calc(100vh - 365px)",
      }}
      id="your_div"
      overflow={"auto"}
      mt={2}
      direction={"column"}
      rowGap={1}
      // backgroundColor="blue"
      fontSize={{ xs: "8px", sm: "10px", md: "12px", lg: "14px", xl: "14px" }}
    >
      {/* {
        groupedMessages.reverse().map((group, index) => ( */}
      <Stack
        // key={index}
      >
            {/* show date */}
            <p
              style={{
                background: '#edf7ed',
                padding: '5px 0px',
                textAlign: 'center',
                width: '20%',
                margin:'auto'
              }}>
          {/* {group.date} */}
          12 june 2022
            </p>

            {/* {
              group.messages
                .slice(0)
                .reverse()
                .map((message, index) => ( */}
            
                {/* ))
            } */}
      </Stack>
    
        {/* ))
      } */}


      {/*============================ sender message================================= */}
   
     
     
          {/* Message */}
          

{/* dummy data */}

{
  messages?.map((message, index) => (
    <Stack
      key={index}
      direction={message.senderId === currentuser.uid ? "row-reverse" :"row" }
    >
      <Typography
        sx={{
          minWidth: "250px",
          backgroundColor:
            message.senderId === currentuser.uid ? "#16C76C"  : "white" ,
          padding: "10px 20px",
          borderRadius:
            message.senderId === currentuser.uid
              ? "15px 15px 0 15px" 
              : "15px 15px 15px 0" ,
          mt: 1
        }}
      >
        {message.text}
        <Typography style={{ fontSize: "12px" }} textAlign="right">
          {moment(message.timestamp).format("hh:mm A")}
        </Typography>
      </Typography>
    </Stack>
  ))
}

    </Stack>


  );
};

export default Body;


