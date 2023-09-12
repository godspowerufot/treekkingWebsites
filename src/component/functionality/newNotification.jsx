// NewNotification.js
import React, { useEffect } from "react";
import "./NewNotification.css";

function NewNotification({ notification, onClose }) {
  useEffect(() => {
    // Automatically close the notification after a few seconds
    const timeout = setTimeout(() => {
      onClose();
    }, 5000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="new-notification">
      {`User ${notification.sender} wants to trek with you at ${notification.location}.`}
    </div>
  );
}

export default NewNotification;
