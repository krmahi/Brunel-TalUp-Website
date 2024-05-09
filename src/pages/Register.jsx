import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AppLogo from "../assets/AppLogo.svg";
import Cross from "../assets/cross.svg";
import "../styles/Register.css";
import AppButton from "../components/AppButton";
import Cursor from "../components/Cursor";

const Register = () => {
  useGSAP(() => {
    gsap.set('body', { autoAlpha: 0.6 });
    gsap.to('body', { autoAlpha: 1, duration: 0.5});
  })

  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const emailRegex = /\S+@\S+\.\S+/;

  const handleNameChange = (event) => {
    setName(event.target.value);
    checkFormCompletion();
  };

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setEmailValid(emailRegex.test(emailInput));
    checkFormCompletion();
  };

  const checkFormCompletion = () => {
    setIsDisabled(!name || !email || !emailValid);
  };

  const handleSubmit = () => {
    navigate("/success");
  };

  return (
    <div className="regdiv">
      <Cursor isHovered={isHovered}/>
      {/* navbar */}
      <nav className="registernav">
        <img src={AppLogo} alt="app logo" />
        <Link to="/" className="navcross">
          <img src={Cross} alt="nav cross" />
        </Link>
      </nav>

      {/* Register form */}
      <div className="formdiv">
        <h1 className="home1">Registration Form</h1>
        <h1 className="home2">Start your success Journey here!</h1>
        <form className="form-main" onSubmit={handleSubmit}>
          <input
            className="form-field"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            className="form-field"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {!emailValid && (
            <p className="valid-email">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.89941"
                  y="6.00024"
                  width="3.2"
                  height="8"
                  fill="white"
                />
                <path
                  d="M10.5016 16.6666C6.81973 16.6666 3.83496 13.6818 3.83496 9.99992C3.83496 6.31802 6.81973 3.33325 10.5016 3.33325C14.1835 3.33325 17.1683 6.31802 17.1683 9.99992C17.1683 13.6818 14.1835 16.6666 10.5016 16.6666ZM9.83496 11.9999V13.3332H11.1683V11.9999H9.83496ZM9.83496 6.66658V10.6666H11.1683V6.66658H9.83496Z"
                  fill="#FF0808"
                />
              </svg>
              Enter a valid email address
            </p>
          )}
        <div  onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          <AppButton type = 'submit' width={"100%"} idname={`${isDisabled ? 'disabled' : 'black'}`} disabled={isDisabled}>Submit</AppButton>
        </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
