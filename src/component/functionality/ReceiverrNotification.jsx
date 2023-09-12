import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import "./NotificationsComponent.css"; // Import your CSS file for styling

function NotificationsComponent({ user }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Set up a query to listen for notifications specific to the user
    if (user?.email) {
      const notificationsRef = collection(db, "notifications"); // Replace with your collection name
      const q = query(
        notificationsRef,
        where("Document Id", "==", user.uid) // Assuming recipient's UID is stored in the notification document
      );

      // Subscribe to real-time updates
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newNotifications = [];
        querySnapshot.forEach((doc) => {
          newNotifications.push(doc.data());
        });
        setNotifications(newNotifications);
      });

      return () => {
        // Unsubscribe from the listener when the component unmounts
        unsubscribe();
      };
    }
  }, [user]);

  return (
    <div className="notification-card">
      <h2>Trekking Invitations</h2>
      {notifications.length === 0 ? (
        <p>No trekking invitations.</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              <div className="notification-content">
                <span className="notification-sender">
                  User {notification.sender}
                </span>
                <span className="notification-location">
                  wants to trek with you at {notification.location}.
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationsComponent;
