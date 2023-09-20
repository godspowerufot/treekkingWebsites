import React, { useEffect, useState } from "react";
import "./CardDetaills.css";
import './WhatsAppModal.css'
import { Avatar } from "@mui/material";
import { Add, CheckCircle } from "@mui/icons-material"; // Import the CheckCircle icon
import { UserAuth } from "../contextapi";
import HeaderComponent from "./HeaderComponent.jsx";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from uuid

function AboutDetailsPage() {
  const { selectImage, user } = UserAuth();
  const [usersWithSameLocation, setUsersWithSameLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [whatsappNumber, setWhatsAppNumber] = useState("");
  const [invitationStatus, setInvitationStatus] = useState({}); // State to track invitation status for each user

  // Query users with the same selected location
  const getUsersWithSameLocation = async (selectedImage) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("selectedImage", "==", selectedImage));

      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map((doc) => doc.id);

      return users;
    } catch (error) {
      console.error("Error querying users with the same location:", error);
      throw error;
    }
  };

  // Function to send a trekking invitation
  const sendTrekkingInvitation = async (senderUserId, recipientUserId) => {
    const invitationId = uuidv4();
    console.log(invitationId)
    try {
      const notificationsRef = collection(db, "notifications");
      // Create a new notification document
      await addDoc(notificationsRef, {
        id: invitationId, // Include the unique ID
        sender: senderUserId,
        recipient: recipientUserId,
        whatsappNumber: whatsappNumber,
        selectLocation:selectImage,
        timestamp: new Date(),

      });

      // Set the invitation status for the recipient user to "success"
      setInvitationStatus((prevStatus) => ({
        ...prevStatus,
        [recipientUserId]: "success",
      }));

      console.log("Trekking invitation sent successfully.");
    } catch (error) {
      console.error("Error sending trekking invitation:", error);

      // Set the invitation status for the recipient user to "error"
      setInvitationStatus((prevStatus) => ({
        ...prevStatus,
        [recipientUserId]: "error",
      }));
    }
  };

  // Function to handle saving WhatsApp number
  const handleWhatsAppSave = async () => {
    // Save the WhatsApp number to the database and then close the modal
    if (user) {
      try {
        const userRef = collection(db, "notifications");
        await addDoc(userRef, {
          whatsappNumber: whatsappNumber,
        });

        setShowModal(false);
      } catch (error) {
        console.error('Error saving WhatsApp number:', error);
      }
    }
  };

  useEffect(() => {
    // Check if the user has provided their WhatsApp number
    if (!user?.whatsappNumber) {
      // If not, show the WhatsApp number modal
      setShowModal(true);
    }
  }, [user]);

  useEffect(() => {
    if (selectImage) {
      setLoading(true);
      setError(null);

      // Fetch users with the same selected location
      getUsersWithSameLocation(selectImage)
        .then((userIds) => {
          console.log("Users with the same location:", userIds);
          setUsersWithSameLocation(userIds);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectImage, user]);

  return (
    <div className="about-details-page">
      <HeaderComponent />
      <div className="heading">
        <h2>Your Trek</h2>
        <div className="card-img">
          <iframe
            src={selectImage}
            width="500px"
            height="300px"
            style={{ border: "5px" }}
            title="name"
            loading="lazy"
          ></iframe>
        </div>
        <div className="filter-users">
          <h2>Popular Near You</h2>
          {loading && <div className="spinners"> </div>}
          {error && <p>Error: {error.message}</p>}
          {!loading &&
            !error &&
            usersWithSameLocation.map((userEmail, uniqkey) => (
              <div id="user-item" key={uniqkey}>
                <Avatar />
                User with Email: {userEmail} is going to the same Location{" "}
                <span onClick={() => sendTrekkingInvitation(user?.email, userEmail)}>
                  {invitationStatus[userEmail] === "success" ? (
                    <CheckCircle style={{ color: "green" }} />
                  ) : (
                    <Add />
                  )}
                </span>{" "}
              </div>
            ))}
        </div>
      </div>
      {showModal && (
        <div className="whatsapp-modal">
          <div className="modal-content">
            <h2>Enter Your WhatsApp Number</h2>
            <input
              type="text"
              placeholder="WhatsApp Number"
              value={whatsappNumber}
              onChange={(e) => setWhatsAppNumber(e.target.value)}
            />
            <button onClick={handleWhatsAppSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutDetailsPage;
