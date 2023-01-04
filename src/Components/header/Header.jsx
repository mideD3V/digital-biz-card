import React from 'react'
import './header.css'
import Mide from '../../asset/ayodev.png'
import {AiTwotoneMail} from 'react-icons/ai'
import { AiOutlineLinkedin } from "react-icons/ai";

const Header = () => {
  return (
      <div>
          <img src={Mide} alt="" />
          <h2>Ayomide Oke</h2>
          <p>Creative Front-End Developer</p>
          <p className="location">Lagos, Nigeria</p>
          <button> <span className="icon"> <AiTwotoneMail /> </span> Email</button>
          
          <button> <span className="icon"> <AiOutlineLinkedin/> </span>LinkedIn</button>
    </div>
  )
}

export default Header