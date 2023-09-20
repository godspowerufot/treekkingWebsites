import React from "react";

import "./card.css";
import { LocationOnTwoTone } from "@mui/icons-material";
import { UserAuth } from "../contextapi";
import { AccountCircle } from "@mui/icons-material";
import locations from "./fetch";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import {  doc, setDoc } from "firebase/firestore";

function SelectLocation() {
  const { setSelectImage, user } = UserAuth();
  

  const handleSubmit = async (image) => {
    try {
      setSelectImage(image);

      // Store selected image in Firestore under the user's document
      if (user) {
        const userDocRef = doc(db, "users", user?.email); // Assuming user.uid is the unique identifier for the user

        // Update the document with the selected image
        await setDoc(userDocRef, { selectedImage: image }, { merge: true });
      }
    } catch (error) {   
      console.error("Error storing selected image in Firestore:", error);
    }
  };

  return (
    <>
      <div className="body">
        <div className="cardSection">
          {locations.map((text, index) => (
            <div className="card" key={index}>
              <iframe
                src={text.embedLink}
                width="399px"
                height="200px"
                style={{ border: "0" }}
                title="name"
                loading="lazy"></iframe>

              <div className="card__content">
                <h1 className="card__header">{text.header}</h1>
                <p className="card__text">
                 Get to that location at a slow pace , with smiles and laughter. Dont u ever get worry about pains that is what your leg was meant for  (to walk)
                </p>
                <div className="card__btn">
                  <Link
                    key={locations.name}
                    to={`/displaypage/${text?.header}`}>
                    {" "}
                    <LocationOnTwoTone
                      style={{
                        width: "40px",
                        height: "20px",
                      }}
                      onClick={() => handleSubmit(text?.embedLink)}
                    />
                  </Link>

                  <AccountCircle
                    style={{
                      width: "40px",
                      height: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectLocation;
