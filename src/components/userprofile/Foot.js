import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import React ,{ useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from "@mui/icons-material/Reply";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ChatBubbleOutlineOutlined } from '@mui/icons-material';
const Foot = () => {
    const [displayComments, setDisplayComments] = useState(false);
    const [liked, setLiked] = useState(false);
    const [replyliked, setReplyLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };
    const handlereplyLike = () => {
        setReplyLiked(!replyliked);
    };
    const handleshow = () => {
        setDisplayComments(!displayComments)
    }
    const [replyComments, setReplyComments] = useState(false);
    const handleshowreply = () => {
        setReplyComments(!replyComments)
    }
    return (
        <>

            <Stack
                width={"100%"}
                direction="row"
                justifyContent={"space-around"}
               
            >
                {/* =================Like====================== */}
                <Stack width={{md:"30%",xs:'40%'}}  sx={{cursor:'pointer', ":hover": { backgroundColor: '#EBEAEA' } }} justifyContent="center" >
                    <Stack direction={"row"} alignItems="center" justifyContent={"center"} p={2}  onClick={handleLike}>
                        <IconButton >
                            {liked ? < ThumbUpIcon sx={{ color: '#2ba1f1' }} /> : <ThumbUpOffAltIcon />}
                        </IconButton>
                        
                        {liked ? <span style={{ color: '#2ba1f1' }}>Like</span> : <span >Like</span>}
                    </Stack>
                  
                </Stack>
                {/* =================Comment====================== */}
                <Stack width={{ md: "30%", xs: '40%' }} justifyContent="center" sx={{ cursor: 'pointer', ":hover": { backgroundColor: '#EBEAEA' }  }}
                    onClick={() => {
                    handleshow();
                }}
                >
                    <Stack direction={"row"} alignItems="center" justifyContent={"center"} p={2} columnGap={1}>
                       
                        <ChatBubbleOutlineOutlined />
                        <Box>Comment</Box>
                    </Stack>
             
                </Stack>

            </Stack>
        

            {/* =========================handle comment =====================*/}
            {displayComments ?
                <Stack direction={"column"}>
                <Stack
                    p={2}
                    direction={{ xs: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    columnGap={2}
                    rowGap={2}
                    borderTop="1px solid gray"
                >
                
                  
                    <Avatar
                        sx={{ width: "40px", height: "40px" }}
                        src={"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                        alt="roundedpic"
                    />
                    <Box
                        sx={{
                            backgroundColor: "#F1F1F5",
                            width: "100%",
                            borderRadius: "5px",
                            border: "1px solid silver",
                            "&:hover": {
                                backgroundColor: "#F3F2EF",
                                color: "black",
                                border: "2px solid black",
                            },
                            padding: "0px 10px",
                        }}
                    >
                        <form
                            style={{ width: "100%" }}
                        >
                            <input
                                style={{
                                    width: "100%",
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "transparent",
                                    height: "30px",
                                }}
                                type="text"
                                placeholder="Write a comment"
                                name="comment"
                              
                            />
                        </form>
                    </Box>
                    <button
                        style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                        }}
                        type="submit"
                    
                    >
                        <SendIcon
                            sx={{
                                color: "#7A7A7A",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "#3F51B5",
                                },
                            }}
                        />
                    </button>
 
                    </Stack>
                    {/* =============== comment show =================== */}
                    <Stack
                        width={"95%"}
                        mx="auto"
                        p={2}
                        direction={{ xs: "column" }}
                
                    >

                        <Stack direction={"row" } alignItems="center" gap={1} >
                        <Avatar
                            sx={{ width: "40px", height: "40px" }}
                            src={"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                            alt="roundedpic"
                            />
                            <Stack
                                direction={"column"}
                                width={"100%"}
                                backgroundColor='#EBEAEA'
                                paddingLeft={"10px"}
                                paddingTop={"5px"}
                                paddingBottom={"5px"}
                                borderRadius="10px"
                            >
                                <Typography sx={{
                                    fontWeight:'600'
                                }} >
                                    Rizwan
                                </Typography>
                                <Typography variant='p' fontSize={"12px"}>
                                    Fantastic
                                </Typography>
                            </Stack>
                            
                        </Stack>
                        <Stack direction={"row"} alignItems="center" gap={2} width="90%" mx={"auto"}>
                            <Typography>
                                1h
                            </Typography>
                            <IconButton onClick={handlereplyLike}
                            >
                                {replyliked ? < ThumbUpIcon sx={{ color: '#2ba1f1' }} /> : <ThumbUpOffAltIcon />}
                            
                            </IconButton>
                            <IconButton
                            >
                                <ReplyIcon fontSize="small"
                                    onClick={() => {
                                    handleshowreply();
                                    }}
                                />
                            </IconButton>

                        </Stack>

                        {/* reply comment */}
                        {replyComments ?
                        <Stack
                       
                            direction={{ xs: "row" }}
                            justifyContent="space-between"
                            alignItems="center"
                            columnGap={2}
                            rowGap={2}
                           
                        >


                            <Avatar
                                sx={{ width: "40px", height: "40px" }}
                                src={"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                                alt="roundedpic"
                            />
                            <Box
                                sx={{
                                    backgroundColor: "#F1F1F5",
                                    width: "100%",
                                    borderRadius: "5px",
                                    border: "1px solid silver",
                                    "&:hover": {
                                        backgroundColor: "#F3F2EF",
                                        color: "black",
                                        border: "2px solid black",
                                    },
                                    padding: "0px 10px",
                                }}
                            >
                                <form
                                    style={{ width: "100%" }}
                                >
                                    <input
                                        style={{
                                            width: "100%",
                                            border: "none",
                                            outline: "none",
                                            backgroundColor: "transparent",
                                            height: "30px",
                                        }}
                                        type="text"
                                        placeholder="Write a reply"
                                        name="comment"

                                    />
                                </form>
                            </Box>
                            <button
                                style={{
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "transparent",
                                }}
                                type="submit"

                            >
                                <SendIcon
                                    sx={{
                                        color: "#7A7A7A",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "#3F51B5",
                                        },
                                    }}
                                />
                            </button>

                        </Stack>
                            : null}


                    </Stack>
                    </Stack>
             
                 : null}
          
        </>
    )
}

export default Foot


