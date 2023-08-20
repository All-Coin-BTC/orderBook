import React from "react";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="homepage-container flex flex-col justify-center items-center mt-8">
      <div className="hero-header text-4xl text-center p-2 text-blueText">
        Experience A Liberated Marketplace
      </div>
      <Link to="/roles">
        <button className="get-started-btn px-8 py-2 w-48 rounded-2xl bg-white">
          Get Started
        </button>
      </Link>
    </div>
  );
}
