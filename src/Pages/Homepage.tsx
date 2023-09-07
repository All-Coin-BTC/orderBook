import React from "react";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="homepage-container flex flex-col  items-center justify-center relative">
      <div className="hero-container flex flex-col justify-center items-center">
        <div className="hero-header text-5xl text-center p-2 ">Experience A Liberated Marketplace</div>
        <div className="hero-subtext text-2xl font-extralight text-center">
          AllBook is bringing free market commerce to your fingertips.
        </div>
        <Link to="/create-account">
          <button className="get-started-btn px-8 py-2 w-48 rounded-2xl bg-white mt-6">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
