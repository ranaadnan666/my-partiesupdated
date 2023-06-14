import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Foot from "./Foot";
import BasicMenu from "./Menu";
export default function PostCard() {
  return (
    <Card sx={{
      borderRadius: "10px",
      border: "1px solid silver",

      
    }}>
      <Stack
        direction={"row"}
        width={"97%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to="/new/userprofile"
        >
          <Stack>
            <CardHeader
              avatar={
                <Avatar
                  alt="Profile"
                  src={
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  sx={{
                    width: 70,
                    height: 70,
                  }}
                />
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Muhammad Rizwan"
              subheader="September 14, 2016"
            />
          </Stack>
        </NavLink>
        <Stack p={1}>
          {/* <MoreVertIcon /> */}
          <BasicMenu/>
        </Stack>
      </Stack>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.
        </Typography>
        <Typography variant="body2" color="blue">
          #Sport #Cricket
        </Typography>
      </CardContent>
      <div
        style={{
          height: " 50vh",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          width="100%"
          height={"auto"}
          image="https://pbs.twimg.com/media/FfqVclfWYAAz2hz?format=jpg&name=small"
          alt="Paella dish"
        />
      </div>

      {/* <CardActions> */}
   
      <Stack mt={1}>
        <Divider  />
        <Foot />
      </Stack>
      {/* </CardActions> */}
    </Card>
  );
}