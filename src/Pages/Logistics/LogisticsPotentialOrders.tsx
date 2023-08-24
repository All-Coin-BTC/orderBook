import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function LogisticsPotentialOrders() {
  const { acceptedOrders } = useSelector((state: RootState) => state.acceptedDeals);
  return (
    <div className="flex flex-col px-6 font-light">
      {acceptedOrders.map((item, i) => (
        <div className="open-order-card px-8 py-4 flex flex-col mt-4 rounded-2xl">
          <h1 className="text-center font-bold">Order #{i}</h1>
          <div className="flex justify-between mt-4">
            <p>Supplier Name</p>
            <p>{acceptedOrders[i].wTSname}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Supplier Address</p>
            <p>{acceptedOrders[i].wTSsupplierLocation}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse Name</p>
            <p>{acceptedOrders[i].wTSWarehouseName}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse Address</p>
            <p>{acceptedOrders[i].wTSwarehouseLocation}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Name</p>
            <p>{acceptedOrders[i].wTSproductName}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Total Mileage</p>
            <p>{acceptedOrders[i].wTStotalMileage}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Logistics Premium</p>
            <p>{acceptedOrders[i].wTSlogisticsProviderPremium}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Logistics Estimated Total</p>
            <p>{acceptedOrders[i].wTSlogisticsEstimatedTotal}</p>
          </div>

          <div className=" flex justify-center items-center mt-4">Accept Delivery</div>
        </div>
      ))}
    </div>
  );
}
