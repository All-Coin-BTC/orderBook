import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  updateWTSProductSubtotal,
  updateWTSProductEstimatedTax,
  updateWTSProductEstimatedTotal,
  updateWTSProductName,
  updateWTSProductId,
  updateWTSProductQuantity,
  updateWTSPricePerUnit,
} from "../../../redux/warehouseView/WarehouseToSupplier";
export default function WarehouseGenerateStepTwo() {
  const {
    wTSname,
    wTSsupplierId,
    wTSaddress,
    wTSpricePerUnit,
    wTSproductQuantity,
    wTSproductSubTotal,
    wTSproductEstimatedTax,
    wTSproductName,
    wTSproductId,
    wTSproductEstimatedTotal,
  } = useSelector((state: RootState) => state.warehouseToSupplier);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateWTSProductSubtotal(wTSpricePerUnit * wTSproductQuantity));
  }, [wTSpricePerUnit, wTSproductQuantity]);

  useEffect(() => {
    dispatch(updateWTSProductEstimatedTax(wTSproductSubTotal * 0.08));
  }, [wTSproductSubTotal]);

  useEffect(() => {
    dispatch(updateWTSProductEstimatedTotal(wTSproductSubTotal + wTSproductEstimatedTax));
  }, [wTSproductEstimatedTax, wTSproductSubTotal]);

  return (
    <div className="step-two-container text-start flex flex-col items-center justify-center font-light">
      <div className="enter-manufacture-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Step 2</div>
        <div className="subtitle text-lg font-light text-center">Enter Product Shipment Details</div>
        <div className="shipment-field-one mt-4 flex justify-between items-center gap-1">
          <div>Product Name</div>
          <input
            className="manufacture-input"
            type="text"
            value={wTSproductName}
            onChange={(e) => dispatch(updateWTSProductName(e.target.value))}
          />
        </div>
        <div className="shipment-field-two mt-4 flex justify-between items-center gap-1">
          <div>Product ID</div>
          <input
            className="manufacture-input"
            type="text"
            value={wTSproductId}
            onChange={(e) => dispatch(updateWTSProductId(e.target.value))}
          />
        </div>
        <div className="shipment-field-three mt-4 flex justify-between items-center gap-1">
          <div>Quantity</div>
          <input
            className="manufacture-input"
            type="number"
            value={wTSproductQuantity}
            onChange={(e) => dispatch(updateWTSProductQuantity(parseFloat(e.target.value)))}
          />
        </div>
        <div className="shipment-field-four mt-4 flex justify-between items-center gap-1">
          <div>Price per unit</div>
          <input
            className="manufacture-input"
            type="number"
            value={wTSpricePerUnit}
            onChange={(e) => dispatch(updateWTSPricePerUnit(parseFloat(e.target.value)))}
          />
        </div>
        <div className="shipment-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>${wTSproductSubTotal.toFixed(2)}</div>
        </div>
        <div className="shipment-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>${wTSproductEstimatedTax.toFixed(2)}</div>
        </div>
        <div className="shipment-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${wTSproductEstimatedTotal.toFixed(2)}</div>
        </div>
        <div className="next-logistics flex justify-center items-center">
          <Link to="/warehouse-generate-step-three">
            <button className="manufacture-submit-btn px-8 py-4 rounded-2xl">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
