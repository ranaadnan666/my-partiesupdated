import  React,{useState} from 'react';
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
import { NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth ,db,storage} from '../../firebase/Auth';
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { doc, setDoc } from 'firebase/firestore';
const theme = createTheme();

const SignUp1=()=> {
const [value,setValues]=useState({
  fullname:"",
  username:"",
  email:"",
  password:"",
  party:"",

})
const [picture,setPicture]=useState("")

const navigate = useNavigate();

const handleProfilePicChange = (e) => {
    setPicture(e.target.files[0]);
  // setPicture(e.target.file)
  console.log("Profile",picture)
  }
// ==================create emailandpassword with firebase function======================
// const createEmailAndPassword = () => {
//   const displayName = value.fullname
//   const email = value.email
//   const password = value.password
//   const file = picture
  
//   if (!displayName || !password || !value.username || !email || !value.party || !file ) {
//     return alert("Please enter all required fields");
//   } else {
//     return createUserWithEmailAndPassword(auth, email, password).then(async(resp) => {   
// const storageRef = ref(storage,displayName );
// const uploadTask = uploadBytesResumable(storageRef, file);
// uploadTask.on(
//   (error) => {
//   }, 
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then (async( downloadURL) => {
//       const user = resp.user;
//       await updateProfile(user,{
//         displayName,
//         photoURL:downloadURL,
//       });
//       await setDoc(doc(db,"users",resp.user.id),{
//         uid:resp.user.id,
//         displayName,
//         email,
//         photoURL:downloadURL
//       // console.log('User created:', user);
//       // console.log('File available at', downloadURL);
//     }).then (async( reg) => {
//       console.log('User reg:', reg);

//     });
//   }
// )
    


//     })
//         setValues({
//           fullname:"",
//           username:"",
//           email:"",
//           password:"",
//           party:"",
        
//         })
//         navigate("/signin");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error('Error creating user:', errorCode, errorMessage);
//         alert(errorMessage);
//       });
  
//   }
// };
const createEmailAndPassword = () => {
  const displayName = value.fullname;
  const email = value.email;
  const password = value.password;
  const file = picture;

  if (!displayName || !password || !value.username || !email || !value.party || !file) {
    return alert("Please enter all required fields");
  } else {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (resp) => {
        const storageRef = ref(storage, displayName);
        // const uploadTask = uploadBytesResumable(storageRef, file);
        // uploadTask.on(
        //   "error",
        //   () => {
        //     // Handle upload error
        //   },
        //   () => {
        //     getDownloadURL(uploadTask.snapshot.ref)
        //       .then(async (downloadURL) => {
        //         const user = resp.user;
        //         await updateProfile(user, {
        //           displayName,
        //           photoURL: downloadURL,
        //         });

        //         const userDocRef = doc(db, "users", user.uid);
        //         await setDoc(userDocRef, {
        //           uid: user.uid,
        //           displayName,
        //           email,
        //           photoURL: downloadURL,
        //         });

              
        //       })
        //       .catch((error) => {
        //         // Handle download URL error
        //       });
        //   }
        // );
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(resp.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", resp.user.uid), {
                uid: resp.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              // await setDoc(doc(db, "userChats", resp.user.uid), {});
              await setDoc(doc(db, "userChats", resp.user.uid), {});
              navigate("/signin");
            } catch (err) {
              console.log(err);
            
            }
          });
        });
      } 
      )
      .then(() => {
        setValues({
          fullname: "",
          username: "",
          email: "",
          password: "",
          party: "",
        });
        navigate("/signin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
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


 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main"  sx={{backgroundColor:"#F3F2EF"}}>
        <CssBaseline />
        <Box
          sx={{
       
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height:"100vh",
            justifyContent:"center",

          }}
        >
            <Box sx={{backgroundColor:"white",p:{xs:2,md:4},borderRadius:"20px"}} width={{xs:"100%",md:"60%"}}>
               <Stack sx={{  alignItems:"center"}}>
          <Avatar sx={{ m: 1, bgcolor: '#1565C0' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          </Stack>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="full name"
              name="fullname"
              autoComplete="name"
              autoFocus
              value={value.fullname}
              onChange={handleChange}
            />
               <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="User name"
              name="username"
              autoComplete="name"
              autoFocus
              value={value.username}
              onChange={handleChange}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={value.email}
              onChange={handleChange}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={value.password}
              onChange={handleChange}
              

            />
          
          <div>
      <FormControl sx={{  minWidth: "100%" }} >
        <InputLabel id="demo-simple-select-helper-label">Please Select party</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value.party}
          name='party'
          label="Please Select number"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
     
      </FormControl>

    </div>

    <Stack
            direction={{ xs: "column", md: "row" }}
            columnGap={1}
            alignItems={"center"}
            rowGap={1}
          >
          
             <AssignmentIcon
                            sx={{
                              
                                borderRadius: "50%",
                               color:"#1565C0"
                            }}
                            fontSize={"large"}
                        />
            <h4>Profile Picture</h4>
            <label htmlFor="profile_pic">
              <input
                onChange={handleProfilePicChange}
                style={{ display: "none" }}
                name="profile_pic"
                id="profile_pic"
                type="file"
              />
              <p
                style={{
                  color: "#3F51B5",
                  cursor: "pointer",
                }}
              >
                Browse file
              </p>
            </label>
          </Stack>
    {/* <NavLink to="/new/home/anouncement" style={{textDecoration:"none",color:"white"}}> */}
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          {/* </NavLink> */}
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
                <NavLink style={{textDecoration:"none",color:"black"}} to="/signin" href="#" variant="body2">
                  {"already have an account? Sign In"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp1