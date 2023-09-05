import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function WarehousingHub() {
  return (
    <div className="page-container flex bg-gray-100">
      <div className="warehouse-hub-container flex flex-col items-start px-24 mr-auto w-10/12  bg-gray-100">
        <div className="top-row flex justify-between items-center w-full mt-12  border-b-gray-300 border-b pb-4">
          <p className="text-3xl text-center ">Warehousing Hub</p>
          <div className="settings-and-help-container flex items-center gap-3">
            <button className="border rounded border-gray-300   opacity-75 py-4 px-8 ">Help</button>
            <button className="border rounded border-gray-300  opacity-75 py-4 px-4 ">
              <img src="setting.png" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="cards-grid grid grid-cols-3 grid-rows-2 gap-8 mt-16 w-full justify-items-center ">
          <div className="generate-request-container p-8 rounded-2xl items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-slate-300">
                <img src="create-order.png" className="w-24 p-4" />
              </div>
              <div className="request-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">Create a Purchase Request</p>
                <p className="text-center font-light text-lg">
                  Enter details about your warehousing needs and issue an order to a supplier. They may counter-offer. Once
                  an agreement is reached, your order will be moved to the logistics book where it can be fulfilled.
                </p>
              </div>
            </div>
            <button className="card-btn mt-8 border rounded border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
              Enter
            </button>
          </div>
          <div className="view-requests-container  p-8 rounded-2xl items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-orange-200">
                <img src="browse.png" className="w-24 p-4" />
              </div>
              <div className="view-requests-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">View Distribution Requests</p>
                <p className="text-center font-light text-lg">
                  See what suppliers are trying to push. You can counter-offer with your own bid. If you come to an agreement
                  the order will be pushed to the logistics book to be filled.
                </p>
              </div>
            </div>
            <button className="card-btn mt-8 border rounded border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
              Enter
            </button>
          </div>
          <div className=" view-orders-request-container p-8 rounded-2xl items-center flex flex-col justify-between">
            <div className="top-contents flex flex-col items-center">
              <div className="card-image-container rounded-full bg-emerald-300">
                <img src="orders.png" className="w-24 p-4" />
              </div>
              <div className="orders-title  mt-4 flex flex-col gap-12">
                <p className="text-2xl text-center font-bold ">View Your Orders</p>
                <p className="text-center font-light text-lg">
                  See both open and closed orders. You can also see logistic information and financial data surrounding the
                  transaction.
                </p>
              </div>
            </div>
            <button className="card-btn mt-8 border rounded border-green-500 opacity-75 py-4 px-24 transition-all duration-[250ms] ease-out">
              Enter
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
