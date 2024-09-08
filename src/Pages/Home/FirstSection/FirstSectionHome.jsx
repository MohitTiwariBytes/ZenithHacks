import React, { useRef, useEffect, useState } from "react";
import "./FirstSectionHome.css";
import Button from "../../../Components/Button/Button";
import Globe from "react-globe.gl";
import { gsap } from "gsap";
import EarthTexture from "../../../assets/Earth Texture/earthmap1k.jpg";

const FirstSection = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false; // Disable the zoom
      controls.autoRotate = true;
      controls.enableRotate = false;
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

  return (
    <div className="main-home-first-section">
      <div id="firstSectionHome" className="firstSectionHome">
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
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
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
