import React from 'react'
import { useState,useEffect } from 'react';
import Reuseable from './Reuseable';

const About = () => {

    const [question,setQuestion]=useState([])

    /////////  Get alll admin question, that will show in table form /////////////

const tokens="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMjI3ODQ1LCJpYXQiOjE2NzQ0NTE4NDUsImp0aSI6IjYzZmJhMzNmOGU1NDQ4YWNiNzk4ZGY5OGQ2MGQyY2FiIiwidXNlcl9pZCI6MTA4fQ.WiqDwnWGxRXWMaX86DnbyCkUij8LpjtE4INiGpEOpgo"


const getdata = async () => {
 const response = await fetch(
   "https://api.bondbeam.com/admin_side/faq/",
   {
     headers: {
       Authorization: tokens,
     },
   }
 ).then((resp) => {
   resp.json().then((result) => {
     setQuestion(result.data);
  


     
 });
 
})
};
console.log("question",question);

useEffect(() => {
 getdata();


}, []);
  return (
    <div>
    <Reuseable data={question}/>
    </div>
  )
}

export default About