import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Cursor.css";

export default function Cursor({isHovered}) {
  const size = isHovered ?  180 : 22;

  const circle = useRef();
  const mouse = useRef({
    x: 0,
    y: 0,
  });
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveCircle(mouse.current.x, mouse.current.y);
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current,{x,y, xPercent:-50 , yPercent:-50, animationDuration: 0.5, ease: "power2.inOut"})
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div
      ref={circle}
      className="cursor"
      style={{ width: size, height: size, transition: "height 0.3s ease, width 0.3s ease"}}
    />
  );
}
