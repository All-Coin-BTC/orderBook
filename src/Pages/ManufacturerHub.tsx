import React from "react";
import { Link } from "react-router-dom";

export default function ManufacturerHub() {
  return (
    <div className="manufacturer-hub-container flex flex-col items-center">
      <div className="manufacturer-title mt-8">
        <p className="text-3xl text-center ">Welcome to the Manufacturer Hub</p>
        <p className="text-base text-center font-light mt-8">What do you want to do?</p>
      </div>
      <Link to="/ManufacturerGenerateStepOne">
        <div className="generate-request-container mt-4 p-8 rounded-2xl ">
          <div className="request-title">
            <p className="text-2xl text-center">Create a Distribution Request</p>
            <p className="text-center font-light">Send a sell order to a warehouse</p>
          </div>
        </div>
      </Link>
      <div className="view-requests-container mt-4 p-8 rounded-2xl ">
        <div className="incoming-request-title">
          <p className="text-2xl text-center">View Incoming Purchase Requests</p>
          <p className="text-center font-light">View purchase orders from Warehouses</p>
        </div>
      </div>
    </div>
  );
}
