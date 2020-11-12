import React from "react";
import Navbar from "./Navbar";
import HeadingBanner from "./HeadingBanner";

export default function Home() {
  return (
    <div className="homeContainer" id="home">
      <Navbar />
      <HeadingBanner />
    </div>
  );
}
