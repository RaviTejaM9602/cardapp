import React from "react";
import Email  from "../Images/email.png";
import LinkedIn from "../Images/Linkedin.png"

export default function MainContent() {
  return (
    <main className="main-content">
    <h2 className="profile-name">Ravi Teja</h2>
         <h4 className="profile-designation">Front End Developer</h4>
         <a href="https://github.com/RaviTejaM9602" className="profile-web">Raviteja.Website</a>
         <div className="btn-logo">
           <a  className="btn" href="ravikanna@gmail.com">
              <img className="logo" src={Email} alt="email-Icon"/>
              <h6>Email</h6>
           </a>
          <a className="btn" href="ravikanna">
            <img className="logo" src={LinkedIn} alt="Linkdin-Icon"/>
            <h6>LinkedIn</h6> 
            </a>      
         </div>
        <div className="about-section">
        <h3 className="about">About</h3>
          <p className="description">I am a frontend developer with a particular interest in making things simple and automating
          daily tasks. I try to keep up with security and best practices,
          and am always looking for new things to learn.</p>          
          
          <h3 className="about">Intrests</h3>
          <p className="description">Food expert. Music scholar. Reader. Internet fanatic. 
          Bacon buff. Entrepreneur. 
          Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
          
    </main>
  )
}