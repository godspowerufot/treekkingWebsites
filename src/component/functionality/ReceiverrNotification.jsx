import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import "./NotificationsComponent.css"; // Import your CSS file for styling
import { UserAuth } from "../contextapi";


function NotificationsComponent() {
  const { user } = UserAuth(); // Assuming you're using the user's UID for authentication

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null); // To track error state

  useEffect(() => {
    if (user?.email) { // Check if user is logged in and has an email
      const notificationsRef = collection(db, "notifications");
      const q = query(
        notificationsRef,
        where("recipient", "==",user.email ) // Use recipient as the user's email
      );

      const uniqueSenders = new Set();

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newNotifications = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const sender = data.sender;

          if (!uniqueSenders.has(sender)) {
            uniqueSenders.add(sender);
            newNotifications.push(data);
          }
        });

        setLoading(true);
        setError(null);
        setNotifications(newNotifications);
      });

      return () => {
        setLoading(false);
        unsubscribe();
      };
    }
  }, [user]);
  const openWhatsAppChat = (recipientNumber) => {
    console.log(recipientNumber);
    // Use the correct URL format to open WhatsApp chat with the recipient's number
    const whatsappURL = `https://wa.me/${recipientNumber}`;
    window.open(whatsappURL, "_blank");
  };
  


console.error(error);
  return (
    <div className="notification-card">
      <h2>Trekking Invitations</h2>
      {notifications.length === 0 ? (
      !loading ? (
        <div className="spinner"></div>
      ):  <p>No trekking invitations.</p>
      ) : (
        <ul>
          {!loading ? (
            <div className="spinner"></div>
          ) : (
            notifications.map((notification, index) => (
              <li key={index}>
                <div className="notification-content">
                  <span className="notification-sender">
                    User {notification.sender}
                  </span> 
                  <div id="btn">
                  <button
                    style={{
                      backgroundColor: "#4CAF50", // Green color
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}  onClick={() => openWhatsAppChat(notification.whatsappNumber)}>
                    Accept
                   
                  </button>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Reject
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
