import * as React from "react";
import Box from "@mui/material/Box";
import InboxIcon from "@mui/icons-material/Inbox";
import {
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Stack,

  Grid,
  IconButton,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";


// const drawerWidth = 240;
const drawerWidth = "100%";

const Settings = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { window1 } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const settingLinks = [
    {
      text: "General Settings",
      route: "/new/settings/general",
      icon: <SettingsIcon />,
    },
    {
      text: "Profile Settings",
      route: "/new/settings/profile",
      icon: <AccountCircleIcon />,
    },

    {
      text: "Profile Verification",
      route: "/new/settings/profile-verification",
      icon: <VerifiedIcon />,
    },
    {
      text: "Privacy",
      route: "/new/settings/privacy",
      icon: <VerifiedUserIcon />,
    },
    {
      text: "Change Password",
      route: "/new/settings/password",
      icon: <LockOpenIcon />,
    },
    {
      text: "Blocked Users",
      route: "/new/settings/block",
      icon: <BlockIcon />,
    },
    {
      text: "Delete Account",
      route: "/new/settings/delete",
      icon: <DeleteIcon color="error" />,
    },
  ];

  const drawer = (
    <div className="main">
      <Toolbar
        direction="row"
        alignitems="center"
        justifycontent="center"
        sx={{ backgroundColor: "#DFDFDF", padding: { xs: 0, sm: 1 } }}
      >
        <Box
          direction="row"
          sx={{
            width: "100%",
            textAlign: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: { xs: "5px", sm: "10px", md: "20px" },
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: { sm: "24px", lg: "30px" } }}
            variant="h4"
            // noWrap
            align="center"
            component="div"
            mt={2}
            mb={2}
          >
            Settings
          </Typography>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Avatar
              src={
                "https://images.pexels.com/photos/14207392/pexels-photo-14207392.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="Remy Sharp"
              sx={{ width: { sm: 100, lg: 130 }, height: { sm: 100, lg: 130 } }}
            ></Avatar>
          </Stack>
        </Box>
      </Toolbar>

      <List sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
        {settingLinks.map((link, index) => (
          <NavLink
            className="lik"
            style={{
              textDecoration: "none",
              color: link?.text === "Delete Account" ? "red" : "black",
            }}
            to={link.route}
            key={index}
            onClick={handleDrawerToggle}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  borderWidth: "1px 1px",
                  borderStyle: "solid",
                  borderColor: "#DFDFDF",
                }}
              >
                <ListItemIcon sx={{ minWidth: { sm: "25px", lg: "30px" } }}>
                  {link.icon !== "" ? link.icon : <InboxIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={link.text}
                  sx={{
                    "& .css-10hburv-MuiTypography-root": {
                      fontSize: { sm: "0.8rem", lg: "1rem" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window1 !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Grid container>
        <Box
          sx={{ width: "100%", backgroundColor: "white" }}
          borderRadius={{ xs: "16px", md: "16px" }}
        >
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              // container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              mt={2}
              sx={{
                display: { xs: "none", md : "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  position: "inherit",
                  margin: { sm: 1, md: 2 },
                  borderRadius: "16px",
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>

   
      <IconButton
            color="black"
            onClick={handleDrawerToggle}
            // aria-label="menu"
            // component="label"
            sx={{ float: "right",marginTop:{xs:"-15px",sm:"0"}, display: { xs: "block", md: "none" },backgroundColor:"#F3F2EF" }}
          >
            <MenuIcon />
          </IconButton>
      </Box>
       
      </Grid>
    </>
  );
};

export default Settings;
