import React, { useEffect } from 'react';
import SetRoute from './route/SetRoute';
import { messaging } from '../src/firebase/Auth';
import {  getToken } from "firebase/messaging";
import { AppProvider } from './context/AppContext';
import { ChatContextProvider } from './context/ChatContext';

const App = () => {
  const requistPermission= async()=>{
  const Permission= await Notification.requestPermission()
  if (Permission ==="granted"){
    //generate token
    await  getToken(messaging, { vapidKey: 'BGZtLJVlyxsGDbASqEmV6dAEqhbbHVEo5m4_mIFlr5trQhmZlVD4HZc-YOUmo1Rb36BXtkCeVg4rtw9bkNl7PWg' })
  .then((currentToken) => {
    //send this token to the server
    localStorage.setItem("token", JSON.stringify(currentToken));
// console.log("currentToken",currentToken);
  })
  }
  else if (Permission ==="denied"){
    alert("You denied for the notification")
  }
  }
useEffect(() => {
  requistPermission()
   },[]
)
  return (
    <AppProvider>
      <ChatContextProvider>
      <SetRoute />
      </ChatContextProvider>
    </AppProvider>
  );
};

export default App;
