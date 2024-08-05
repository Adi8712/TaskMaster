import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Team from "../components/Team";

function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Features />
      <Team />
    </div>
  );
}

export default Home;
