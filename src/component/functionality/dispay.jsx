import React, { useState } from "react";
import "./card.css";
import { Avatar } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Login } from "@mui/icons-material";
import { useNavigate } from "react-router";

import NotificationsComponent from "./ReceiverrNotification";
import NewNotification from "./newNotification";
import { UserAuth } from "../contextapi";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderComponent from "./HeaderComponent.jsx"
function DisplayPage() {
  const { selectImage } = UserAuth();
  const [isNotification, setIsNotification] = useState(false);

  // Function to toggle the sidebar

  const [newNotification] = useState(null);
  const toggleNotification = () => {
    setIsNotification((p) => !isNotification);
  };

  // Function to handle new notifications
     //check if user log in
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div>
      <HeaderComponent/>
        <div className={isNotification? "" : "opens"}>
        {/* Show the sidebar only on mobile view */}
        {newNotification && (
        <NewNotification
          notification={newNotification}
        />
      )}
      {/* Render the NotificationsComponent */}
      <NotificationsComponent
        // Pass the function to handle new notifications
      /></div>
        <div className="iframe-container">
          {" "}
        
          {selectImage ? (
            <iframe
              src={selectImage}
              style={{ border: "0" }}
              title="name"
            ></iframe>
          ) : (
            
            <div className="spinnerss"> <div className="spinners"></div></div>
           
          )}
        </div>
      </div>
      <div className="AboutLocation">
      
        <div className="rounded">
          <div className="mapdescription"  onClick={handleLogout}>
          
            <Login width="2em" height="2em" />
           
          </div>
          <div className="mapdescription">
           
              <Link to="/AboutDetailsPage">
                <Avatar width="36px" height="37px" />
              </Link>
            
          </div>
          {/* Show the toggle button for sidebar only on mobile view */}
          <div className="mapdescription" onClick={toggleNotification} >
            {" "}
    
            
            {isNotification? <CloseIcon /> : <MenuIcon />}
        
        
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
