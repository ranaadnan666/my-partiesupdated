import React,{useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/Auth';
import { useAppContext } from '../../context/AppContext';



const theme = createTheme();

const SignIn=()=> {
  const { signinWithgogle } = useAppContext();
  const { currentuser, setCurrentuser } = useAppContext();
  
  const [value,setValues]=useState({

    email:"",
    password:"",
 
  
  })
  
  
  const navigate = useNavigate();
  
  // ==================create emailandpassword with firebase function======================
  const createEmailAndPassword = () => {
    console.log(value);
    if ( !value.password || !value.email ) {
      return alert("Please enter all required fields");
    } else {
      return signInWithEmailAndPassword(auth, value.email, value.password)
        .then(async(resp) => {
          // console.log('User created:', resp);
          const user = resp.user;
        
          console.log('User created:', user);
          setValues({
   
            email:"",
            password:"",
    
          
          })
          navigate("/new/home/anouncement");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error creating user:', errorCode, errorMessage);
          alert(errorMessage);
        });
    
    }
  };
  
  // ...
  // ==================handlesubmit function======================
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createEmailAndPassword();
  };
  
  // ==================handlechange function======================
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


  // ==================sinin with googlefunction======================

   const handleLogin = async()=>{
    try {
      await  signinWithgogle()
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
  if (currentuser){
    navigate("/new/home/anouncement");
  }

  },[currentuser])
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" width={{xs:"100%",md:"60%"}} sx={{backgroundColor:"#F3F2EF"}}>
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height:"100vh",
            justifyContent:"center",
         
          }}
        >
      <Box sx={{backgroundColor:"white",p:{xs:2,md:4},borderRadius:"20px"}}>
     <Stack sx={{  alignItems:"center",width:"100%"}}>
     <Avatar sx={{ m: 1, bgcolor: '#1565C0' }}>
     <LockOutlinedIcon />
     </Avatar>
    <Typography component="h1" variant="h5">
    Sign in
  </Typography>
     </Stack>
       
          <Box width={"100%"} component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={value.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={value.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
           
          {/* <NavLink style={{textDecoration:"none",color:"white"}}> */}
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          
          {/* </NavLink> */}
            
            
              <Stack direction={{xs:"column"}} justifyContent={"center"} alignItems={"center"} columnGap={8}>
              <Button
              onClick={handleLogin}
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 ,width:"fit-content" }}
            >
              Sign In with google
            </Button>
                <NavLink  style={{textDecoration:"none",color:"black"}} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Stack>
   
          </Box>
      </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

export default SignIn