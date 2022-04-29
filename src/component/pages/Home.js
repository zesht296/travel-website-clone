import React from "react";
import "../../index.css";
import Cards from "../Cards";
import Footer from "../Footer";
import "../HeroSection";
import HeroSection from "../HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
