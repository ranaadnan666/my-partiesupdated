import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../pages/home/Container";
import Home from "../pages/home/Home";
import Main from "../pages/main/Main";
import Block from "../pages/settings/Block";
import Delete from "../pages/settings/Delete";
import GeneralSetting from "../pages/settings/GeneralSetting";
import Password from "../pages/settings/Password";
import PrivacySetting from "../pages/settings/PrivacySetting";
import ProfileVerification from "../pages/settings/ProfileVerification";
import ProfileSetting from "../pages/settings/ProfileSetting";
import SettingsRout from "../pages/settings/SettingsRout";
import Login from "../pages/signin/Login";
import SignUp from "../pages/signup/SignUp";
import User from "../pages/userprofile/User";
import MainNotification from "../pages/notification/MainNotification";
import ChatHome from "../pages/chat/Chat";
import MainAnouncement from "../pages/post/MainAnouncement";
import Support from "../pages/Support/Mainpage/Support";
import Getstarted from "../pages/Support/Reuseable/Getstarted";
import Contact from "../pages/Support/Reuseable/Contact";
import Learn from "../pages/Support/Reuseable/Learn";
import Community from "../pages/Support/Reuseable/Community";
import Update from "../pages/Support/Reuseable/Update";
import About from "../pages/Support/Reuseable/About";
import Answer from "../pages/Support/Answer/Answer";
import MainInbox from "../pages/inbox/MainInbox";

const SetRoute = () => {
  return (
    <div style={{backgroundColor:"#F3F2EF",minHeight:"92vh"}}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new" element={<Container />}>
          <Route path="helpcenter" element={<Support />} />
          <Route path="answer" element={<Getstarted />} />
          <Route path="contact" element={<Contact />} />
          <Route path="learn" element={<Learn />} />
          <Route path="community" element={<Community />} />
          <Route path="update" element={<Update />} />
          <Route path="about" element={<About />} />
          <Route path="answer/:id/:txt" element={<Answer />} />
          <Route path="home/" element={<Home />}>
            <Route path="anouncement" element={<MainAnouncement />} />
            <Route path="party" element={<ChatHome />} />
            <Route path="inbox" element={<MainInbox />} />
          </Route>
          <Route path="userprofile" element={<User />} />
          <Route path="notification" element={<MainNotification />} />
          <Route path="settings/" element={<SettingsRout />}>
            <Route path="general" element={<GeneralSetting />} />
            <Route
              path="profile-verification"
              element={<ProfileVerification />}
            />
            <Route path="privacy" element={<PrivacySetting />} />
            <Route path="password" element={<Password />} />
            <Route path="delete" element={<Delete />} />
            <Route path="block" element={<Block />} />
            <Route path="general" element={<GeneralSetting />} />
            <Route path="profile" element={<ProfileSetting />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default SetRoute;
