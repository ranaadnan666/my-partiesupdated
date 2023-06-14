import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PanoramaIcon from "@mui/icons-material/Panorama";
import styled from "@emotion/styled";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState } from "react";
import { IconButton } from "@mui/material";

const CreatePost = () => {
  // const { user, setPost } = useState();
  const [openImage, setOpenImage] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  // console.log("image",image);
  const handleImage = () => {
    setOpenImage(!openImage);
    setOpenVideo(false);
  };
  const handleVideo = () => {
    setOpenVideo(!openVideo);
    setOpenImage(false);
  };
  // const handlePostChange = (event) => {
  //     setPostText(event.target.value);
  // };
  // const handleProfileImage = (e) => {
  //     const newProfile = e.target.files[0];
  //   };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    // handle post submission logic
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseImage = () => {
    setImage("");
  };
  const handleCloseVideo = () => {
    setVideo("");
  };
  //  ======================== post submit =======================

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme?.palette?.background?.paper}`,
    },
  }));

  return (
    <Box
      sx={{
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        rowGap={1}
        p={1}
        ml={1}
        mr={1}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          border: "1px solid silver",
          // width: "100%",
          height: "fit-content",
        }}
      >
        <Stack direction="row" alignItems="center" columnGap={2}>
          {/* <Link to={`/profile/${user?.data?.id}`}> */}
          {/* {user?.data?.show_online ? ( */}
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#44b700",
                color: "#44b700",
                borderRadius: "50%",
                boxShadow: `0 0 0 2px white`,
              },
            }}
          >
            <Avatar
              alt="roundedpic"
              src={
                "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              sx={{ width: 50, height: 50 }}
            />
          </StyledBadge>
          {/* ) : (
                            <Avatar
                                sx={{ width: "50px", height: "50px" }}
                                src={profilePic ? profilePic : DefaultProfile}
                                alt="roundedpic"
                            /> */}
          {/* )}  */}
          {/* </Link> */}
          <Box
            // onClick={() =>
            //     setPost((prev) => {
            //         return { ...prev, dialog: true };
            //     })
            // }
            onClick={handleClickOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              height: "40px",
              cursor: "pointer",
              width: "100%",
              borderRadius: "50px",
              padding: "0px 14px",
              border: "1px solid silver",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#f1f3f4",
              },
            }}
          >
            Start a post
          </Box>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
   
        >
          <Stack
            sx={{
              cursor: "pointer",
              padding: "5px",
              "&:hover": {
                backgroundColor: "#F0F0F0",
                borderRadius: "5px",
              },
            }}
            direction="row"
            columnGap={1}
            alignItems="center"
            onClick={handleClickOpen}
          >
            <PanoramaIcon fontSize="small" />
            <span >Photo</span>
          </Stack>
          <Stack
            sx={{
              cursor: "pointer",
              padding: "5px",
              "&:hover": {
                backgroundColor: "#F0F0F0",
                borderRadius: "5px",
              },
            }}
            direction="row"
            columnGap={1}
            alignItems="center"
            onClick={handleClickOpen}
          >
            <SmartDisplayIcon fontSize="small" />
            <span>Video</span>
          </Stack>
          {/* ===================== dialog for post creation ===================== */}
          {/* <PostDialog /> */}
        </Stack>
      </Stack>

      {/* Model Start */}
      <Dialog
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{marginTop:{xs:"20px",md:"40px",lg:"0"}}}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            position: "sticky",
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {"Create a post"}
          <ClearIcon
            onClick={handleClose}
            sx={{
              // background: "rgb(0 0 0 / 60%)",
              borderRadius: "50%",
              fontSize: "30px",
              color: "black",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
        </DialogTitle>
        <Divider />

        <DialogContent
          sx={{
            width: {
              md: 600,
              xs: 250,
              sm: 500,
            },
          }}
        >
          <DialogContentText id="alert-dialog-description">
            {/* {
              openImage || openVideo ? alert("okk"):( */}
                <TextareaAutosize
                aria-label="minimum height"
                minRows={7}
                placeholder="What do you want to talk about?"
                style={{ width: "97%", resize: "none",padding:"10px",outline:"none " }}
              />
              {/* )
            }
            */}
          </DialogContentText>
        </DialogContent>
        <Stack direction={"row"} justifyContent={"space-between"} p={1} columnGap={1}>
          <Stack direction={"row"} columnGap={1}>
            <Button variant="outlined" onClick={handleImage}>
              <PanoramaIcon fontSize="small" />
              Photo
            </Button>
            <Button variant="outlined" onClick={handleVideo}>
              <SmartDisplayIcon fontSize="small" />
              video
            </Button>
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ebebeb",
              color: "black",
              ":hover": {
                background: "blue",
                color: "white",
              },
            }}
          >
            {" "}
            Post
          </Button>
        </Stack>
        <Stack direction={"column"} p={2} rowGap={1}>
          {openImage ? (
            <Stack
              sx={{
                border: "1px solid gray",
                justifyContent: "center",
                alignItems: "center",
                height: "35vh",
                width: "100%",
              }}
            >
                  {image ? null:
                  (
                    <>
                      <IconButton
                    color="primary"
                    disabled={false}
                    sx={{
                      background: "rgba(0, 0, 0, 0.4)",
                      color: "black",
                      marginTop: "-25px",
                      width: "fit-content",
                      //   margin: "10px 10px 0px 0px",
                    }}
                    aria-label="edit"
                    component="label"
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                    <PanoramaIcon fontSize="small" />
                  </IconButton>
                    </>
                      )}
            
              {image ? (
                <>
         
        
            <Stack width={"100%"} direction={"row"} justifyContent={"flex-end"}  >
         <ClearIcon
                    onClick={handleCloseImage}
                    sx={{
                      // background: "rgb(0 0 0 / 60%)",
                      borderRadius: "50%",
                      fontSize: "30px",
                      color: "black",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
      
            </Stack>
             
                <Stack sx={{   width:{xs:"250px",sm:"450px",md:"600px"},  height: "28vh", }} mt={2}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={URL.createObjectURL(image)}
                    alt="image"
                  />
                </Stack>
              
                </>) : (
                <span>Select Image</span>
              )}

              {/* </Stack> */}
            </Stack>
          ) : null}
          {openVideo ? (
            <Stack
              sx={{
                border: "1px solid gray",
                justifyContent: "center",
                alignItems: "center",
                height: "35vh",
                width: "100%",
              }}
            >
              {
                video ? null:(
                  <>
                       <IconButton
                color="primary"
                disabled={false}
                sx={{
                  background: "rgba(0, 0, 0, 0.4)",
                  color: "black",
                  marginTop: "-25px",
                  width: "fit-content",
                  //   margin: "10px 10px 0px 0px",
                }}
                aria-label="edit"
                component="label"
              >
                <input
                  hidden
                  accept="video/*"
                  type="file"
                  onChange={(e) => {
                    setVideo(e.target.files[0]);
                  }}
                />
                <SmartDisplayIcon fontSize="small" />
              </IconButton>
                  </>
                )
              }
         
              {video ? (
                          <>
                                  <Stack width={"100%"} direction={"row"} justifyContent={"flex-end"}  >
         <ClearIcon
                    onClick={handleCloseVideo}
                    sx={{
                      // background: "rgb(0 0 0 / 60%)",
                      borderRadius: "50%",
                      fontSize: "30px",
                      color: "black",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
      
            </Stack>
             
                <Stack sx={{width:{xs:"250px",sm:"450px",md:"600px"}  ,  height: "28vh", }} >
                  <video
                    style={{ width: "100%", height: "100%" }}
                    src={URL.createObjectURL(video)}
                    alt="video"
                    controls
                  />
                </Stack>
              
                </>
              ) : (
                <span>Select Video</span>
              )}
            </Stack>
          ) : null}
        </Stack>
      </Dialog>

      {/* Model End */}
    </Box>
  );
};

export default CreatePost;
