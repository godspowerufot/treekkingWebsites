import React from "react";
import SelectLocation from "./functionality/LocationCardHome";
import MiniDrawer from "./functionality/drawer.jsx";
function TrekFunction() {
  return (
    <>
      <MiniDrawer />
      <SelectLocation />
    </>
  );
}

export default TrekFunction;
