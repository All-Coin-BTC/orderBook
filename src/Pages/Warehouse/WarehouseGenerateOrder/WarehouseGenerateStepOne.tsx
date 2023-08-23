import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { updateWTSSupplierName, updateWTSsupplierId } from "../../../redux/warehouseView/WarehouseToSupplier";
export default function WarehouseGenerateStepOne() {
  const { wTSname, wTSsupplierId, wTSaddress } = useSelector((state: RootState) => state.warehouseToSupplier);

  const dispatch = useDispatch();
  return (
    <div className="step-one-container text-start flex flex-col items-center justify-center">
      <div className="enter-supplier-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Step 1</div>
        <div className="subtitle text-lg font-light text-center">
          Enter the Details of the Supplier you are Ordering From
        </div>
        <div className="supplier-field-one font-light flex justify-between items-center mt-4 gap-1">
          <div>Supplier Name</div>
          <input
            className="supplier-input"
            type="text"
            value={wTSname}
            onChange={(e) => dispatch(updateWTSSupplierName(e.target.value))}
          />
        </div>
        <div className="warehouse-field-two font-light flex justify-between items-center mt-4 gap-1">
          <div>Supplier ID</div>
          <input
            className="warehouse-input"
            type="text"
            value={wTSsupplierId}
            onChange={(e) => dispatch(updateWTSsupplierId(e.target.value))}
          />
        </div>

        <div className="warehouse-details-submit mt-8 flex justify-center items-center">
          <Link to="/supplier-generate-step-two">
            <button className=" warehouse-submit-btn px-8 py-4 rounded-2xl">Next Step</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
