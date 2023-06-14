import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TabsUser from "./TabsUser";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
function UserProfile() {
  const [image,setImage]=useState("")
  const handleProfileImage = (e) => {
    setImage(e.target.files[0]);

  };
  return (
    <>
      <Box
        width={{ xs: "100%", md: "60%" }}
        mx={"auto"}
        justifyContent="center"
        p={1}
      >
        <Card>
          <Stack>
            {/* <CardMedia
                            component="img"
                            height="250"
                            image={"https://images.pexels.com/photos/1449455/pexels-photo-1449455.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                            sx={{ background: "gray" }}
                            alt="cover pic"
                        />
                         */}
            <Box
              sx={{
                backgroundImage: `url(${"https://images.pexels.com/photos/1449455/pexels-photo-1449455.jpeg?auto=compress&cs=tinysrgb&w=1600"})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                borderRadius: "10px",
                border: "1px solid silver",
                overflow: "hidden",
              }}
            >
              <Stack
                direction="column"
                justifyContent="space-between"
                height="100%"
              >
                <Stack direction="row" justifyContent="flex-end">
                  <IconButton
                    color="primary"
                    disabled={false}
                    sx={{
                      background: "rgba(0, 0, 0, 0.4)",
                      color: "white",
                      width: "fit-content",
                      margin: "10px 10px 0px 0px",
                    }}
                    aria-label="edit"
                    component="label"
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      // onChange={handleProfileImage}
                    />
                    <EditIcon />
                  </IconButton>
                </Stack>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, rgba(122, 122, 135, 0.0001) 0%, #171725 131.54%)",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: "10px",
                  }}
                ></Box>
              </Stack>
            </Box>
            <Stack direction={"row"} justifyContent="space-between">
              <Stack>
                <Avatar
                  alt="Profile"
                  src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                  sx={{
                    width: 150,
                    height: 150,
                    marginTop: "-80px",
                    marginLeft: "5px",
                    justifyItems: "center",
                    border: "5px solid white",
                  }}
                />
                <Stack direction="row" justifyContent="flex-end">
                  <IconButton
                    color="primary"
                    disabled={false}
                    sx={{
                      background: "rgba(0, 0, 0, 0.4)",
                      color: "black",
                      marginTop:"-25px",
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
                      onChange={handleProfileImage}
                    />
                    <EditIcon />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction={"row"} alignItems="center" spacing={1} p={1}>
                <MoreHorizIcon
                  sx={{ borderRadius: "50px", border: "1px solid gray" }}
                />
                <Button variant="contained">Follow</Button>
              </Stack>
            </Stack>
            <CardContent>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                Muhammad Rizwan
                <VerifiedSharpIcon sx={{ color: "#2ba1f1" }} />
              </Typography>
              <Typography>@iMRizwanPak</Typography>
              <p>Pakistan | 📨 Mentor @TalhaAisham at @SayaCorps</p>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  height: "40px",
                  overflow: "hidden",
                }}
              >
                <b>Software Developer</b>
              </Typography>
            </CardContent>
          </Stack>
        </Card>

        <Box>
          <TabsUser />
        </Box>
      </Box>
    </>
  );
}

export default UserProfile;
