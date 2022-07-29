import React from "react";
import Profile from "../Images/Ravi_Profile_pic.jpg"


export default function Header() {
  return (
    <header className="Header">
         <img src={Profile} alt="profile.pic" className="profile-pic"/>         
    </header>

  )
}