import React from 'react'
import Reuseable from './Reuseable'
import {  useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
const Getstarted = () => {
    const navigate = useNavigate();
    const [question,setQuestion]=useState([])
    
  /////////  Get alll admin question, that will show in table form /////////////

const tokens="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMjI3ODQ1LCJpYXQiOjE2NzQ0NTE4NDUsImp0aSI6IjYzZmJhMzNmOGU1NDQ4YWNiNzk4ZGY5OGQ2MGQyY2FiIiwidXNlcl9pZCI6MTA4fQ.WiqDwnWGxRXWMaX86DnbyCkUij8LpjtE4INiGpEOpgo"


  const getdata = async () => {
    const response = await fetch(
      "https://api.bondbeam.com/public_side/support_page_by_condition?questions_for=GettingStarted",
    
    ).then((resp) => {
      resp.json().then((result) => {
        setQuestion(result.results);
     


        
    });
    
})
};
// console.log("question",question);

useEffect(() => {
    getdata();
   

  }, []);
  let title ="GettingStarted"
  return (
    <div>
      
        <Reuseable data={question} title={title}/>
    </div>
  )
}

export default Getstarted