 import React from 'react'
 import Grid from "@mui/material/Grid";
 import { Divider, Stack } from "@mui/material";
import Sidebar from './left/Sidebar';
import Body from './right/Body';
import Head from './right/Head';
import Foot from './right/Foot';
import 'firebase/compat/database';
import { useAppContext } from '../../context/AppContext';
const Inbox = () => {




    const handleClick = () => {
      setMobilechat(!mobilechat);
    };
    // ,setMobilechat 
  const { currentuser,mobilechat,setMobilechat} = useAppContext();
  // const {displayName,photoURL,uid}=currentuser
  const displayName = currentuser?.displayName || '';
  const photoURL = currentuser?.photoURL || '';
  // const uid = currentuser?.uid || '';
  



  // const sendMessage =async (e,value) => {
  //   e.preventDefault();
  //   if (value === "")
  //   {
  //     alert("enter valid message");
  //     return;
  //   }
  //   setMessage("")

    
  //  try {
  //   await addDoc(collection(db, "messages"),
  //   {
  //     text:value,
  //     name:displayName,
  //     avatar:photoURL,
  //     createdAt:serverTimestamp(),
  //     uid:uid
  //   })
   
  //  } catch (error) {
  //   console.log(error);
  //  }
  // };



  // const sendMessage = (value) => {
  //   db.ref('messages').push({
  //     sender: currentuser.vid,
  //     text: value,
  //     timestamp: firebase.database.ServerValue.TIMESTAMP,
  //   });
  // };
  
//   // Receiving messages
//  db.ref('messages').on('child_added', (snapshot) => {
//     const message = snapshot.val();
//     // Handle the received message
//   });

//   firestore.collection('messages').onSnapshot((snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//       if (change.type === 'added') {
//         const message = change.doc.data();
//         // Handle the received message
//       }
//     });
//   });


//   const sendMessage = (value) => {
//     db.collection('userChats').add({
//       sender: currentuser.vid,
//       text: value,
//       timestamp:serverTimestamp(),
//     });
//   };
  
//   // Receiving messages
// db.collection('useChats').onSnapshot((snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//       if (change.type === 'added') {
//         const message = change.doc.data();
//         // Handle the received message
//       }
//     });
//   });



    return (
      <Grid
        container
        padding={"20px 0px"}
        width={{ xs: "100%", sm: "90%", md: "95%" }}
        mx="auto"
        height="86vh"
      >
        <Sidebar/>

        <Grid
          display={{ xs: mobilechat ? 'block' : 'none', md: 'block' }}
          item
          xs={12}
          sm={12}
          md={7}
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
              <Head name={displayName} avatar={photoURL}/>
              <Divider />
              <Body/>
            </div>
            <Foot  />
          </Stack>
          {/* : "none"} */}
        </Grid>
      </Grid>
    )
  }
export default Inbox