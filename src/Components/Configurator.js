import React from "react";
import { useCustomization } from "../Context/Customization";

const Configurator = () => {
  const { carColor, setCarColor } = useCustomization();
  console.log(carColor);
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Color</div>
        <div className="configurator__section__values">
          <div className={`item ${carColor === "White" ? "item--active" : ""}`} onClick={() => setCarColor("White")}>
            <div className="item__label">White</div>
          </div>
          <div className={`item ${carColor === "Yellow" ? "item--active" : ""}`} onClick={() => setCarColor("Yellow")}>
            <div className="item__label">Yellow</div>
          </div>
          <div className={`item ${carColor === "Red" ? "item--active" : ""}`} onClick={() => setCarColor("Red")}>
            <div className="item__label">Red</div>
          </div>
          <div className={`item ${carColor === "Black" ? "item--active" : ""}`} onClick={() => setCarColor("Black")}>
            <div className="item__label">Black</div>
          </div>
          <div className={`item ${carColor === "Blue" ? "item--active" : ""}`} onClick={() => setCarColor("Blue")}>
            <div className="item__label">Blue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
