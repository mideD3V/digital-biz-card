import React from 'react'
import './footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
          <ul>
              <li>
        <a href="https://wwww.twitter.com" className="twitter">
          <FaTwitter />{" "}
              </a></li>
              <li>
        <a href="https://wwww.facebook.com" className="facebook">
          <FaFacebookF />{" "}
              </a></li>
              <li>
        <a href="https://wwww.twitter.com" className="twitter">
          <FaTwitter />{" "}
              </a></li>
              <li>
        <a href="https://wwww.github.com.com" className="github">
          <FaGithub />{" "}
        </a></li>
      </ul>
    </div>
  );
}

export default Footer