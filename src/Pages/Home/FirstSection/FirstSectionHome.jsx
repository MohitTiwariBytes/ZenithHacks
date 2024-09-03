import React, { useRef, useEffect, useState } from "react";
import "./FirstSectionHome.css";
import Button from "../../../Components/Button/Button";
import Globe from "react-globe.gl";
import { gsap } from "gsap";

const FirstSection = () => {
  const globeRef = useRef();
  const sectionRef = useRef();
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false; // Disable the zoom
    }

    // Disable scrolling on the globe itself
    const globeCanvas = document.querySelector(".moon canvas");

    const disableScroll = (e) => {
      e.stopPropagation();
    };

    if (globeCanvas) {
      globeCanvas.addEventListener("wheel", disableScroll);
    }

    return () => {
      if (globeCanvas) {
        globeCanvas.removeEventListener("wheel", disableScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scrolling down - decrease height
        setCurrentHeight((prevHeight) => {
          const newHeight = prevHeight - 250;
          gsap.to(sectionRef.current, {
            height: newHeight,
            duration: 0.5,
            ease: "power2.out",
          });
          return newHeight;
        });
      } else {
        // Scrolling up - increase height
        setCurrentHeight((prevHeight) => {
          const newHeight = Math.min(window.innerHeight, prevHeight + 150);
          gsap.to(sectionRef.current, {
            height: newHeight,
            duration: 0.5,
            ease: "power2.out",
          });
          return newHeight;
        });
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="main-home-first-section">
      <div
        id="firstSectionHome"
        className="firstSectionHome"
        ref={sectionRef}
        style={{ height: "100vh" }}
      >
        <div className="text">
          <h1>Zenith 2025</h1>
          <span>
            Join a <strong>community run</strong> hackathon to compete and
            connect with Hack Club members from across the world!
          </span>
          <div className="buttonMain">
            <Button text={"Donate"}></Button>
          </div>
        </div>

        <div className="moon">
          <Globe
            ref={globeRef}
            globeImageUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"
            backgroundColor="rgba(0,0,0,0)"
            width={1650}
            height={1650}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
