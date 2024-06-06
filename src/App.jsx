import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import LocomotiveScroll from 'locomotive-scroll';

import Home from "./pages/Home";
import "./App.css";




function App() {
  const locomotiveScroll = new LocomotiveScroll();

  useGSAP(() => {
    gsap.set("body", { autoAlpha: 0 });
    gsap.to("body", { autoAlpha: 1, duration: 1 });
  });

  return (
      <Home />
  );
}

export default App;
