import React from 'react'
import './header.css'
import Mide from '../../asset/mide-dev.jpg'
import {AiTwotoneMail} from 'react-icons/ai'
import { AiOutlineLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <img src={Mide} alt="" />
      <h2>Ayomide Oke</h2>
      <p id='description'>Creative Front-End Developer</p>
          <p className="location">Lagos, Nigeria</p>
          
      <div className="socials_btn">
        <button id='email_btn'>
          {" "}
          <span className="icon">
            {" "}
            <AiTwotoneMail />{" "}
          </span>{" "}
          Email
        </button> 

        <button id='linkedin_btn'>
          {" "}
          <span className="icon">
            {" "}
            <AiOutlineLinkedin />{" "}
          </span>
          LinkedIn
        </button>
              
      </div>
    </div>
  );
}

export default Header