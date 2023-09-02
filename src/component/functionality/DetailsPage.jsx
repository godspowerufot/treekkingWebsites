import React, { useEffect, useState } from "react";
import "./CardDetaills.css";
import Imagess from "../assets/images/gallery-3.jpg";
import { Avatar } from "@mui/material";
import { Add } from "@mui/icons-material";
import { UserAuth } from "../contextapi";
import MiniDrawer from "./drawer";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function AboutDetailsPage() {
  const { selectImage, user } = UserAuth();
  const [usersWithSameLocation, setUsersWithSameLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Query users with the same selected location
  const getUsersWithSameLocation = async (selectedImage) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("selectedImage", "==", selectedImage));

      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map((doc) => doc.data());

      return users;
    } catch (error) {
      console.error("Error querying users with same location:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (selectImage) {
      setLoading(true);
      setError(null);

      // Fetch users with the same selected location
      getUsersWithSameLocation(selectImage)
        .then((users) => {
          setUsersWithSameLocation(users);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectImage]);

  return (
    <div className="about-details-page">
      <MiniDrawer />
      <div className="heading">
        <h2>Your Trek</h2>
        <div className="card-img">
          <img src={Imagess} alt="Map" />
        </div>
        <div className="filter-users">
          <h3>Popular Near You</h3>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading &&
            !error &&
            usersWithSameLocation.map((user, uniqkey) => (
              <div id="Uses" key={uniqkey}>
                <Avatar /> {user?.email} is going to the same Location <Add />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AboutDetailsPage;
