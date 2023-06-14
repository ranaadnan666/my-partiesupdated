import {
  Avatar,
  Badge,
  Box,
  Grid,
  Hidden,
  MenuItem,
  Stack,
  Switch,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import styled from "@emotion/styled";
import img from "../../../src/images/f1.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SettingsIcon from "@mui/icons-material/Settings";

const MenuBar = () => {
  const settings = [
    {
      id: 1,

      icon: <AnnouncementIcon />,
      title: "Latest Announcement",
      url: "/new/home/anouncement",
    },
    {
      id: 2,
      icon: <GroupWorkIcon />,

      title: "My Parties",
      url: "/new/home/party",
    },
    {
      id: 3,
      icon: <BookmarkBorderIcon />,

      title: "Trending Announce",
      url: "/new/home/anouncement",
    },
    {
      id: 3,
      icon: <GroupWorkIcon />,

      title: "Messages",
      url: "/new/home/inbox",
    },
    {
      id: 4,
      icon: <SettingsIcon />,
      title: "Settings",
      url: "/new/settings/general",
    },
  ];
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme?.palette?.background?.paper}`,
    },
  }));
  return (
    <Hidden mdDown>
      <Grid item p={1}>
        <Stack
          width={{ md: "260px", lg: "340px" }}
          direction="column"
          textAlign="center"
          borderRadius="10px"
          overflow="hidden"
          position={"fixed"}
          sx={{
            backgroundColor: "white",
            border: "1px solid silver",
            zIndex: "999",
            marginTop: { md: "-10px", lg: "25px" },
          }}
        >
          <Box
            sx={{
              height: "100px",
              backgroundImage: `url(${"https://images.pexels.com/photos/1449455/pexels-photo-1449455.jpeg?auto=compress&cs=tinysrgb&w=1600"})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              textAlign: "right",
              padding: "10px",
            }}
          ></Box>
          <Link to="/new/userprofile" style={{ marginTop: "-30px" }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#44b700",
                  color: "#44b700",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  boxShadow: `0 0 0 2px white`,
                },
              }}
              variant="dot"
            >
              <Avatar
                style={{
                  margin: "-2px auto",
                  borderRadius: "3rem",
                  width: "70px",
                  height: "70px",
                }}
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="roundedpic"
              />
            </StyledBadge>
          </Link>

          <Stack
            marginTop="30px"
            direction="row"
            alignItems="center"
            justifyContent="center"
            columnGap={"2px"}
          >
            <Link
              to="/new/userprofile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h4 style={{ textTransform: "capitalize" }}>Rana adnan</h4>
            </Link>

            <VerifiedIcon
              color="info"
              sx={{
                fontSize: "14px",
              }}
            />
          </Stack>
          <span>@adnan184</span>

          <Box
            sx={{
              height: "2px",
              backgroundColor: "silver",
              margin: "15px 0px",
            }}
          ></Box>
          <Stack direction="column" marginLeft="15px" pb={1}>
            {settings.map((setting) => (
              <MenuItem key={setting.id}>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                  to={setting.url}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    columnGap={2}
                    sx={{
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                      width: "90%",
                      borderRadius: "5px",
                      mx: "auto",
                      "&:hover": {
                        backgroundColor: "#F1F3F4",
                      },
                    }}
                    textAlign="center"
                  >
                    {setting.icon}
                    {setting.title}
                  </Stack>
                </NavLink>
              </MenuItem>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Hidden>
  );
};

export default MenuBar;
