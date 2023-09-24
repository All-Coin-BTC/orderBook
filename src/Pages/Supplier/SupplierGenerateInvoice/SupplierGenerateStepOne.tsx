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
  const { name, id, address } = useSelector((state: RootState) => state.supplier);

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

              <h3 className="subtitle text-[1rem] font-light"> Enter Receiving Warehouse Details</h3>
            </div>
            <div className="font-light flex flex-col space-y-4 justify-between items-start gap-1">
              {/* <div className="w-full flex flex-col space-y-3 items-start"> */}
              {/* <h3 className="text-gray-700 text-[1.1rem] font-semibold">Warehouse Name</h3> */}
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                type="text"
                placeholder="Warehouse Name"
                value={name}
                onChange={(e) => dispatch(updateWarehouseName(e.target.value))}
              />
              {/* </div> */}
              {/* <div className="warehouse-field-two font-light flex justify-between items-center mt-4 gap-1"> */}
              {/* <div>Warehouse ID</div> */}
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                placeholder="Warehouse ID"
                type="text"
                value={id}
                onChange={(e) => dispatch(updateWarehouseId(e.target.value))}
              />
              {/* </div> */}
              {/* <div className="warehouse-field-two font-light flex justify-between items-center mt-4 gap-1"> */}
              {/* <div>Warehouse Street Address</div> */}
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                placeholder="Ware Street Address"
                type="text"
                onChange={(e) => dispatch(updateWarehouseAddress(e.target.value))}
              />
            </div>
          </div>
          <div className="justify- w-full pb-10">
            <Link to="/supplier-generate-step-two">
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
