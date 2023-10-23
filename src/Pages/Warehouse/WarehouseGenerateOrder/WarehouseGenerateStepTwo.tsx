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
    dispatch(
      updateWTSProductEstimatedTotal(
        wTSproductSubTotal + wTSproductEstimatedTax
      )
    );
  }, [wTSproductEstimatedTax, wTSproductSubTotal]);

  return (
    <div className="h-[87vh] text-start sm:flex flex-col items-center justify-center">
      {/* <div className="step-two-container text-start flex flex-col items-center justify-center font-light"> */}
      {/* Main container */}
      <div
        className="sm:max-h-max sm:w-auto w-full
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
              <h1 className="title text-2xl font-semibold text-center">
                Step 2
              </h1>
              <h3 className="subtitle text-lg font-light text-center">
                Enter Product Shipment Details
              </h3>
            </div>
            <div className="font-light flex flex-col space-y-4 justify-between items-start gap-1">
              <input
                className="manufacture-input"
                placeholder="Product Name"
                type="text"
                value={wTSproductName}
                onChange={(e) => dispatch(updateWTSProductName(e.target.value))}
              />
              <input
                className="manufacture-input"
                placeholder="Product Id"
                type="text"
                value={wTSproductId}
                onChange={(e) => dispatch(updateWTSProductId(e.target.value))}
              />
              <input
                className="manufacture-input"
                placeholder="Quantity"
                type="number"
                value={wTSproductQuantity}
                onChange={(e) =>
                  dispatch(updateWTSProductQuantity(parseFloat(e.target.value)))
                }
              />
              <input
                className="manufacture-input"
                placeholder="Price per unit"
                type="number"
                value={wTSpricePerUnit}
                onChange={(e) =>
                  dispatch(updateWTSPricePerUnit(parseFloat(e.target.value)))
                }
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
            <div className="w-full pb-10">
              <Link to="/warehouse-generate-step-three">
                <button
                  className="bg-gray-900 w-full shadow-xl text-[0.8rem]
                  text-gray-300 py-2 rounded-md hover:scale-105 transition-all ease-linear"
                >
                  Next
                </button>
              </Link>
            </div>
            {/* next-logistics div close */}
          </div>
          {/* container close */}
        </div>
        {/* image */}
        <div className="sm:inline-flex hidden h-full w-full">
          <img
            src="https://cdn.leonardo.ai/users/bbc6548d-60b8-4166-9742-86b290ee2135/generations/efe68df2-8be0-468a-8dba-ee17e37fa455/3D_Animation_Style_shipment_taking_place_from_a_truck_to_the_w_3.jpg"
            alt="WareHouse"
            className="h-[80%] m-auto w-[100%] rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
