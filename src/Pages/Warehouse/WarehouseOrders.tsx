import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { nanoid } from "@reduxjs/toolkit";
export default function WarehouseOrders() {
  const { openBuyRequests } = useSelector((state: RootState) => state.supplierView);

  return (
    <div className="flex flex-col px-6 font-light">
      {openBuyRequests.map((item, i) => (
        <div className="open-order-card px-8 py-4 flex flex-col mt-4 rounded-2xl">
          <h1 className="text-center font-bold">Order #{i}</h1>
          <div className="flex justify-between mt-4">
            <p>Warehouse Name</p>
            <p>{openBuyRequests[i].wTSname}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse ID</p>
            <p>{openBuyRequests[i].wTSsupplierId}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse Address</p>
            <p>{openBuyRequests[i].wTSaddress}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Name</p>
            <p>{openBuyRequests[i].wTSproductName}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product ID</p>
            <p>{openBuyRequests[i].wTSproductId}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Estimated Total</p>
            <p>{openBuyRequests[i].wTSproductEstimatedTotal}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Logistics Estimated Total</p>
            <p>{openBuyRequests[i].wTSlogisticsEstimatedTotal}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Estimated Grand Total</p>
            <p>{(openBuyRequests[i].wTSproductEstimatedTotal + openBuyRequests[0].wTSlogisticsEstimatedTotal).toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
