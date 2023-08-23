import React from "react";
import { Link } from "react-router-dom";

export default function WarehousingHub() {
  return (
    <div className="manufacturer-hub-container flex flex-col items-center">
      <div className="manufacturer-title mt-8">
        <p className="text-3xl text-center ">Welcome to the Warehousing Hub</p>
        <p className="text-base text-center font-light mt-8">What do you want to do?</p>
      </div>
      <Link to="/warehouse-generate-step-one">
        <div className="generate-request-container mt-4 p-8 rounded-2xl">
          <div className="request-title">
            <p className="text-2xl text-center">Create a Purchase Request</p>
            <p className="text-center font-light">Send a buy order to a supplier</p>
          </div>
        </div>
      </Link>
      <Link to="/warehouse-requests">
        <div className="view-requests-container mt-4 p-8 rounded-2xl ">
          <div className="incoming-request-title">
            <p className="text-2xl text-center">View Distribution Requests</p>
            <p className="text-center font-light">See what suppliers are offering</p>
          </div>
        </div>
      </Link>
      <div className="view-requests-container mt-4 p-8 rounded-2xl ">
        <div className="incoming-request-title">
          <p className="text-2xl text-center">View Orders</p>
          <p className="text-center font-light">View your warehouse's in-route and completed orders</p>
        </div>
      </div>
    </div>
  );
}
