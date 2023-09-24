import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateLogisticsDeliveryOrders } from "../../redux/viewLogisticsDeliveryOrders";
import { updateAcceptedOrders } from "../../redux/viewAcceptedOrders";

export default function LogisticsPotentialOrders() {
  const { logisticsDeliveryOrders } = useSelector((state: RootState) => state.logisticsDeliveryDeals);
  const { acceptedOrders } = useSelector((state: RootState) => state.acceptedDeals);
  const dispatch = useDispatch();

  function handleLogisticsAccept(arr: Array<any>, id: any, i: number) {
    dispatch(updateLogisticsDeliveryOrders([...logisticsDeliveryOrders, acceptedOrders[i]]));

    let newArray = arr.filter((obj) => {
      return obj.wTSorderId != id;
    });

    dispatch(updateAcceptedOrders(newArray));
  }
  return (
    <div className="flex flex-col px-6 font-light">
      {acceptedOrders.map((item, i) => (
        <div key={acceptedOrders[i].wTSorderId} className="open-order-card px-8 py-4 flex flex-col mt-4 rounded-2xl">
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

          <button
            className="supplier-accepts-btn"
            onClick={() => handleLogisticsAccept(acceptedOrders, acceptedOrders[i].wTSorderId, i)}
          >
            Accept Delivery
          </button>
        </div>
      ))}
    </div>
  );
}
