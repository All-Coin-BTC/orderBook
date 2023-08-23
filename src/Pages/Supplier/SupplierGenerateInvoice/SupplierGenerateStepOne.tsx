import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  updateWarehouseName,
  updateWarehouseId,
  updateWarehouseAddress,
} from "../../../redux/supplierView/supplierToWarehouse";
export default function SupplierGenerateStepOne() {
  const { name, id, address } = useSelector((state: RootState) => state.warehouse);

  const dispatch = useDispatch();
  return (
    <div className="step-one-container text-start flex flex-col items-center justify-center">
      <div className="enter-warehouse-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Step 1</div>
        <div className="subtitle text-lg font-light text-center">Enter Receiving Warehouse Details</div>
        <div className="warehouse-field-one font-light flex justify-between items-center mt-4 gap-1">
          <div>Warehouse Name</div>
          <input
            className="warehouse-input"
            type="text"
            value={name}
            onChange={(e) => dispatch(updateWarehouseName(e.target.value))}
          />
        </div>
        <div className="warehouse-field-two font-light flex justify-between items-center mt-4 gap-1">
          <div>Warehouse ID</div>
          <input
            className="warehouse-input"
            type="text"
            value={id}
            onChange={(e) => dispatch(updateWarehouseId(e.target.value))}
          />
        </div>
        <div className="warehouse-field-two font-light flex justify-between items-center mt-4 gap-1">
          <div>Warehouse Street Address</div>
          <input
            className="warehouse-input"
            type="text"
            value={address}
            onChange={(e) => dispatch(updateWarehouseAddress(e.target.value))}
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
