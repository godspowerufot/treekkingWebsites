import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,

  deleteDoc,doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import "./NotificationsComponent.css"; // Import your CSS file for styling
import { UserAuth } from "../contextapi";
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';

function NotificationsComponent() {
  // Get the user and selectImage from context (assuming user authentication)
  const { user, selectImage } = UserAuth();

  // Initialize state variables
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null); // To track error state

  useEffect(() => {
    if (user?.email && selectImage) { // Check if user is logged in and a selectImage is available
      // Reference to the "notifications" collection in Firebase Firestore
      const notificationsRef = collection(db, "notifications");

      // Create a Firestore query with filters
      const q = query(
        notificationsRef,
        where("recipient", "==", user?.email), // Filter by recipient's email
        where("selectLocation", "==", selectImage) // Filter by the selected location
      );

      // Create a Set to store unique senders
      const uniqueSenders = new Set();

      // Subscribe to real-time updates using onSnapshot
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newNotifications = [];

        // Loop through the documents in the query result
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const sender = data.sender;

          // Check if the sender is unique
          if (!uniqueSenders.has(sender)) {
            uniqueSenders.add(sender);
            newNotifications.push(data);
          }
        });

        // Update state with the new notifications
        setLoading(true);
        setError(null);
        setNotifications(newNotifications);
      });

      // Clean up the subscription when the component unmounts
      return () => {
        setLoading(false);
        unsubscribe();
      };
    }
  }, [user, selectImage]);

  // Function to open a WhatsApp chat with the recipient's number
  const openWhatsAppChat = (recipientNumber) => {
    // Log the recipient's number for testing
    console.log(recipientNumber);
    
    // Use the correct URL format to open WhatsApp chat with the recipient's number
    const whatsappURL = `https://wa.me/${recipientNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const rejectInvitation = async (notificationId) => {
    try {
      const notificationRef = doc(db, "notifications", notificationId);
      await deleteDoc(notificationRef); // Delete the notification from Firestore

      // Update the UI by removing the rejected notification from the state
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== notificationId)
      );
    } catch (error) {
      console.error("Error rejecting invitation:", error);
    }
  };


  // Log any errors to the console
  console.error(error);

  return (
    <div className="notification-card">
      <h2>Trekking Invitations</h2>
      {notifications.length === 0 ? (
        // Display a loading spinner or a message if there are no notifications
        !loading ? (
          <div className="spinner"></div>
        ) : (
          <p>No trekking invitations.</p>
        )
      ) : (
        // Render the list of notifications if there are any
        <ul>
          {!loading ? (
            <div className="spinner"></div>
          ) : (
            notifications.map((notification, index) => (
              <li key={index}>
                <div className="notification-content">
                  {/* Display the sender's information */}
                  <span className="notification-sender">
                  <Person2Rounded width="36px" height="37px" /> {notification.sender}
                  </span> 
                  <div id="btn">
                    {/* Button to accept the invitation */}
                    <button
                      style={{
                        backgroundColor: "#4CAF50", // Green color
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                      onClick={() => openWhatsAppChat(notification.whatsappNumber)}
                    >
                      <ThumbUpAltRoundedIcon />  
                    </button>
                    {/* Button to reject the invitation */}
                    <button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                           onClick={() => rejectInvitation(notification.id)} // Pass the notification ID to rejectInvitation
                    >
                <ThumbDownRoundedIcon/>  
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default NotificationsComponent;
