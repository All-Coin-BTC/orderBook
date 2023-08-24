import React from "react";
import { Link } from "react-router-dom";

export default function LogisticsHub() {
  return (
    <div className="logistics-hub-container flex flex-col items-center">
      <div className="logistics-title mt-8">
        <p className="text-3xl text-center ">Welcome to the Logistics Hub</p>
        <p className="text-base text-center font-light mt-8">What do you want to do?</p>
      </div>

      <Link to="/logistics-potential-orders">
        <div className="generate-request-container mt-4 p-8 rounded-2xl ">
          <div className="request-title">
            <p className="text-2xl text-center">View Potential Orders</p>
            <p className="text-center font-light">See which deals need transport</p>
          </div>
        </div>
      </Link>
      <Link to="/logistics-orders">
        <div className="generate-request-container mt-4 p-8 rounded-2xl ">
          <div className="request-title">
            <p className="text-2xl text-center">View Your Transport Orders</p>
            <p className="text-center font-light">Browse the orders you are responsible for completing</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
