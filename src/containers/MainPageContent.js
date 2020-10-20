import React from "react";
import ble from "../img/ble.jpg";
import heart from "../img/heart.jpg";
import flowers from "../img/flowers.jpg";
import love from "../img/love.jpg";

const MainPageContent = () => {
  return (
    <div>
      <div className="photos">
        <img src={ble} alt="ble" width="200" />
        <img src={heart} alt="coeur" width="200" />
        <img src={flowers} alt="fleurs" width="200" />
        <img src={love} alt="love" width="200" />
      </div>
    </div>
  );
};

export default MainPageContent;
