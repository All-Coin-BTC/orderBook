import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function SupplierHub() {
  return (
    <div className="page-container flex bg-gray-100">
      <div className="supplier-hub-container flex flex-col items-start lg:px-24  mr-auto w-10/12  bg-gray-100">
        <div className="top-row flex justify-between items-center w-full mt-12  border-b-gray-300 border-b pb-4">
          <p className="lg:text-3xl text-xl text-center ">Supplier Hub</p>
          <div className="settings-and-help-container flex items-center gap-3">
            <button className="border rounded border-gray-300   opacity-75 lg:py-4 lg:px-8 py-2 px-4">Help</button>
            <button className="border rounded border-gray-300  opacity-75 lg:py-4 lg:px-8 py-2 px-4 ">
              <img src="setting.png" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="cards-grid grid 2xl:grid-cols-3 xl:grid-cols-2 grid-rows-2 gap-8 mt-16 w-full justify-items-center ">
          <div className="generate-request-container p-8 rounded-sm items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-orange-200">
                <img src="distribution.png" className="w-24 p-4" />
              </div>
              <div className="request-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">Create a Distribution Request</p>
                <p className="text-center font-light text-lg">
                  Enter details about your product and price. Other parties may counter-offer. Once an agreement is reached,
                  your order will be moved to the logistics book where it can be fulfilled.
                </p>
              </div>
            </div>
            <Link to="/supplier-generate-step-one">
              <button className="ard-btn mt-8 border rounded-sm border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
                Enter
              </button>
            </Link>
          </div>
          <div className="view-orders-request-container  p-8 rounded-sm items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-green-500">
                <img src="browse.png" className="w-24 p-4" />
              </div>
              <div className="orders-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">View Incoming Purchase Orders</p>
                <p className="text-center font-light text-lg">
                  View orders that warehouses have sent to you. You can agree to the order terms or propose a counter offer.
                  Once accepted the order will be pushed to the logistics book for fulfillment.
                </p>
              </div>
            </div>
            <Link to="/warehouse-orders">
              <button className="card-btn mt-8 border rounded-sm border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
                Enter
              </button>
            </Link>
          </div>
          <div className=" view-sent-distribution-requests-container p-8 rounded-sm items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-blue-300">
                <img src="orders.png" className="w-24 p-4" />
              </div>
              <div className="view-requests-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">View Sent Requests</p>
                <p className="text-center font-light text-lg">
                  See the orders you have previously sent. You can choose to cancel or alter details here.
                </p>
              </div>
            </div>
            <button className="card-btn mt-8 border rounded-sm border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
              Enter
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

// <div className="supplier-hub-container flex flex-col items-center">
// <Link to="/supplier-generate-step-one">
//   <div className="supplier-title mt-8">
//     <p className="text-3xl text-center ">Welcome to the Supplier Hub</p>
//     <p className="text-base text-center font-light mt-8">What do you want to do?</p>
//   </div>
// </Link>
// <Link to="/supplier-generate-step-one">
//   <div className="generate-request-container mt-4 p-8 rounded-2xl ">
//     <div className="request-title">
//       <p className="text-2xl text-center">Create a Distribution Request</p>
//       <p className="text-center font-light">Send a sell order to a warehouse</p>
//     </div>
//   </div>
// </Link>
// <Link to="/supplier-orders">
//   <div className="generate-request-container mt-4 p-8 rounded-2xl ">
//     <div className="request-title">
//       <p className="text-2xl text-center">View Sent Requests</p>
//       <p className="text-center font-light">Browse the orders you have sent out</p>
//     </div>
//   </div>
// </Link>
// <Link to="/warehouse-orders">
//   <div className="view-requests-container mt-4 p-8 rounded-2xl ">
//     <div className="incoming-request-title">
//       <p className="text-2xl text-center">View Incoming Purchase Requests</p>
//       <p className="text-center font-light">View purchase orders from Warehouses</p>
//     </div>
//   </div>
// </Link>
// </div>

// Create a Distribution Request

// Enter details about your product and price. Other parties may counter-offer. Once an agreement is reached, your order will be moved to the logistics book where it can be fulfilled.

// Enter

// View Sent Requests

// See the orders you have previously sent. You can choose to cancel or alter details here.

// Enter

// View Incoming Purchase Orders

// View orders that warehouses have sent to you. You can agree to the order terms or propose a counter offer. Once accepted the order will be pushed to the logistics book for fulfillment.

// Enter
