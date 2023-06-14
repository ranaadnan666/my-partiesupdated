import { onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/Auth";
import { GoogleAuthProvider } from "firebase/auth";


const AppContext = createContext();

export const AppProvider= ({ children }) => {
  const [currentuser, setCurrentuser] = useState(null);
  const [mobilechat, setMobilechat] = useState(false);


// signin with google
  const signinWithgogle=()=>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

// logout

const Logout=()=>{
  signOut(auth)
}

 

  useEffect(async()=>{
    const unSubscribe = onAuthStateChanged(auth,(user)=>{
    console.log("state change",user)
     setCurrentuser(user);
  })
  return unSubscribe
  },[])
  return (
    <AppContext.Provider
      value={{
        currentuser,
        mobilechat,
        setCurrentuser,
        signinWithgogle,
        Logout,
        setMobilechat
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);



    // for user chat one to one
// https://www.youtube.com/watch?v=k4mjF4sPITE
