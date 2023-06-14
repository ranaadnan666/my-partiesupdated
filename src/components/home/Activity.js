import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";

const Activity = () => {
  return (
    <div style={{ padding: "5px" }}>
         <h3>Latest Activities</h3>
      <List sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
     
        <ListItem>
          <Stack
            direction={{ md: "column", lg: "row" }}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Imram Riaz Khan" />
            </Stack>
            <Stack>
              {/* <NavLink style={{color:"black",textDecoration:"none"}} to="/new/home/anouncement">
      <Button variant="outlined">create</Button>
        </NavLink> */}
            </Stack>
          </Stack>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <Stack
            direction={{ md: "column", lg: "row" }}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Aftab" />
            </Stack>
            <Stack>
              {/* <NavLink style={{color:"black",textDecoration:"none"}} to="/new/home/anouncement">
      <Button variant="outlined">create</Button>
        </NavLink> */}
            </Stack>
          </Stack>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <Stack
            direction={{ md: "column", lg: "row" }}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Rizwan" />
            </Stack>
            <Stack>
              {/* <NavLink style={{color:"black",textDecoration:"none"}} to="/new/home/anouncement">
      <Button variant="outlined">create</Button>
        </NavLink> */}
            </Stack>
          </Stack>
        </ListItem>
      </List>
    </div>
  );
};

export default Activity;
