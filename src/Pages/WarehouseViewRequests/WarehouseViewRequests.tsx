import React from "react";
import { Link } from "react-router-dom";

export default function WarehouseViewRequests() {
  return (
    <div className="step-two-container text-start flex flex-col items-center justify-center font-light">
      <div className="enter-manufacture-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center mb-6">Lityer Supplier Requests</div>
        <div className="request-headers grid grid-cols-4 grid-rows-1 gap-4 mb-4 text-center text-xs font-bold">
          <div className="supplier-name flex justify-center items-center ">Supplier Name</div>
          <div className="supplier-item flex justify-center items-center">Product</div>
          <div className="supplie-quantity flex justify-center items-center">Quantity</div>
          <div className="view-more-btn flex justify-center items-center">Details</div>
        </div>
        <div className="example-request grid grid-cols-4 grid-rows-1 gap-4 text-center">
          <div className="supplier-name flex justify-center items-center">Franks's Fruit</div>
          <div className="supplier-item flex justify-center items-center">Banana</div>
          <div className="supplie-quantity flex justify-center items-center">50</div>
          <div className="view-more-btn flex justify-center items-center">Details</div>
        </div>
        <div className="example-request grid grid-cols-4 grid-rows-1 gap-4 text-center mt-4">
          <div className="supplier-name flex justify-center items-center">Terry's</div>
          <div className="supplier-item flex justify-center items-center">Scooter</div>
          <div className="supplie-quantity flex justify-center items-center">14</div>
          <div className="view-more-btn flex justify-center items-center">Details</div>
        </div>
      </div>
    </div>
  );
}
