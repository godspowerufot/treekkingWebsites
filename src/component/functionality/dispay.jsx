import React, { useState } from "react";
import "./card.css";
import { Avatar } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { ChevronLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MiniDrawer from "./drawer";
import Sidebar from "./Sidebar.jsx"; // Import the Sidebar component
import NotificationsComponent from "./ReceiverrNotification";
import NewNotification from "./newNotification";
import { UserAuth } from "../contextapi";

function DisplayPage() {
  const { selectImage,user } = UserAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [newNotification, setNewNotification] = useState(null);

  // Function to handle new notifications
  const handleNewNotification = (notification) => {
    setNewNotification(notification);
  };

  // Function to close the new notification
  const closeNotification = () => {
    setNewNotification(null);
  };
  
  return (
    <>
      <div>
        <MiniDrawer />
        {/* Show the sidebar only on mobile view */}
        {newNotification && (
        <NewNotification
          notification={newNotification}
          onClose={closeNotification}
        />
      )}
      {/* Render the NotificationsComponent */}
      <NotificationsComponent
        user={user} // Pass the user as a prop
        onNewNotification={handleNewNotification} // Pass the function to handle new notifications
      />
        <div className="iframe-container">
          {" "}
          <div id="arrowTop">
            <Link to="/function">
              <ChevronLeft />
            </Link>
          </div>
          {selectImage ? (
            <iframe
              src={selectImage}
              style={{ border: "0" }}
              title="name"
            ></iframe>
          ) : (
            <div> there is no mage</div>
          )}
        </div>
      </div>
      <div className="AboutLocation">
        <div className="mapdescriptions">
          <div className="mapdescription">
            Distance
            <span id="minitext"> 2.8km </span>
          </div>
          <div className="mapdescription">
            {" "}
            Time <span id="minitext"> 2.8km </span>
          </div>
          <div className="mapdescription">
            {" "}
            elevation <span id="minitext"> 2.8km </span>
          </div>
        </div>
        <div className="rounded">
          <div className="mapdescription">
            <span id="roundes">
              <Delete width="2em" height="2em" />
            </span>
          </div>
          <div className="mapdescription">
            <span id="rounde" >
              <Link to="/AboutDetailsPage">
                <Avatar width="36px" height="37px" />
              </Link>
            </span>
          </div>
          {/* Show the toggle button for sidebar only on mobile view */}
          <div className="mapdescription">
            {" "}
            <span id="roundes" >
              <Add width="2em" height="2em" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
