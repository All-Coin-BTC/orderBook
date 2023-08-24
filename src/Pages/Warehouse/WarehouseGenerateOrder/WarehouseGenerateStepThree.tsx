import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";

import {
  updateWTSLogisticsSubtotal,
  updateWTSLogisticsEstimatedTax,
  updateWTSLogisticsEstimatedTotal,
  updateWTSSupplierLocation,
  updateWTSWarehouseLocation,
  updateWTSTotalMileage,
  updateWTSMaximumAcceptableDeliveryTime,
  updateWTSLogisticsProviderPremium,
} from "../../../redux/warehouseView/WarehouseToSupplier";
export default function WarehouseGenerateStepThree() {
  const {
    wTStotalMileage,
    wTSlogisticsProviderPremium,
    wTSlogisticsSubtotal,
    wTSlogisticsEstimatedTax,
    wTSsupplierLocation,

    wTSwarehouseLocation,
    wTSmaximumAcceptableDeliveryTime,
    wTSlogisticsEstimatedTotal,
  } = useSelector((state: RootState) => state.warehouseToSupplier);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateWTSLogisticsSubtotal(wTStotalMileage * 2 + wTSlogisticsProviderPremium));
  }, [wTStotalMileage, wTSlogisticsProviderPremium]);

  useEffect(() => {
    dispatch(updateWTSLogisticsEstimatedTax(wTSlogisticsSubtotal * 0.08));
  }, [wTSlogisticsSubtotal]);

  useEffect(() => {
    dispatch(updateWTSLogisticsEstimatedTotal(wTSlogisticsSubtotal + wTSlogisticsEstimatedTax));
  }, [wTSlogisticsEstimatedTax, wTSlogisticsSubtotal]);

  return (
    <div className="step-three-container text-start flex flex-col items-center justify-center font-light text-sm">
      <div className="enter-logistics-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Step 3</div>
        <div className="subtitle text-lg font-light text-center">Enter Logistics Details</div>
        <div className="logistics-field-one mt-4 flex justify-between items-center gap-1">
          <div>Warehouse Location (Your Address)</div>
          <input
            className="logistics-input"
            type="text"
            value={wTSwarehouseLocation}
            onChange={(e) => dispatch(updateWTSWarehouseLocation(e.target.value))}
          />
        </div>
        <div className="logistics-field-two mt-4 flex justify-between items-center gap-1">
          <div>Supplier Location</div>
          <input
            className="logistics-input"
            type="text"
            value={wTSsupplierLocation}
            onChange={(e) => dispatch(updateWTSSupplierLocation(e.target.value))}
          />
        </div>
        <div className="logistics-field-three mt-4 flex justify-between items-center gap-1">
          <div>Total Miles</div>
          <input
            className="logistics-input"
            type="number"
            value={wTStotalMileage}
            onChange={(e) => dispatch(updateWTSTotalMileage(parseFloat(e.target.value)))}
          />
        </div>
        <div className="logistics-field-four mt-4 flex justify-between items-center gap-1">
          <div>Maximum Delivery Time</div>
          <input
            className="logistics-input"
            type="number"
            value={wTSmaximumAcceptableDeliveryTime}
            onChange={(e) => dispatch(updateWTSMaximumAcceptableDeliveryTime(parseFloat(e.target.value)))}
          />
        </div>
        <div className="logistics-field-five mt-4 flex justify-between items-center gap-1">
          <div>Logistics Provider Premium</div>
          <input
            className="logistics-input"
            type="number"
            value={wTSlogisticsProviderPremium}
            onChange={(e) => dispatch(updateWTSLogisticsProviderPremium(parseFloat(e.target.value)))}
          />
        </div>
        <div className="logistics-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>${wTSlogisticsSubtotal.toFixed(2)}</div>
        </div>
        <div className="logistics-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>${wTSlogisticsEstimatedTax.toFixed(2)}</div>
        </div>
        <div className="logistics-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${wTSlogisticsEstimatedTotal.toFixed(2)}</div>
        </div>
        <div className="next-logistics flex justify-center items-center">
          <Link to="/warehouse-review-page">
            <button className="manufacture-submit-btn px-8 py-4 rounded-2xl">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
