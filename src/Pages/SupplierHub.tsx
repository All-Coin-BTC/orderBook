import React from "react";
import { Link } from "react-router-dom";

export default function SupplierHub() {
  return (
    <div className="supplier-hub-container flex flex-col items-start px-14">
      <div className="top-row flex justify-between items-center w-full mt-12">
        <p className="text-3xl text-center ">Supplier Hub</p>
        <div className="settings-and-help-container flex items-center gap-3">
          <button className="border rounded border-grey-light opacity-75 py-4 px-8 ">Help</button>
          <button className="border rounded border-grey-light opacity-75 py-4 px-4 ">
            <img src="setting.png" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="cards-grid grid grid-cols-3 grid-rows-2 gap-8 mt-16 ">
        <div className="generate-request-container p-8 rounded-2xl items-center flex flex-col h-400px justify-between">
          <div className="top-contents flex flex-col items-center">
            <div className="card-image-container rounded-full bg-blue-300 ">
              <img src="distribution.png" className="w-24 p-4" />
            </div>
            <div className="request-title mt-4 flex flex-col gap-4">
              <p className="text-2xl text-center font-bold ">Create a Distribution Request</p>
              <p className="text-center font-light text-sm">
                Enter details about your product and price. Other parties may counter-offer. Once an agreement is reached,
                your order will be moved to the logistics book where it can be fulfilled.
              </p>
            </div>
          </div>
          <Link to="/supplier-generate-step-one">
            <button className="card-btn mt-8 border rounded border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
              Enter
            </button>
          </Link>
        </div>
        <div className="view-sent-distribution-requests-container  p-8 rounded-2xl items-center flex flex-col h-400px justify-between">
          <div className="top-contents flex flex-col items-center">
            <div className="card-image-container rounded-full bg-rose-300 ">
              <img src="browse.png" className="w-24 p-4" />
            </div>
            <div className="view-requests-title mt-4 flex flex-col gap-4">
              <p className="text-2xl text-center font-bold ">
                View Sent <br></br>Requests
              </p>
              <p className="text-center font-light text-sm">
                See the orders you have previously sent. You can choose to cancel or alter details here.
              </p>
            </div>
          </div>
          <Link to="/supplier-orders">
            <button className="card-btn mt-8 border rounded border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
              Enter
            </button>
          </Link>
        </div>
        <div className="view-orders-request-container p-8 rounded-2xl items-center flex flex-col h-400px justify-between">
          <div className="top-contents flex flex-col items-center">
            <div className="card-image-container rounded-full bg-yellow-100">
              <img src="orders.png" className="w-24 p-4" />
            </div>
            <div className="orders-title mt-4 flex flex-col gap-4">
              <p className="text-2xl text-center font-bold ">View Incoming Purchase Orders</p>
              <p className="text-center font-light text-sm">
                View orders that warehouses have sent to you. You can agree to the order terms or propose a counter offer.
                Once accepted the order will be pushed to the logistics book for fulfillment.
              </p>
            </div>
          </div>
          <Link to="/warehouse-orders">
            <button className="card-btn mt-8 border rounded border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
              Enter
            </button>
          </Link>
        </div>
      </div>
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
