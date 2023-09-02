import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import MiniDrawer from "./drawer";
import { UserAuth } from "../contextapi";
import { collection, addDoc } from "firebase/firestore";
import "./Account.css";
import { useNavigate } from "react-router-dom";
const AccountPage = () => {
  const { user, logOut } = UserAuth();

  // storing the created account to firestore
  let navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        fullName: formData.fullName,
        dept: formData.dept,

        Preferlocation: formData.Preferlocationlocation,
        regNo: formData.regNo,
        

        interest: formData.interests,
      });
      navigate("/Yourprofile");
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  const [formData, setFormData] = useState({
    fullName: "",
    dept: "",

    regNo: "",
    Preferlocation: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="em">
      <MiniDrawer />
      <div className="account-page">
        <h2>Create an Account</h2>

        <form onSubmit={createUser} className="account-form">
          <input
            type="text"
            name="fullName"
            placeholder="fullName"
            value={formData.fullName}
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
            type="text"
            name="dept"
            placeholder="dept"
            value={formData.dept}
            onChange={handleChange}
          />
          <input
            type="text"
            name="dept"
            placeholder="Enter your department"
            value={formData.dept}
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
          <button type="submit">Create Account</button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
