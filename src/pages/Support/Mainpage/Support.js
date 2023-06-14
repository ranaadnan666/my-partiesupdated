import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import data from "./Data";
import img from "./fab.png";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Link, useNavigate } from "react-router-dom";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const tokens=""
export default function Support() {
  const navigate = useNavigate();

  const [querry, setQuerry] = useState([]);
  const [answer, setAnswer] = useState({});
  const [search, setSearch] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAllquery = async () => {
    const response = await fetch(
      "https://api.bondbeam.com/public_side/list_support_questions/"
      // {
      //   headers: {
      //     Authorization: tokens,
      //   },
      // }
    );
    const data = await response.json();
    setQuerry(data.data);
  };

  const postQuestion = async (id, val) => {
    setSearch(val);
    let inquiry_id = id;

    const response = await fetch(
      `https://api.bondbeam.com/public_side/to_get_support_ans?question_id=${id}`
      // {
      //   headers: {
      //     Authorization: tokens,
      //   },
      // }
    );
    const data = await response.json();
    setAnswer(data.data);
    // console.log("list",answer);
  };

  const supportQuestiom = async (e) => {
    e.preventDefault();

    alert(search);
    const response = await fetch(
      `https://api.bondbeam.com/public_side/to_get_support_ans?support_question=${search}`
      // {
      //   headers: {
      //     Authorization: tokens,
      //   },
      // }
    );
    const data = await response.json();
    setQuerry(data.data);
    console.log("stringg", answer);
  };

  return (
    <>
      <Box id="banner-image-head">
        <Box sx={{ height: { xs: "200px", md: "300px" } }}>
          <img
            style={{ height: "300px", width: "100%", opacity: "0.3" }}
            src={img}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            position: "relative",
            top: { xs: "-150px", md: "-200px" },
            padding: "1rem",
          }}
        >
          <form
            onSubmit={supportQuestiom}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Stack
              sx={{ width: { xs: "90%", sm: "50%", md: "40%", lg: "30%" } }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.7rem", lg: "1.7rem" },
                  fontWeight: { xs: "600", md: "750", lg: "750" },
                }}
              >
                Hi, How can we help you
              </Typography>
              <Stack>
                <SearchIcon
                  sx={{
                    position: "relative",
                    top: "35px",
                    left: "5px",
                    color: "white",
                  }}
                />
                <input
                  value={search}
                  style={{
                    borderRadius: "10px",
                    padding: "13px 30px",
                    color: "white",
                    outline: "none",
                    border: "1px solid white",
                    backgroundColor: "rgb(32, 31, 31)",
                  }}
                  type="text"
                  placeholder="Enter your search terms..."
                  onChange={(e) => {
                    getAllquery();
                    setSearch(e.target.value);
                  }}
                />
                {/* <select > */}

               <Box sx={{height:"50px"}}>
               {querry?.map((item, i) => {
                  return (
                    <Stack key={i} >
                      <Typography
                        onClick={() => {
                          postQuestion(item.id, item.question);
                          handleClickOpen();
                        }}
                        sx={{
                          "&:hover": { backgroundColor: "lightgray" },
                          backgroundColor: "white",
                          color: "black",
                          textAlign: "left",
                          fontSize: "1rem",
                          fontWeight: "500",
                          padding: "0.5rem 1rem",
                          borderBottom: "1px solid gray",
                          cursor: "pointer",
                          borderRadius: "5px ",
                          zIndex:"999"
                        }}
                      >
                        {item.question}?
                      </Typography>
                    </Stack>
                  );
                })}
               </Box>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding:"1rem",
          backgroundColor:"lightgray",
          justifyContent: "center",
          "& > :not(style)": {
            m: 4,
            // width: 450,
          },
        }}
      >
        {data.map((item, id) => {
          return (
            <Link to={item.link} style={{ textDecoration: "none" }}>
              <Box
                key={id}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "0px 0px 0px 3px lightgray",
                  },
                  transition: "all ease 0.3s",
                  width: {
                    xs: "350px",
                    sm: "280px",
                    md: "270px",
                    lg: "350px",
                    xl: "450px",
                  },
                  border: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Box sx={{ textAlign: "center", height: "150px" }}>
                  <Box sx={{ marginTop:{xs:"10px",md:"15px"}}}>
                    <IconButton>{item.icon}</IconButton>

                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "800" }}>
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    >
                      {item.well}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>

      <Grid
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        container
        spacing={2}
      >
        <Grid
          sx={{
            width: { xs: "100%", sm: "50%" },
            padding: { xs: "1rem 4rem ", sm: "0" },
          }}
        >
          <Box
            sx={{
              padding: {
                sm: "2rem 5rem",
                md: "2rem 7rem",
                lg: "2rem 9rem",
                xl: "2rem 12rem",
              },
              width: { sm: "75%", md: "75%", lg: "60%" },
            }}
          >
            <h2>Frequently Asked Question</h2>
            <p>Change your email address</p>
            <p>Reset your password</p>
            <p>Apply for jobs </p>
            <p>Profile visibilty</p>
            <p>close your account </p>
          </Box>
        </Grid>
        <Grid
          sx={{
            width: { xs: "100%", sm: "50%" },
            padding: { xs: "1rem 4rem ", sm: "0" },
          }}
        >
          <Box
            sx={{
              padding: {
                sm: "2rem 3rem",
                md: "2rem 7rem",
                lg: "2rem 8rem",
                xl: "2rem 8rem",
              },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box>
              <h2>Other ways we can help</h2>
              <Box
                sx={{
                  border: "1px solid gray",
                  padding: "1rem",
                  width: { sm: "75%", md: "80%", lg: "60%" },
                }}
              >
                <p>
                  Please sign in so we can provide the best support possibile
                </p>
                <Button
                  sx={{ width: "100%", borderRadius: "10px" }}
                  variant="contained"
                >
                  Sign in
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{answer?.question}?</DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                width: { xs: "240px", sm: "400px", md: "500px" },
                height: "300px",
                padding:{xs:"0.1rem",sm:"0.7rem"},
                display: "flex",
                justifyContent: "center",
              }}
              id="alert-dialog-description"
            >
              <textarea
                style={{
                  padding: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  width: "100%",
                  height: "250px",
                }}
              >
                {answer?.answer}
              </textarea>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
