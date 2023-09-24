import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { nanoid } from "@reduxjs/toolkit";
import { updateAcceptedOrders } from "../../redux/viewAcceptedOrders";
import { updateOpenRequests } from "../../redux/viewOpenDistributionRequests";
export default function SupplierOrders() {
  const { openRequests } = useSelector((state: RootState) => state.warehouseView);
  const { acceptedOrders } = useSelector((state: RootState) => state.acceptedDeals);

  const dispatch = useDispatch();

  function handleWarehouseAccept(arr: Array<any>, id: any, i: number) {
    dispatch(updateAcceptedOrders([...acceptedOrders, openRequests[i]]));

    let newArray = arr.filter((obj) => {
      return obj.wTSorderId !== id;
    });

    dispatch(updateOpenRequests(newArray));
    console.log(acceptedOrders, openRequests);
  }

  return (
    <div className="flex flex-col px-6 font-light">
      {openRequests.map((item, i) => (
        <div className="open-order-card px-8 py-4 flex flex-col mt-4 rounded-2xl">
          <h1 className="text-center font-bold">Order #{i}</h1>
          <div className="flex justify-between mt-4">
            <p>Warehouse Name</p>
            <p>{openRequests[i].name}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse ID</p>
            <p>{openRequests[i].id}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse Address</p>
            <p>{openRequests[i].address}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Name</p>
            <p>{openRequests[i].productName}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product ID</p>
            <p>{openRequests[i].productId}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Estimated Total</p>
            <p>{openRequests[i].productEstimatedTotal}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Logistics Estimated Total</p>
            <p>{openRequests[i].logisticsEstimatedTotal}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Estimated Grand Total</p>
            <p>{(openRequests[i].productEstimatedTotal + openRequests[0].logisticsEstimatedTotal).toFixed(2)}</p>
          </div>
          <div className=" flex justify-center items-center mt-4">
            <button
              className="supplier-accepts-button"
              onClick={() => handleWarehouseAccept(openRequests, openRequests[i].wTSorderId, i)}
            >
              Accept Transaction
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
