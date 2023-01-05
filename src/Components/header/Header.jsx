import React from "react";
import "./header.css";
import Mide from "../../asset/mide-dev.jpg";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Date from '../../Components/date/Date'

const Header = () => {
  return (
    <div className="header">
      <img src={Mide} alt="" />
      <p>
< Date/>
      </p>
      <h2>Ayomide Oke</h2>
      <p id="description">Creative Front-End Developer</p>
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
