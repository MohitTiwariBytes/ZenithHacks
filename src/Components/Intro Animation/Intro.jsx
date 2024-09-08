import { React, useEffect } from "react";
import gsap from "gsap";
import "./Intro.css";

const Intro = () => {
  const intro = document.querySelector(".main-intro");
  useEffect(() => {
    gsap.fromTo(
      ".intro h1",
      {
        y: 2000,
      },
      {
        y: 0,
        duration: 1,
        ease: "expo.inOut",
        animationDelay: 0.1,
        stagger: 0.3,
      }
    );

    setInterval(() => {
      gsap.to(".loader-inner", {
        width: "100%",
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(".loader", { opacity: 0, duration: 0.2 });
          gsap.to(".intro h1", {
            y: -100,
            duration: 0.3,
            ease: "expo.inOut",
            animationDelay: 0.1,
            stagger: 0.3,
            onComplete: () => {
              gsap.to(".main-intro", {
                height: "0",
                duration: 0.6,
                ease: "power3.inOut",
              });
            },
          });
        },
      });
    }, 800);
  }, []);
  return (
    <div className="main-intro">
      <div className="intro">
        <div className="wrapper">
          <h1>Zenith Hacks 2025</h1>
        </div>
        <div className="loader">
          <div className="loader-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
