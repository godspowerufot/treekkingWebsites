import React  from "react";
import "../VIEWS/styling/navbar.css";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { SearchRounded } from "@mui/icons-material";
import { ChevronLeft } from "@mui/icons-material";

function HeaderComponent() {
  const itemList = [
    {
       
        link: "/function",
        icon:<ChevronLeft/>
     
    },
    {
      
     
       link: "/",
      icon:<Home/>

    },

    {
        link: "/search",
        icon:<SearchRounded/>
  

    },

  
  ];
  // set menu icon to false on large devices
  // creaate a function to toggle when on small screen
  // set menu icon to false oces
  // creaate a function to toggle when on small screen
  

  return (
    <header>
      <div className="navbaecontainer">
        <nav className="navbar">
          {/* set navelement to false on large(horizontally ) */}
        
        
          <div style={{display: 'flex',
    justifyContent: 'space-around'}}>
            {itemList.map((text, index) => (
              <span key={"text" + index} className="icons">
                <Link key={index} to={text.link} smooth  style={{Color:"white"}}>
                  {text.icon}
                </Link>
              </span>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
