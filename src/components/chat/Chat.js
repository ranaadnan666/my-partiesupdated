import React, { useState,useEffect } from 'react'
import Grid from "@mui/material/Grid";
import {Divider, Stack, Typography } from "@mui/material";
import Sidebar from "./left/Sidebar";
import Head from "./right/Head";
import SendIcon from "@mui/icons-material/Send";
import moment from 'moment';
import { useAppContext } from '../../context/AppContext';
import { collection, query,  onSnapshot, orderBy, limit,serverTimestamp } from "firebase/firestore";
import 'firebase/compat/database';
import { db } from '../../firebase/Auth';
import { addDoc } from "firebase/firestore"; 
function Chat() {
   




        // const handleClick = () => {
    //   setMobilechat(!mobilechat);
    // };
    const [message, setMessage] = useState("");
  const { currentuser,mobilechat } = useAppContext();
  // const {displayName,photoURL,uid}=currentuser
  const displayName = currentuser?.displayName || '';
  const photoURL = currentuser?.photoURL || '';
  const uid = currentuser?.uid || '';
   const [messagess, setMessages] = useState([]);
  useEffect(() => {

    const q = query(collection(db, "messages"),
    orderBy("createdAt"),
    limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(),id:doc.id});
        // console.log("Current message: ", messages);
        setMessages(messages)
      });
      return ()=> unsubscribe;
    });
  }, []);


  const sendMessage =async (e) => {
    e.preventDefault();
    if (message === "")
    {
      alert("enter valid message");
      return;
    }
    setMessage("")

    
   try {
    await addDoc(collection(db, "messages"),
    {
      text:message,
      name:displayName,
      avatar:photoURL,
      createdAt:serverTimestamp(),
      uid:uid
    })
   
   } catch (error) {
    console.log(error);
   }
  };


    // const handleSend = () => {
    //     if (message.trim()) {
    //         setMessages([...messages, { text: message }]);
    //         setMessage("");
    //     }
    // };
    return (
        <Grid
            container
            padding={"20px 0px"}
            width={{ xs: "100%", sm: "90%", md: "95%" }}
            mx="auto"
            height="86vh"
        >
            <Grid item xs={12}
                sm={12}
                md={4}>
                <Sidebar />
            </Grid>
           

            <Grid
                display={{ xs: mobilechat ? 'block' : 'none', md: 'block' }}
                item
                xs={12}
                sm={12}
                md={8}
                p={{ xs: "5px", md: "20px" }}
                border="1px solid silver"
            >
                {/* main area */}
                {/* {activeChatUser ? */}
                <Stack
                    direction={"column"}
                    justifyContent="space-between"
                    height="100%"
                >
                    <div>
                        <Head name={displayName} avatar={photoURL} />
                        <Divider />
                        {/* ==================body============== */}
                     
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
    <Stack
      // Set the direction of the message bubble based on the `sms_sender` property
      // direction={message.sms_sender === chatUserId ? "row-reverse" : "row"}
      direction="row-reverse"
      padding={"5px"}
      margin={"4px 0px"}
      columnGap={{ xs: "1px", sm: "3px", md: "5px" }}
      // key={index}
      sx={{
        borderRadius: "10px",
      }}
    >
      {/* Avatar */}
      <Stack direction={"column"} rowGap={1} width="fit-content">
        {/* Sender name and date */}
        <Stack
          // Set the direction of the date and dot based on the `sms_sender` property
          // direction={message.uid === currentuser.uid ? "row-reverse" : "row"}
          columnGap={{ xs: "1px", sm: "3px", md: "5px" }}
          alignItems="center"
        >
          {/* dot */}
  

        </Stack>
        {/* Message */}
        <div style={{ display: "flex", alignItems: "center",marginTop:'-20px' }}>
            <div
              style={{
                
               
                
                margin: "5px",
        
              }}
            >

{/* dummy data */}

      {
      
 messagess?.map((message, index) => (
 
        <Stack key={index} direction={message.uid === currentuser.uid ? "row-reverse" : "row"}>
          <Typography sx={{minWidth:"250px",backgroundColor: message.uid === currentuser.uid ? "#16C76C" : "white",padding: "10px 20px", borderRadius: message.uid === currentuser.uid ? "15px 15px 0 15px" : "15px 15px 15px 0",mt:1}}>{message.text}
     
          <Typography style={{ fontSize: "12px" }} textAlign="right">{moment(message.timestamp).format("hh:mm A")}</Typography>
          
          </Typography>
          {/* <span>{message.sender}</span> */}
          

        </Stack>
      ))}
    </div>
              
              {/* <Typography style={{ fontSize: "12px" }} textAlign="right">
             
                {moment().format("hh:mm A")}
              </Typography> */}
           
          </div>
      
       
      </Stack>
      </Stack>
  
  
 
  </Stack>
                    </div>
                    {/* ==============Foot========== */}
                    <Stack
                        mt={2}
                        direction={"row"}
                        rowGap={1}
                        // backgroundColor="red"
                        fontSize={{
                            xs: "8px",
                            sm: "10px",
                            md: "12px",
                            lg: "14px",
                            xl: "14px",
                        }}
                    >
                        <textarea
                            placeholder="Write a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{
                                width: '100%',
                                resize: "none",
                                padding: "5px",
                                height:"60px",
                                borderRadius: "10px",
                                border: "none",
                                outline: "none",
                                backgroundColor: "white",
                                fontSize: "inherit",
                                "&:hover": {
                                    color: "skyblue",
                                },
                            }}

                        ></textarea>
                        <SendIcon
                            onClick={sendMessage}
                            sx={{
                                cursor: "pointer",
                                padding: "4px",
                                fontSize: { xs: "10px", md: "25px", lg: "25px" },
                                color: "#666666",
                                "&:hover": {
                                    color: "skyblue",
                                },
                            }}
                        />
                    </Stack>
                </Stack>
                {/* : "none"} */}
            </Grid>
        </Grid>
    )
}

export default Chat


