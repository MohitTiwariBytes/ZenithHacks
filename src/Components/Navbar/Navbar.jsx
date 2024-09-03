import React, { useRef } from "react";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  const itemRefs = useRef([]);

  const slideText = (index, direction) => {
    gsap.fromTo(
      itemRefs.current[index],
      {
        marginTop: direction === "up" ? "0px" : "-20px",
        rotate: 0,
      },
      {
        marginTop: direction === "up" ? "-20px" : "0px",
        duration: 0.4,
        ease: "power3.inOut",
      }
    );
  };

  return (
    <div className="main-navbar">
      <div className="navbar">
        {["About", "Sponsors"].map((item, index) => (
          <div
            key={index}
            className={"item" + (index + 1)}
            onMouseEnter={() => slideText(index, "up")}
            onMouseLeave={() => slideText(index, "down")}
          >
            <span ref={(el) => (itemRefs.current[index] = el)}>{item}</span>
            <span>{item}</span>
          </div>
        ))}
        <h1>Zenith Hacks</h1>
      </div>
    </div>
  );
};

export default Navbar;
