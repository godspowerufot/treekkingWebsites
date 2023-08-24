import React from "react";

import "./card.css";
import { LocationOnTwoTone } from "@mui/icons-material";
import { UserAuth } from "../contextapi";
import { AccountCircle } from "@mui/icons-material";
import locations from "./fetch";
import { Link } from "react-router-dom";

function SelectLocation() {
  const { setSelectImage } = UserAuth();

  const handleSubmit = async (image) => {
    try {
      setSelectImage(image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="body">
        <div className="cardSection">
          {locations.map((text, index) => (
            <div className="card" key={index}>
              <img
                className="card__img"
                src={text.text}
                alt="Snowy Mountains"
              />
              <div className="card__content">
                <h1 className="card__header">{text.header}</h1>
                <p className="card__text">
                  Look up at the night sky, and find yourself{" "}
                  <strong>immersed</strong> in the amazing mountain range of
                  Aspen.{" "}
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
                      onClick={() => handleSubmit(text?.text)}
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
