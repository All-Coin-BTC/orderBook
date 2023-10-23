import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  updateWTSSupplierLocation,
  updateWTSSupplierName,
  updateWTSsupplierId,
} from "../../../redux/warehouseView/WarehouseToSupplier";
export default function WarehouseGenerateStepOne() {
  const { wTSname, wTSsupplierId, wTSsupplierLocation } = useSelector(
    (state: RootState) => state.warehouseToSupplier
  );

  const dispatch = useDispatch();
  return (
    <div className="h-[87vh] text-start sm:flex flex-col items-center justify-center">
      <div
        className="sm:max-h-[500px] sm:w-auto w-full
       m-auo bg-white flex items-start space-x-6
     rounded-xl py-4 pl-8 pr-2 shadow-xl"
      >
        {/* form */}
        <div
          className="h-full sm:w-[40%] w-full px-6 flex flex-col font-extrabold 
      space-y-8 justify-between"
        >
          {/* container */}
          <div className="flex flex-col space-y-7">
            <div>
              <h1 className="mt-6 title text-2xl font-semibold">Step 1</h1>
              <h3 className="subtitle text-lg font-light text-center">
                Enter the Details of the Supplier you are Ordering From
              </h3>
            </div>
            <div className="font-light flex flex-col space-y-4 justify-between items-start gap-1">
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                type="text"
                placeholder="Supplier Name"
                value={wTSname}
                onChange={(e) =>
                  dispatch(updateWTSSupplierName(e.target.value))
                }
              />
            </div>
            <input
              className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
              type="text"
              placeholder="Supplier ID"
              value={wTSsupplierId}
              onChange={(e) => dispatch(updateWTSsupplierId(e.target.value))}
            />
            <input
              className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
              type="text"
              placeholder="Supplier Location"
              value={wTSsupplierLocation}
              onChange={(e) =>
                dispatch(updateWTSSupplierLocation(e.target.value))
              }
            />
          </div>

          <div className="justify- w-full pb-10">
            <Link to="/warehouse-generate-step-two">
              <button
                className="bg-gray-900 w-full shadow-xl text-[0.8rem]
               text-gray-300 py-2 rounded-md hover:scale-105 transition-all ease-linear"
              >
                Next Step
              </button>
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="sm:inline-flex hidden h-full w-full">
          <img
            src="https://cdn.leonardo.ai/users/bbc6548d-60b8-4166-9742-86b290ee2135/generations/efe68df2-8be0-468a-8dba-ee17e37fa455/3D_Animation_Style_shipment_taking_place_from_a_truck_to_the_w_3.jpg"
            alt="WareHouse"
            className="h-full w-[100%] rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
