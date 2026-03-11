import React from "react";
import Hero from "../Components/layout/Hero";
import Recommendations from "../Components/layout/Recommendation";
import Footer from "../Components/layout/Footer";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Recommendations />
      <Footer />
    </div>
  );
}

export default Home;
