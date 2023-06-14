import { useContext, useState } from "react";
import { Stack } from "@mui/material";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GifIcon from "@mui/icons-material/Gif";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/Auth";
import { v4 as uuid } from "uuid";
import { useAppContext } from "../../../context/AppContext";
import { ChatContext } from "../../../context/ChatContext";

// import { useAppContext } from "../../../context/app-context";
// import { baseUrlWebSocket } from "../../../utils/constants/base_urls";
// import { useState, useEffect, useCallback } from "react";


const Foot = (props) => {
  // const [message, setMessage] = useState("");
 

  // const [socket, setSocket] = useState(null);

  // const { chatRoomId, chatUserId, setMessagesOfSingleChatRoom } =
  //   useAppContext();

  // useEffect(() => {
  //   if (chatRoomId) {
  //     setSocket(new WebSocket(`${baseUrlWebSocket}${chatRoomId}/`));
  //   }
  //   // eslint-disable-next-line
  // }, [chatRoomId]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.onmessage = function (e) {
  //       let data = JSON.parse(e.data);
  //       if (data.message) {
  //         setMessagesOfSingleChatRoom((prev) => {
  //           // Check if the message is already in the array
  //           const messageExists = prev.some(
  //             (message) => message.id === data.id
  //           );
  //           if (messageExists) {
  //             return prev;
  //           }

  //           // If the message is not in the array, add it to the beginning
  //           return [data, ...prev];
  //         });
  //       }
  //     };

  //     return () => {
  //       socket.close();
  //     };
  //   }
  //   // eslint-disable-next-line
  // }, [socket]);

  // const sendMessage = useCallback(() => {
  //   if (message.trim() !== "" && socket) {
  //     socket.send(
  //       JSON.stringify({
  //         message: message,
  //         sms_sender: chatUserId,
  //       })
  //     );
  //     setMessage("");
  //   }
  // }, [message, chatUserId, socket]);

  // const sendMessage =async (e) => {
  //   e.preventDefault();
  //   if (message === "")
  //   {
  //     alert("enter valid message");
  //     return;
  //   }
  //   setMessage("")
  //   const {uid,displayName,photoURL}=currentuser
  //  try {
  //   await addDoc(collection(db, "messages"),
  //   {
  //     text:message,
  //     name:displayName,
  //     avatar:photoURL,
  //     createdAt:serverTimestamp(),
  //     uid:uid
  //   })
   
  //  } catch (error) {
  //   console.log(error);
  //  }
  // };



  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentuser } = useAppContext();
  const { data } = useContext(ChatContext);



  //   const sendMessage = (value) => {
  //   db.ref('messages').push({
  //     sender: currentuser.uid,
  //     text: value,
  //     timestamp: firebase.database.ServerValue.TIMESTAMP,
  //   });
  // };
  const handleSend = async (e) => {
    console.log(img);
    e.preventDefault();
    // if (img) {
    //   const storageRef = ref(storage, uuid());

    //   const uploadTask = uploadBytesResumable(storageRef, img);

    //   uploadTask.on(
    //     (error) => {
    //       //TODO:Handle Error
    //     },
    //     () => {
    //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //         await updateDoc(doc(db, "chats", data.chatId), {
    //           messages: arrayUnion({
    //             id: uuid(),
    //             text,
    //             senderId: currentuser.uid,
    //             date: Timestamp.now(),
    //             img: downloadURL,
    //           }),
    //         });
    //       });
    //     }
    //   );
    // } else {
      setText("")
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentuser.uid,
          date: Timestamp.now(),
         
        }),
      });
     
    // }

    await updateDoc(doc(db, "chats", currentuser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "chats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <>
      <Stack
        mt={2}
        direction={"column"}
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
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          value={text}
          onChange={e =>setText(e.target.value)}
          style={{
            resize: "none",
            padding: "5px",
            borderRadius: "10px",
           height:"60px",
            border: "none",
            outline: "none",
            backgroundColor: "white",
            fontSize: "inherit",
          }}
        ></textarea>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <PhotoSizeSelectActualIcon
              sx={{
                cursor: "pointer",
                padding: "4px",
                borderRadius: "50%",
                fontSize: { xs: "10px", md: "15px", lg: "20px" },
                color: "#666666",
                "&:hover": {
                  backgroundColor: "lightgray",
                  color: "skyblue",
                },
              }}
            />
            <AttachFileIcon
              sx={{
                cursor: "pointer",
                padding: "4px",
                borderRadius: "50%",
                fontSize: { xs: "10px", md: "15px", lg: "20px" },
                color: "#666666",
                "&:hover": {
                  backgroundColor: "lightgray",
                  color: "skyblue",
                },
              }}
            />
            <GifIcon
              sx={{
                cursor: "pointer",
                padding: "4px",
                borderRadius: "50%",
                fontSize: { xs: "10px", md: "15px", lg: "20px" },
                color: "#666666",
                "&:hover": {
                  backgroundColor: "lightgray",
                  color: "skyblue",
                },
              }}
            />
            <SentimentSatisfiedAltIcon
              sx={{
                cursor: "pointer",
                padding: "4px",
                borderRadius: "50%",
                fontSize: { xs: "10px", md: "15px", lg: "20px" },
                color: "#666666",
                "&:hover": {
                  backgroundColor: "lightgray",
                  color: "skyblue",
                },
              }}
            />
          </Stack>
          <SendIcon
            onClick={(e)=>{handleSend(e)}}
            
            sx={{
              cursor: "pointer",
              padding: "4px",
              fontSize: { xs: "10px", md: "15px", lg: "20px" },
              color: "#666666",
              "&:hover": {
                color: "skyblue",
              },
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Foot;
