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
          <span className="logo-text">Trekk</span>
        </div>
     
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a
            href="https://web.facebook.com/profile.php?id=100086359764945&_rdc=1&_rdr"
            className="icons"
          >
            <Facebook />
          </a>
          <a href="tel:+2349058386152" className="icons">
            <Phone />
          </a>
          <a href="http://wa.me/+2349018902180" className="icons">
            <WhatsApp />
          </a>
       
          <a href="https://mail.google.com/ufotgodspower8" className="icons">
            <Mail />
          </a>
        </div>
        <p>&copy; 2023 Trekkers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
