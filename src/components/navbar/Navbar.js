

import  React, { useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from "@mui/icons-material/Search";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

import {



  Divider

} from "@mui/material";
import { useAppContext } from '../../context/AppContext';

export const settings = [
  {
      id: 1,

      icon:<AccountCircleIcon/>,
      title: "Profile",
      url: "/new/userprofile",
  },
  {
      id: 2,
      icon:<NotificationsActiveIcon/>,
      title: "Notifications",
      url: "/new/notification",
  },
  {
    id: 4,
    icon:<SettingsIcon/>,
    title: "Settings",
    url: "/new/settings/general",
  },
  {
    id: 4,
    icon:<HelpCenterIcon/>,
    title: "Help cebter",
    url: "/new/helpcenter",
  },
  // {
  //   id: 4,
  //   icon:<HelpCenterIcon/>,
  //   title: "Log Out",
  //   url: "/new/helpcenter",
  // },

]


const Navbar=()=> {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [inpvalue, setvalue] = useState("");
  const { currentuser, setCurrentuser,Logout } = useAppContext();

const navigate=useNavigate()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  //log out
  const handleLogout = async() => {
    try {
     await Logout()
     navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
   
  <AppBar position="static" sx={{backgroundColor:"white",position:"fixed",top:"0",zIndex:"9"}} >
      {/* <Container maxWidth="xl"> */}
        <Toolbar sx={{}}>
        <NavLink style={{display:"flex",textDecoration:"none",color:"black"}} to="/new/home/anouncement">
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex',color:"black" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {  md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
          
            </Menu>
          </Box>
       
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1 }}>

          <Stack
            direction="row"
            alignItems="center"
            // onClick={() => setOpen(true)}
            sx={{
              marginLeft:{xs:"-170px",md:"120px"},
              height: "36px",
              padding: "0 5px",
              borderRadius: "5px",
              boxShadow: "0px 1px 2px rgba(55, 65, 81, 0.08)",
              transition: "width 0.5s",
              position: "relative",
              width: {xs:"200px",sm:"300px",md:"400px"},
              "&:hover": {
                backgroundColor: "#F1F3F4",
                border: "2px solid black",
                // expand width on hover with transition
              },
              border: "1px solid silver",
            }}
            className="search-global-typeahead__input"
          >
        
            <Link to={inpvalue !== "" ? "/search" : null}>
              <SearchIcon
                fontSize="small"
                sx={{
                  cursor: "pointer",
                  color: "black",
                  "&:hover": {
                    color: "#0073b1",
                  },
                }}
                onClick={() => {
                  // handleGlobalSearch(inpvalue);
                  // getUserList();
              
                }}
              />
            </Link>
            <input
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                width: "90%",
                height: "100%",
                padding: "0 5px",
                fontSize: "12px",
                color: "#555B6E",
              }}
              // value={inpvalue}
              // onChange={(e) => getUserList(e.target.value)}
              type="text"
              placeholder="Search"
              // onClick={() => setBlur(true)}
            />
          </Stack>



          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600" />
              </IconButton>
            </Tooltip>
            <Menu
              // sx={{ mt: '45px' }}
              // id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                mt: "2.8rem",
                ".MuiMenu-paper": {
                  width: { xs: "60%", sm: "40%", md: "20%" },
                  borderRadius:"10px"

                },
              }}
              id="basic-menu"
         
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
      
      <Stack
                  direction="column"
                  mb={1}
                  p={1}
                  width="90%"
                  mx="auto"
                  boxShadow="0px 1px 10px silver"
                  borderRadius="10px"
                  
                  
                >
                  <Link
                    to={`/new/userprofile`}
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={handleCloseUserMenu}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      columnGap={2} 
                      
                      sx={{
                        padding: { xs: "0.5rem 0.5rem", md: "0.5rem 1rem"  },
                        width: { xs: "90%" },
                        borderRadius: "5px",
                        mx: "auto",
                        "&:hover": {
                          backgroundColor: "#F1F3F4",
                        },
                      }}
                    >
                      {/* {user?.data?.show_online ? (
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar alt="Remy Sharp" src={profilePic} />
                        </StyledBadge>
                      ) : ( */}
                        <Avatar alt="Remy Sharp" src=""/>
                      {/* )} */}
                      <p
                        style={{
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                       Rana &nbsp;Adnan
                      </p>
                    </Stack>
                    <Divider sx={{ margin: "10px 0px" }} />
                  </Link>
                </Stack>
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <NavLink style={{textDecoration:"none",color:"black",width:"100%"}} to={setting.url}>
                  <Stack        direction="row"
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
                  }} textAlign="center">
                    {setting.icon}
                    {setting.title}
                    </Stack>
                 
                  </NavLink>
                </MenuItem>
              ))}
                {
                  currentuser ?
                  <Stack        direction="row"
                  alignItems="center"
                  columnGap={2}
                 onClick={handleLogout}
                  sx={{
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    width: "80%",
                    fontWeight:"550",
                    borderRadius: "5px",
                    mx: "auto",
                    "&:hover": {
                      backgroundColor: "#F1F3F4",
                    },
                  }} textAlign="center">
                    <span><LogoutIcon/></span>
                   LogOut
                    </Stack>:""
                }
            </Menu>
          </Box>
        </Toolbar>
      {/* </Container> */}
    </AppBar>
 
  
  );
}
export default Navbar;

