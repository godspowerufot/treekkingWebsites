import React, { useEffect, useState } from "react";
import "./CardDetaills.css";
import { Avatar } from "@mui/material";
import { Add } from "@mui/icons-material";
import { UserAuth } from "../contextapi";
import HeaderComponent from "./HeaderComponent.jsx"
import { db } from "../firebase";
import WhatsAppModal from "../functionality/whatsappModal"
import {
  collection,
  query,
  where,
  getDocs,
addDoc
 
} from "firebase/firestore"; // Import FieldValue

function AboutDetailsPage() {
  const { selectImage, user } = UserAuth();
  const [usersWithSameLocation, setUsersWithSameLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  console.log(user?.email)
  // Query users with the same selected location
  const getUsersWithSameLocation = async (selectedImage) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("selectedImage", "==", selectedImage));

      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map((doc) => doc.id);
      

      return users;
    } catch (error) {
      console.error("Error querying users with same location:", error);
      throw error;
    }
  };


  

  // ...

  // Function to send a trekking invitation
  const sendTrekkingInvitation = async (senderUserId, recipientEmail) => {
    try {
      const notificationsRef = collection(db, "notifications");
      // Create a new notification document
      await addDoc(notificationsRef, {
        sender: senderUserId,
        recipient: recipientEmail, // Use the selected user's email as the recipient
        timestamp: new Date(),
      });
      console.log("Trekking invitation sent successfully.");
    } catch (error) {
      console.error("Error sending trekking invitation:", error);
    }
  };
  
  const handleWhatsAppSave = async (whatsappNumber) => {
    // Save the WhatsApp number to the database
    // You can implement this part
    const notificationsRef = collection(db, "notifications");
    // After saving, close the modal
    if (user) {
      try {
        // Update the user's profile with the WhatsApp number
        await addDoc(notificationsRef, {
          whatsappNumber: whatsappNumber,
        });
  
        // Close the modal
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
  


  // In your component, call the function when the "Add" button is clicked
  const handleAddFriends = (selectedUserEmail) => {
    if (user && selectedUserEmail) {
      sendTrekkingInvitation(user?.email, selectedUserEmail);
   console.log(selectedUserEmail) } else {
      // Handle the case where the user is not logged in or no user is selected
      alert("Kindly login and select a user to invite.");
    }
  };


  useEffect(() => {
    console.log("selectImage:", selectImage);
    console.log("user:", user);
  
    if (selectImage) {
      setLoading(true);
      setError(null);
  
      // Fetch users with the same selected location
      getUsersWithSameLocation(selectImage)
        .then((userIds) => {
          console.log("Users with same location:", userIds);
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
  // Include user in the dependency array

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
                loading="lazy"></iframe>
        </div>
        <div className="filter-users">
          <h2>Popular Near You</h2>
          {loading &&<div className="spinners"> </div>}
          {error && <p>Error: {error.message}</p>}
          {!loading &&
          !error &&
          usersWithSameLocation.map((userEmail, uniqkey) => (
            <div id="user-item" key={uniqkey}>
              <Avatar />
              User with Email: {userEmail} is going to the same Location{" "}
              <span onClick={() => handleAddFriends(userEmail)}> <Add /></span>
            </div>
          ))}



        </div>
      </div>
      {showModal && <WhatsAppModal onSave={handleWhatsAppSave} />}

    </div>
  );
}

export default AboutDetailsPage;