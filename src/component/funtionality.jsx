import Footer from "./VIEWS/footer.jsx"
import React, { useEffect } from "react";
import SelectLocation from "./functionality/LocationCardHome";
import MiniDrawer from "./functionality/drawer.jsx";
import "./functionality/card.css";
function TrekFunction() {
  useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach(elem => {
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';

      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });

      elem.innerHTML = words.join(' ');

      const children = elem.querySelectorAll('span > i');
      children.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
      });
    });
  }, []);
  return (
    <>
        <div className="head-img">
      <h1 className="glow swift-up-text">AVAILABLE LOCATIONS</h1>

    </div>
      <MiniDrawer />
      <SelectLocation />
      <Footer />
    </>
  );
}

export default TrekFunction;
