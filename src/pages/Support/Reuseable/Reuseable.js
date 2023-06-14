import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import {  Link, useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

export default function Reuseable(props) {
  // console.log("props",props.title)
  const navigate = useNavigate();

  return (
    <Box
      sx={{  padding: "4rem 0rem"}}
    >
   {/* ,backgroundColor:"lightgray",width:"100%",minHeight:"86vh"  */}
    <Typography sx={{textAlign:"center",fontSize:"1.3rem",fontWeight:"600"}}>Welcome </Typography>
     
    <Box sx={{display: "flex", justifyContent: "center",padding:"1rem"}}>
      <Box sx={{ border: "1px solid gray", width: { xs: "100%", sm: "70%" } }}>

{
    props.data?.map((item,i)=>{
        return(
            <>
                    <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.question}?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Link style={{
                textDecoration:'none',
                color:'black'
              }} to={`/answer/${item.id}/${props.title}`}>Click here</Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </>
        )
    })
}
    
      </Box>
      </Box>
      <Box sx={{width:{xs:"26%",md:"23%",lg:"21%",xl:"20%"},display:"flex",justifyContent:"flex-end"}}>
     <Button onClick={()=>{navigate("/new/helpcenter")}}> Go Back</Button>
     {/* <Tooltip title="Add" placement="top">
            <Button>top</Button>
          </Tooltip> */}
     </Box>
    </Box>
  );
}
