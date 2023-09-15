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
    // Set up a query to listen for notifications specific to the user
    if (user.uid) {
      const notificationsRef = collection(db, "notifications");
      const q = query(
        notificationsRef,
        where("sender", "=", user.uid)
      );

      // Create a set to track unique senders
      const uniqueSenders = new Set();

      // Subscribe to real-time updates
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newNotifications = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const sender = data.sender;

          // Check if the sender is unique
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
        // Unsubscribe from the listener when the component unmounts
        unsubscribe();
      };
    }
  }, [user]);
console.error(error);
  return (
    <div className="notification-card">
      <h2>Trekking Invitations</h2>
      {notifications.length === 0 ? (
        <p>No trekking invitations.</p>
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
