import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import { CgTwitter } from "react-icons/cg";

import './footer.css';

const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#header" className="footer__logo">
          Gilles Christian
        </a>

        <ul className="permalinks">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Education</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__media">
          <a href="https://linkedin.com/in/kamdem-kamgaing-gilles-christian-b73338251" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/GillesChristian" target="blank">
            <FaGithub />
          </a>
          <a href="https://facebook.com/ptofile.php?id=100072927796154" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/@GillesChristi12" target="blank">
            <CgTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>@copyright BD 2023</h3>
        </div>
      </div>
    );
}

export default Footer
