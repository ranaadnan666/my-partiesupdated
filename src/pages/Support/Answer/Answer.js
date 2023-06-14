import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {   useNavigate } from "react-router-dom";
const Answer = () => {
  const navigate = useNavigate();
    const {id,txt} = useParams()
    console.log("id:",id, "txt:", txt);
    const [data,setData]=useState({})
    const getdata = async () => {
        const response = await fetch(
          `https://api.bondbeam.com/public_side/support_page_by_condition?questions_for=${txt}&id=${id}`,
        
        ).then((resp) => {
          resp.json().then((result) => {
            setData(result.data);   
        });
      })
    };
    
    console.log("dataaaaa",data);
      useEffect(() => {
        getdata();
       
      
      }, [id]);
    console.log("question id by params:", id);
  return (
    <>
    {/* width:"50%",padding:"4rem 1rem" */}
    <div style={{display:"flex",justifyContent:"center"}}>
     <Box sx={{width:{xs:"80%",sm:"70%",lg:"60%"},padding:{xs:"2rem 1rem",sm:"3rem 1rem"}}}>

        <Typography>{data?.question}?</Typography>
        <br></br>
{/* <label>Answer:</label> */}

<textarea style={{width:"100%",height:"77vh"}} value={data?.answer}/>
    </Box>   
 
    </div>
    <Box sx={{width:{xs:"27%",sm:"23%",md:"23%",lg:"25%",xl:"24%"},display:"flex",justifyContent:"flex-end"}}>
     <Button onClick={()=>{navigate("/")}}> Go Back</Button>
     </Box>
    </>
  )
}

export default Answer