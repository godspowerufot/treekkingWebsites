import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./styling/navbar.css";
import MyButton from "./btn.jsx"
import { HashLink as Link } from "react-router-hash-link";

import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const itemList = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Services",
      link: "#services",
    },

    {
      text: "About",
      link: "#About",
    },

    { text: "Contact", link: "#footer" },
  ];
  // set menu icon to false on large devices
  // creaate a function to toggle when on small screen
  // set menu icon to false oces
  // creaate a function to toggle when on small screen
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar((p) => !showNavbar);
  };

  return (
    <header>   
      <div className="container">
        <nav className="navigation">
        
        <h1  style={{
              fontWeight: 600,
              fontSize: '3rem',
              background: 'linear-gradient(to right, rgb(0, 145, 255), #0e4166)',
              WebkitBackgroundClip: 'text', /* For webkit browsers like Safari */
              color: 'transparent',
              textAlign: 'center', 
            }}>XPLUR</h1>  
         
          <ul className={showNavbar ? "open" : ""}>
            {itemList.map((text, index) => (
              <li key={"text" + index} className={text.class}>
                <Link key={index} to={text.link} smooth>
                  {text.text}
                </Link>
              </li>
            ))}
          </ul>
          <MyButton />
        </nav>
        <div className="mobile_menu_icon" onClick={handleShowNavbar}>
            {showNavbar ? <CloseIcon /> : <MenuIcon/>}
          </div>
      </div>
    </header>
  );
}

export default Navbar;
