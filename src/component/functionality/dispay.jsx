import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { LogoutRounded } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { NotificationsNoneRounded } from "@mui/icons-material";
import { Person2Rounded} from "@mui/icons-material";
import NotificationsComponent from "./ReceiverrNotification";
import NewNotification from "./newNotification";
import { UserAuth } from "../contextapi";
import CloseIcon from "@mui/icons-material/Close";
import { Home } from "@mui/icons-material";
import { ChevronLeft} from "@mui/icons-material";
function DisplayPage() {
  const { selectImage } = UserAuth();
  const [isNotification, setIsNotification] = useState(false);

  // Function to toggle the sidebar

  const [newNotification] = useState(null);
  const itemList = [
    {
      
     
       link: "/",
      icon:<Home/>,
      text:"Home"

    },
    
    {
        link: "/AboutDetailsPage",
        
        icon:<Person2Rounded width="36px" height="37px" />,
              text:"send invites"

      },
      
      
   
  ];
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
          <div className="mapdescription"  >
          <Link  to='/function'  style={{
                      
                        color: "black",
                      
                      }} >
                 
          <ChevronLeft/>
                </Link>
        
          </div>
        
        
          {/* Show the toggle button for sidebar only on mobile view */}
          <div className="mapdescription" onClick={toggleNotification} >
            {" "}
    
            
            {isNotification? <CloseIcon /> : < NotificationsNoneRounded />}
        
            <p >notifications</p>
          </div>
          {itemList.map((text, index) => (
            <div className="mapdescription">

            
                <Link key={index} to={text.link} smooth  style={{
                      
                      color: "black",
                    
                    }}>
                  {text.icon}
                </Link>
             {text.text}
                </div>
            ))}
            <div className="mapdescription"  onClick={handleLogout} >
            <LogoutRounded width="2em" height="2em"  />

        <p >Logout</p>
          </div>
        
        
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
