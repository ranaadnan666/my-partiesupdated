import React from 'react'
import { useState,useEffect } from 'react';
import Reuseable from './Reuseable';

const Update = () => {

    const [question,setQuestion]=useState([])

     /////////  Get alll admin question, that will show in table form /////////////



const getdata = async () => {
  const response = await fetch(
    "https://api.bondbeam.com/public_side/support_page_by_condition?questions_for=Updates",
  
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
const title="Updates"
  return (
    <div>
<Reuseable data={question} title={title}/>
    </div>
  )
}

export default Update