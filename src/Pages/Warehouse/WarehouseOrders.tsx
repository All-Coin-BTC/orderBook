import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { nanoid } from "@reduxjs/toolkit";
import { updateAcceptedOrders } from "../../redux/viewAcceptedOrders";
import { updateOpenBuyRequests } from "../../redux/viewOpenBuyRequests";
export default function WarehouseOrders() {
  const { openBuyRequests } = useSelector((state: RootState) => state.supplierView);
  const { acceptedOrders } = useSelector((state: RootState) => state.acceptedDeals);
  const dispatch = useDispatch();

  function handleSupplierAccept(arr: Array<any>) {
    let newArray = arr.filter((obj) => {
      return obj.wTSorderId != 1;
    });

    dispatch(updateOpenBuyRequests(newArray));
  }

  return (
    <div className="flex flex-col px-6 font-light">
      {openBuyRequests.map((item, i) => (
        <div key={openBuyRequests[i].wTSorderId} className="open-order-card px-8 py-4 flex flex-col mt-4 rounded-2xl">
          <h1 className="text-center font-bold">Order #{i}</h1>
          <div className="flex justify-between mt-4">
            <p>Supplier Name</p>
            <p>{openBuyRequests[i].wTSname}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Supplier ID</p>
            <p>{openBuyRequests[i].wTSsupplierId}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Supplier Address</p>
            <p>{openBuyRequests[i].wTSsupplierLocation}</p>
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
            <p>{(openBuyRequests[i].wTSproductEstimatedTotal + openBuyRequests[i].wTSlogisticsEstimatedTotal).toFixed(2)}</p>
          </div>
          <div className=" flex justify-center items-center mt-4">
            <button className="supplier-accepts-button" onClick={() => handleSupplierAccept(openBuyRequests)}>
              Accept Transaction
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
