import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import appLogo from "../assets/AppLogo.svg";
import "../styles/Success.css";

function Success() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

 //  backward counting
  setTimeout(() => {
    setCount(count - 1);
  }, 1000);

  // redirecting to home page
  if (count === 0) {
    navigate("/");
  }
  return (
    <div className="successdiv">
      {/* navbar */}
      <nav className="successnav">
        <img src={appLogo} alt="app logo" />
      </nav>

      {/* Success message */}
      <div className="success-message">
        <div className="tick">
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.0014 67.3219C15.5919 67.3219 0.668091 52.3979 0.668091 33.9886C0.668091 15.5791 15.5919 0.655273 34.0014 0.655273C52.4107 0.655273 67.3347 15.5791 67.3347 33.9886C67.3347 52.3979 52.4107 67.3219 34.0014 67.3219ZM30.6768 47.3219L54.2471 23.7517L49.5331 19.0377L30.6768 37.8939L21.2488 28.4656L16.5347 33.1799L30.6768 47.3219Z"
              fill="#28B246"
            />
          </svg>
        </div>
        <h1 className="home1">Success Submitted</h1>
        <h1 className="home2">Congratulations</h1>
        <p className="home3">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
        <p className="redirect">
          Redirecting you to Homepage in {" "}
          <span>{count} Seconds</span>
        </p>
      </div>
    </div>
  );
}

export default Success;
