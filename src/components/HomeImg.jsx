import React from "react";

import HImg from "../assets/pupil.png";
import Rocket from "../assets/rocket.svg";
import Sparkle from "../assets/sparkle.svg";
import "../styles/HomeImg.css";

function HomeImg() {
  return (
    <div className="imagediv">
      <img src={HImg} alt="Home Image" />

      <div className="block1">
        <img src={Sparkle} alt="Sparkle" />
        <h1>40%</h1>
        <p>
          Achieved reduction in project execution time by optimising team
          availability
        </p>
      </div>

      <div className="block2">
        <div>
          <img src={Rocket} alt="Rocket" />
        </div>
        <div className="block2text">
          <h1>10 DAYS</h1>
          <p>Staff Deployment</p>
        </div>
      </div>

      <div className="block3">
        <h1>
          $0.5
          <span>MILLION</span>
        </h1>

        <p>Reduced client expenses by saving on hiring and employee costs.</p>
      </div>
    </div>
  );
}

export default HomeImg;
