import React, { useEffect, useState } from "react";
import "./CardDetaills.css";
import { Avatar } from "@mui/material";
import { Add } from "@mui/icons-material";
import { UserAuth } from "../contextapi";
import MiniDrawer from "./drawer";
import { db } from "../firebase";
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


  // Function to send a trekking invitation
  const sendTrekkingInvitation = async (senderUserId, trekLocation) => {
    try {
      const notificationsRef = collection(db, "notifications"); // Replace "notifications" with your collection name
      // Create a new notification document
      await addDoc(notificationsRef, {
        sender: senderUserId,
        location: trekLocation,
        timestamp: new Date(),
      });
      console.log("Trekking invitation sent successfully.");
    } catch (error) {
      console.error("Error sending trekking invitation:", error);
    }
  };
  
  // In your component, call the function when the "Add" button is clicked
  const handleAddFriends= () => {
    if (user) {
      // Assuming user.uid is the unique identifier for the user
      sendTrekkingInvitation(user?.email, selectImage);
    } else {
      // Handle the case where the user is not logged in
      alert("Kindly login")
    }
  };
  

  useEffect(() => {
    if (selectImage) {
      setLoading(true);
      setError(null);

      // Store the user's email for the selected location

      // Fetch users with the same selected location
      getUsersWithSameLocation(selectImage)
        .then((userIds) => {
          setUsersWithSameLocation(userIds);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectImage, user]); // Include user in the dependency array

  return (
    <div className="about-details-page">
      <MiniDrawer />
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
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading &&
            !error &&
            usersWithSameLocation.map((userId, uniqkey) => (
              <div id="user-item" key={uniqkey}>
                <Avatar /> User with ID: {userId} is going to the same Location{" "}
               <span onClick={handleAddFriends}> <Add /></span> 
              </div>
            ))}



        </div>
      </div>
    </div>
  );
}

export default AboutDetailsPage;
