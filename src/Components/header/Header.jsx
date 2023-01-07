import React from "react";
import "./header.css";
import Mide from "../../asset/mide-dev.jpg";
import Mide2 from "../../asset/slyd2.JPG";
import Mide3 from "../../asset/slyd3.jpg";
import Mide4 from "../../asset/slyd4.jpg";
import Mide5 from "../../asset/slyd5.jpg";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Typical from 'react-typical'
import Typewriter from 'typewriter-effect'

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <img src={Mide} alt="Mide's pix" />
        <img src={Mide2} alt="Mide's pix" />
        <img src={Mide3} alt="Mide's pix" />
        <img src={Mide4} alt="Mide's pix" />
        <img src={Mide5} alt="Mide's pix" />
      </div>
      <p></p>
      <h2>Ayomide Oke</h2>

      <p id="description">

        {/* <Typical
          loop={3}
          wrapper="b"
          steps={["Creative Front-End Developer", 5000]}
        /> */}
        <Typewriter
          onInit={(typewriter) => {
            
            typewriter
              .typeString("I'm a Creative Frontend Developer")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Welcome!")
              .pauseFor(3000)
              .deleteAll()
              .typeString("Front-End Developer")
              .start()
          }

          }
        />

      </p>

      <p className="location">Lagos, Nigeria</p>

      <div className="socials_btn">
        {" "}
        <a
          href="mailto:ayomideoke9@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          id="email_btn"
        >
          {" "}
          <span className="icon">
            {" "}
            <AiTwotoneMail />{" "}
          </span>{" "}
          Email
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/mid3/"
          target="_blank"
          rel="noopener noreferrer"
          id="linkedin_btn"
        >
          {" "}
          <span className="icon">
            {" "}
            <AiOutlineLinkedin />{" "}
          </span>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Header;
