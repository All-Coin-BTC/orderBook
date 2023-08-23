import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

export default function WarehouseViewRequests() {
  const { openRequests } = useSelector((state: RootState) => state.warehouseView);

  return (
    <div className="text-start flex flex-col items-center justify-center font-light">
      <div className="enter-manufacture-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center mb-6">Lityer Supplier Requests</div>
        <div className="request-headers grid grid-cols-4 grid-rows-1 gap-4 mb-4 text-center text-xs font-bold">
          <div className="supplier-name flex justify-center items-center ">Supplier Name</div>
          <div className="supplier-item flex justify-center items-center">Product</div>
          <div className="supplie-quantity flex justify-center items-center">Quantity</div>
          <div className="view-more-btn flex justify-center items-center">Details</div>
        </div>

        {openRequests.map((item, i) => (
          <div className="open-order-card flex flex-col mt-4 rounded-2xl">
            <div className="example-request grid grid-cols-4 grid-rows-1 gap-4 text-center">
              <div className="supplier-name flex justify-center items-center">{openRequests[i].name}</div>
              <div className="supplier-item flex justify-center items-center">{openRequests[i].productName}</div>
              <div className="supplier-quantity flex justify-center items-center">{openRequests[i].productQuantity}</div>
              <div className="view-more-btn flex justify-center items-center">Details</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
