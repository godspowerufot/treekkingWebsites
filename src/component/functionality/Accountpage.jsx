import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import MiniDrawer from "./drawer";

import "./Account.css";
const AccountPage = () => {
  // storing the created account to firestore
  const createUser = async (userData) => {
    try {
      await db.collection("users").add(userData);
      console.log("User data added successfully!");
    } catch (error) {
      console.error("Error adding user data:", error);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    regNo: "",
    location: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data, e.g., send to server or context

    // Create an object with user data
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      location: formData.location,
      regNo: formData.regNo,

      interest: formData.interests,

      // ... other user data
    };

    // Call the function to add user data to Firestore
    createUser(userData);
    alert("sucessful");
  };

  return (
    <div className="em">
      <MiniDrawer />
      <div className="account-page">
        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit} className="account-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="regNo"
            placeholder="regNo"
            value={formData.regNo}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Preferred Trekking Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="interests"
            placeholder="Interests (e.g., mountain, jungle)"
            value={formData.interests}
            onChange={handleChange}
            formNoValidate
          />
          <button type="submit" onClick={handleSubmit}>
            Create Account
          </button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
