import React from "react"
import facebook from "../Images/Facebook.png"
import GitHub from "../Images/GitHub.png"
import Instagram from "../Images/Instagram.png"
import LinkedIn from "../Images/Linkedin.png"
import Twitter from "../Images/Twitter.png" 

export default function Footer() {
  return (
    <footer className="footer"> 
      <ul className="footer-items">
        <li><img src={facebook} alt="facebook"/></li>
        <li><img src={GitHub} alt="GitHub"/></li>
        <li><img src={Instagram} alt="Instagram"/></li>
        <li><img src={LinkedIn} alt="LinkedIn"/></li>
        <li><img src={Twitter} alt="Twitter"/></li>
      </ul>
    </footer>
  )
}