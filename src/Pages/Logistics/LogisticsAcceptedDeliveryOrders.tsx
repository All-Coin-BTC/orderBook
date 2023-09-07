import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateAcceptedOrders } from "../../redux/viewAcceptedOrders";
import { updateLogisticsDeliveryOrders } from "../../redux/viewLogisticsDeliveryOrders";
export default function LogisticsAcceptedDeliveryOrders() {
  const { logisticsDeliveryOrders } = useSelector((state: RootState) => state.logisticsDeliveryDeals);

  return (
    <div className="flex flex-col px-6 font-light">
      {logisticsDeliveryOrders.map((item, i) => (
        <div
          key={logisticsDeliveryOrders[i].wTSorderId}
          className="open-order-card px-8 py-4 flex flex-col mt-4 rounded-2xl"
        >
          <h1 className="text-center font-bold">Order #{i}</h1>
          <div className="flex justify-between mt-4">
            <p>Supplier Name</p>
            <p>{logisticsDeliveryOrders[i].wTSname}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Supplier Address</p>
            <p>{logisticsDeliveryOrders[i].wTSsupplierLocation}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse Name</p>
            <p>{logisticsDeliveryOrders[i].wTSWarehouseName}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Warehouse Address</p>
            <p>{logisticsDeliveryOrders[i].wTSwarehouseLocation}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Product Name</p>
            <p>{logisticsDeliveryOrders[i].wTSproductName}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Total Mileage</p>
            <p>{logisticsDeliveryOrders[i].wTStotalMileage}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Logistics Premium</p>
            <p>{logisticsDeliveryOrders[i].wTSlogisticsProviderPremium}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>Logistics Estimated Total</p>
            <p>{logisticsDeliveryOrders[i].wTSlogisticsEstimatedTotal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
