import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";

import {
  updateSupplierLocation,
  updateWarehouseLocation,
  updateTotalMileage,
  updateMaximumAcceptableDeliveryTime,
  updateLogisticsProviderPremium,
  updateLogisticsSubtotal,
  updateLogisticsEstimatedTax,
  updateLogisticsEstimatedTotal,
} from "../../../redux/supplierView/supplierToWarehouse";
export default function SupplierGenerateStepThree() {
  const {
    supplierLocation,
    warehouseLocation,
    totalMileage,
    maximumAcceptableDeliveryTime,
    logisticsProviderPremium,
    logisticsSubtotal,
    logisticsEstimatedTax,
    logisticsEstimatedTotal,
  } = useSelector((state: RootState) => state.supplier);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLogisticsSubtotal(totalMileage * 2 + logisticsProviderPremium));
  }, [totalMileage, logisticsProviderPremium]);

  useEffect(() => {
    dispatch(updateLogisticsEstimatedTax(logisticsSubtotal * 0.08));
  }, [logisticsSubtotal]);

  useEffect(() => {
    dispatch(updateLogisticsEstimatedTotal(logisticsSubtotal + logisticsEstimatedTax));
  }, [logisticsEstimatedTax, logisticsSubtotal]);

  return (
    <div className="step-three-container text-start flex flex-col items-center justify-center font-light text-sm">
      <div className="enter-logistics-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Step 3</div>
        <div className="subtitle text-lg font-light text-center">Enter Logistics Details</div>
        <div className="logistics-field-one mt-4 flex justify-between items-center gap-1">
          <div>Supplier Location (Your Address)</div>
          <input
            className="logistics-input"
            type="text"
            value={supplierLocation}
            onChange={(e) => dispatch(updateSupplierLocation(e.target.value))}
          />
        </div>
        <div className="logistics-field-two mt-4 flex justify-between items-center gap-1">
          <div>Warehouse Location (Recipient Address)</div>
          <input
            className="logistics-input"
            type="text"
            value={warehouseLocation}
            onChange={(e) => dispatch(updateWarehouseLocation(e.target.value))}
          />
        </div>
        <div className="logistics-field-three mt-4 flex justify-between items-center gap-1">
          <div>Total Miles</div>
          <input
            className="logistics-input"
            type="number"
            value={totalMileage}
            onChange={(e) => dispatch(updateTotalMileage(parseFloat(e.target.value)))}
          />
        </div>
        <div className="logistics-field-four mt-4 flex justify-between items-center gap-1">
          <div>Maximum Delivery Time</div>
          <input
            className="logistics-input"
            type="number"
            value={maximumAcceptableDeliveryTime}
            onChange={(e) => dispatch(updateMaximumAcceptableDeliveryTime(parseFloat(e.target.value)))}
          />
        </div>
        <div className="logistics-field-five mt-4 flex justify-between items-center gap-1">
          <div>Logistics Provider Premium</div>
          <input
            className="logistics-input"
            type="number"
            value={logisticsProviderPremium}
            onChange={(e) => dispatch(updateLogisticsProviderPremium(parseFloat(e.target.value)))}
          />
        </div>
        <div className="logistics-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>${logisticsSubtotal.toFixed(2)}</div>
        </div>
        <div className="logistics-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>${logisticsEstimatedTax.toFixed(2)}</div>
        </div>
        <div className="logistics-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${logisticsEstimatedTotal.toFixed(2)}</div>
        </div>
        <div className="next-logistics flex justify-center items-center">
          <Link to="/supplier-review-page">
            <button className="manufacture-submit-btn px-8 py-4 rounded-2xl">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
