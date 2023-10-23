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
    dispatch(
      updateWTSLogisticsSubtotal(
        wTStotalMileage * 2 + wTSlogisticsProviderPremium
      )
    );
  }, [wTStotalMileage, wTSlogisticsProviderPremium]);

  useEffect(() => {
    dispatch(updateWTSLogisticsEstimatedTax(wTSlogisticsSubtotal * 0.08));
  }, [wTSlogisticsSubtotal]);

  useEffect(() => {
    dispatch(
      updateWTSLogisticsEstimatedTotal(
        wTSlogisticsSubtotal + wTSlogisticsEstimatedTax
      )
    );
  }, [wTSlogisticsEstimatedTax, wTSlogisticsSubtotal]);

  return (
    <div className="h-[87vh] text-start sm:flex flex-col items-center justify-center">
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
          <div className="flex flex-col space-y-7">
            <div>
              <h1 className="title text-2xl font-semibold text-center">
                Step 3
              </h1>
              <h3 className="subtitle text-lg font-light text-center">
                Enter Logistics Details
              </h3>
            </div>
            <div className="font-light flex flex-col space-y-4 justify-between items-start gap-1">
              <input
                className="logistics-input"
                placeholder="Warehouse Location (Your Address)"
                type="text"
                value={wTSwarehouseLocation}
                onChange={(e) =>
                  dispatch(updateWTSWarehouseLocation(e.target.value))
                }
              />
              <input
                className="logistics-input"
                placeholder="Supplier Location"
                type="text"
                value={wTSsupplierLocation}
                onChange={(e) =>
                  dispatch(updateWTSSupplierLocation(e.target.value))
                }
              />
              <input
                className="logistics-input"
                placeholder="Total Miles"
                type="number"
                value={wTStotalMileage}
                onChange={(e) =>
                  dispatch(updateWTSTotalMileage(parseFloat(e.target.value)))
                }
              />
              <input
                className="logistics-input"
                placeholder="Maximum Delivery Time"
                type="number"
                value={wTSmaximumAcceptableDeliveryTime}
                onChange={(e) =>
                  dispatch(
                    updateWTSMaximumAcceptableDeliveryTime(
                      parseFloat(e.target.value)
                    )
                  )
                }
              />
              <input
                className="logistics-input"
                placeholder="Logistics Provider Premium"
                type="number"
                value={wTSlogisticsProviderPremium}
                onChange={(e) =>
                  dispatch(
                    updateWTSLogisticsProviderPremium(
                      parseFloat(e.target.value)
                    )
                  )
                }
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
            <div className="w-full pb-10">
              <Link to="/warehouse-review-page">
                <button
                  className="bg-gray-900 w-full shadow-xl text-[0.8rem]
                  text-gray-300 py-2 rounded-md hover:scale-105 transition-all ease-linear"
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
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
