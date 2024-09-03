import React from "react";
import "./Home.css";
import Intro from "../../Components/Intro Animation/Intro";
import Navbar from "../../Components/Navbar/Navbar";
import FirstSection from "./FirstSection/FirstSectionHome";

const Home = () => {
  return (
    <div className="main-home-page">
      <div className="home-page">
        <Intro />
        <Navbar />
        <FirstSection></FirstSection>
      </div>
    </div>
  );
};

export default Home;
