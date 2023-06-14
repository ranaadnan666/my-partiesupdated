import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import img from '../Mainpage/fab.png'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  useNavigate } from "react-router-dom";



// const theme = createTheme();

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    // <ThemeProvider theme={theme}>
      <Grid component="main" sx={{width:"100%",height:"100vh"}}>
        <Box>
          <img style={{width:"100%",height:"250px"}} src={img} alt="image"/>
        </Box>
        <CssBaseline />
      
       <Box sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"}}}>
          <Box sx={{padding:{xs:"1rem 2rem",md:"2rem 0.5rem"},width:{xs:"100%",md:"20%"},textAlign:{xs:"center",md:"left"}}}>
             <Typography sx={{fontSize:"2rem",fontWeight:"800"}}>Contact Us</Typography>
             <p >If you have general inquiries please fill in the form or call us directly.</p>
          </Box>
        <Box
          sx={{
  
            backgroundColor:"white",
            boxShadow:"0px 0px 0px 5px white",
            width:{xs:"100%",md:"50%"},
            padding:"2rem",
            justifyContent:"center",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
         
          <Typography sx={{textAlign:"center",fontSize:"1.3rem",fontWeight:"600"}}>Welcome </Typography>
         
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Email"
                  name="email"
                  autoComplete="family-name"
                  type="email"
                />
              </Grid>
          
              <Grid item xs={12}>
              <textarea style={{width:"100%",height:"150px", borderRadius:"5px",padding:"0.7rem"}} placeholder="write your message"/>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
           <Box sx={{display:"flex",justifyContent:"center"}}>
           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,width:"50%" }}
            >
             Submit
            </Button>
          
           </Box>
         
          </Box>
          <Box sx={{width:"50%",display:"flex",justifyContent:"center"}}>
     <Button onClick={()=>{navigate("/new/helpcenter")}}> Go Back</Button>
     </Box>
        </Box>
        </Box>
    
      </Grid>
    // </ThemeProvider>
  );
}