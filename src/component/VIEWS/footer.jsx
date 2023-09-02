import React from "react";
import "./styling/footer.css";
import { Facebook } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/path/to/logo.png" alt="Trekkers Logo" />
          <span className="logo-text">Trekk</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a
            href="https://web.facebook.com/profile.php?id=100086359764945&_rdc=1&_rdr"
            className="icons">
            <Facebook />
          </a>
          <a href="tel:+2347089293254" className="icons">
            <Phone />
          </a>
          <a href="http://wa.me/+2347089293254" className="icons">
            <WhatsApp />
          </a>
          <a href="http://t.me/Zack3254" className="icons">
            <Telegram />
          </a>
          <a
            href="
https://mail.google.com/ "
            className="icons">
            <Mail />
          </a>
          <p>&copy; 2023 Trekkers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//
