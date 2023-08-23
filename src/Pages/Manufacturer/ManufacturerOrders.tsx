import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { nanoid } from "@reduxjs/toolkit";
export default function ManufacturerOrders() {
  const { openRequests } = useSelector((state: RootState) => state.warehouseView);

  return (
    <div className="flex flex-col px-6 font-light">
      {openRequests.map((item, i) => (
        <div className="open-order-card px-8 py-4 flex flex-col">
          <h1 className="text-center font-bold">Order #{i}</h1>
          <div className="flex justify-between mt-4">
            <p>Warehouse Name</p>
            <p>{openRequests[0].name}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse ID</p>
            <p>{openRequests[0].id}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse Address</p>
            <p>{openRequests[0].address}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Name</p>
            <p>{openRequests[0].productName}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product ID</p>
            <p>{openRequests[0].productId}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Estimated Total</p>
            <p>{openRequests[0].productEstimatedTotal}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Logistics Estimated Total</p>
            <p>{openRequests[0].logisticsEstimatedTotal}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Estimated Grand Total</p>
            <p>{(openRequests[0].productEstimatedTotal + openRequests[0].logisticsEstimatedTotal).toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
