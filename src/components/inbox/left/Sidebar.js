import { Avatar, Divider, Grid, Stack, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { useState,useContext,useEffect } from "react";

import { db } from "../../../firebase/Auth";
import { useAppContext } from "../../../context/AppContext";
import { ChatContext } from "../../../context/ChatContext";
import { collection, getDocs } from "firebase/firestore";
import {
    query,
    where,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
  } from "firebase/firestore";
import moment from "moment";

const Sidebar = () => {
    const [mobilechat, setMobilechat] = useState(false)
    const [chats, setChats] = useState([]);
    const { currentuser } = useAppContext();
    const { dispatch } = useContext(ChatContext);
    

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
  
  
    const handleSearch = async () => {
     
      const q = query(
        collection(db, "users"),
        where("displayName", "==", username)
      );
  
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          
          setUser(doc.data());
          console.log("search user ",user);
        });
      } catch (err) {
        setErr(true);
      }
    };
  
    const handleKey = (e) => {
      handleSearch();
 
    };
  
    const handleSelect = async (user) => {
   
      // console.log("user selected",currentuser.uid)
      
      //check whether the group(chats in firestore) exists, if not creatale
      const combinedId =
        currentuser.uid > user.uid
          ? currentuser.uid + user.uid
          : user.uid + currentuser.uid;
       
      try {
        const res = await getDoc(doc(db, "chats", combinedId));
  
        if (!res.exists()) {
          //create a chat in chats collection
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
  
          //create user chats
          await updateDoc(doc(db, "chats", currentuser.uid), {
            [combinedId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
  
          await updateDoc(doc(db, "chats", user.uid), {
            [combinedId + ".userInfo"]: {
              uid: currentuser.uid,
              displayName: currentuser.displayName,
              photoURL: currentuser.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (err) {}
  
      setUser(null);
      setUsername("")
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const getData = [];
            const querySnapshot = await getDocs(collection(db, "users"));
            
            querySnapshot.forEach((doc) => {
              getData.push({
                id: doc.id,
                ...doc.data(),
            });
        }
        );
        setChats(getData)
        console.log(chats);
            
            // console.log("User data:", chats);
            
            // Store the data in state or perform other operations
          } catch (error) {
            console.log("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []);

    
   const handleClick = (u)=>{
    dispatch({type:"CHANGE_USER",payload:u})
    console.log(u,"usersss");
   }

    return (
        <>
            <Grid
                item
                xs={12}
                sm={12}
                md={5}
                p={{ xs: "5px", md: "20px" }}
                display={{ xs: mobilechat ? 'none' : 'block', md: 'block' }}
                border="1px solid silver"
            >
                <Stack
                    direction={"column"}
                    rowGap={2}
                    fontSize={{
                        xs: "8px",
                        sm: "10px",
                        md: "12px",
                        lg: "14px",
                        xl: "14px",
                    }}
                >
                    {/* <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <h4>Messaging</h4>
            <Stack
              direction="row"
              justifyContent={"center"}
              columnGap={{ xs: "1px", md: "5px", lg: "10px" }}
              alignItems={"center"}
            >
              <MoreHorizIcon
                sx={{
                  cursor: "pointer",
                  padding: "4px",
                  fontSize: { xs: "10px", md: "15px", lg: "20px" },
                  borderRadius: "50%",
                  color: "#666666",
                  "&:hover": {
                    backgroundColor: "#F3F2EF",
                    color: "skyblue",
                  },
                }}
              />
              <AddCommentIcon
                sx={{
                  cursor: "pointer",
                  padding: "4px",
                  fontSize: { xs: "10px", md: "15px", lg: "20px" },
                  borderRadius: "50%",
                  color: "#666666",
                  "&:hover": {
                    backgroundColor: "#F3F2EF",
                    color: "skyblue",
                  },
                }}
              />
            </Stack>
          </Stack> */}
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        p={{ xs: "5px", md: "0px 10px" }}
                        sx={{
                            borderRadius: "10px",
                            backgroundColor: "#EEF3F8",
                            border: "2px solid white",
                            "&:hover": {
                                border: "2px solid black",
                            },
                        }}
                    >
                        <SearchIcon
                            sx={{
                                color: "#666666",
                                fontSize: { xs: "10px", md: "15px", lg: "20px" },
                            }}
                        />
                        <input
                            style={{
                                outline: "none",
                                border: "none",
                                width: "100%",
                                height: "100%",
                                fontSize: "inherit",
                                color: "#000",
                                textAlign: "center",
                                background: "transparent",
                                padding: "5px",
                              
                            }}
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            onKeyDown={handleKey}
                            type="text"
                  
                            placeholder="Search Messages"
                        />
                        <TuneIcon
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
                    </Stack>      {err && <span>User not found!</span>}
                    {user && (
     
        <Stack

        direction={"row"}
        alignItems="center"
        key={user.uid}
        p={{ xs: "5px", md: "10px" }}
        columnGap={{ xs: "1px", sm: "5px", md: "10px" }}
        sx={{
            cursor: "pointer",
            borderRadius: "10px",
            "&:hover": {
                backgroundColor: "white",
            },
        }}
      
        onClick={() => {
          handleSelect()
        }}
    >
        <Avatar
            sx={{
                width: { xs: "50px", sm: "50px" },
                height: { xs: "50px", sm: "50px" },
                cursor: "pointer",
            }}
            // src={user?.other_user?.user_pic}
            src={user?.photoURL? user?.photoURL:""}
        />
        <Stack direction={"column"} width="100%" >
            <Stack
                direction={"row"}
                alignItems="center"
                justifyContent="space-between"
            >
                {/* <h5>{user?.other_user?.username}</h5> */}
                <Typography component={'h5'}>{user?.displayName}</Typography>
                <Typography variant="p">
                    {/* {moment(user?.last_sms?.updated_at).format("hh:mm A")} */}
                    {moment().format("hh:mm A")}
                </Typography>
            </Stack>
            {/* <p>{user?.last_sms?.message.substring(0, 100)}</p> */}
            <Typography variant="p">{user?.message?.substring(0, 100)}</Typography>
        </Stack>
    </Stack>
      )}
                    <Divider />
                    <Stack
                        direction={"column"}
                        rowGap={1}
                        sx={{
                            maxHeight: "100vh",
                            overflow: "auto",
                        }}
                    >
  
{

chats?.map((user) => (

user.id !== currentuser.uid? 
<Stack

    direction={"row"}
    alignItems="center"
    key={user.uid}
    p={{ xs: "5px", md: "10px" }}
    columnGap={{ xs: "1px", sm: "5px", md: "10px" }}
    sx={{
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
            backgroundColor: "white",
        },
    }}
  
    onClick={() => {
        handleClick(user)
        handleSelect(user)
        setMobilechat(true);
    }}
>
    <Avatar
        sx={{
            width: { xs: "50px", sm: "50px" },
            height: { xs: "50px", sm: "50px" },
            cursor: "pointer",
        }}
        // src={user?.other_user?.user_pic}
        src={ user.photoURL}
    />
    <Stack direction={"column"} width="100%" >
        <Stack
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
        >
       
            <Typography component={'h5'}>{user.displayName}</Typography>
            <Typography variant="p">
          
                {moment().format("hh:mm A")}
            </Typography>
        </Stack>
     
        <Typography variant="p">{user?.text?.substring(0, 100)}</Typography>
    </Stack>
</Stack>
:""
))
      }
      





                    

                    </Stack>

                </Stack>
            </Grid>
        </>
    );
};

export default Sidebar;
