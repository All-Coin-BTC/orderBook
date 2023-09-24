import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  updateProductName,
  updateProductId,
  updateProductQuantity,
  updatePricePerUnit,
  updateProductSubtotal,
  updateProductEstimatedTax,
  updateProductEstimatedTotal,
} from "../../../redux/supplierView/supplierToWarehouse";
export default function SupplierGenerateStepTwo() {
  const {
    productName,
    productId,
    productQuantity,
    pricePerUnit,
    productSubTotal,
    productEstimatedTax,
    productEstimatedTotal,
  } = useSelector((state: RootState) => state.supplier);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProductSubtotal(pricePerUnit * productQuantity));
  }, [pricePerUnit, productQuantity]);

  useEffect(() => {
    dispatch(updateProductEstimatedTax(productSubTotal * 0.08));
  }, [productSubTotal]);

  useEffect(() => {
    dispatch(
      updateProductEstimatedTotal(productSubTotal + productEstimatedTax)
    );
  }, [productEstimatedTax, productSubTotal]);
  console.log(pricePerUnit, productQuantity, productSubTotal);
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
              <h1 className="mt-6 title text-2xl font-semibold">Step 2</h1>
              <h3 className="subtitle text-[1rem] font-light">
                Enter Product Shipment Details
              </h3>
            </div>

            <div className="font-light flex flex-col space-y-4 justify-between items-start gap-1">
              {/* <div>Product Name</div> */}
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                // className="manufacture-input"
                placeholder="Product name"
                type="text"
                value={productName}
                onChange={(e) => dispatch(updateProductName(e.target.value))}
              />
              {/* <div className="shipment-field-two mt-4 flex justify-between items-center gap-1"> */}
              {/* <div>Product ID</div> */}
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                // className="manufacture-input"
                placeholder="Product ID"
                type="text"
                value={productId}
                onChange={(e) => dispatch(updateProductId(e.target.value))}
              />
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                // className="manufacture-input"
                placeholder="Quantity"
                type="number"
                value={productQuantity}
                onChange={(e) =>
                  dispatch(updateProductQuantity(parseFloat(e.target.value)))
                }
              />
              <input
                className="text-[0.9rem] px-3 text-left border placeholder:text-gray-600 border-gray-400 bg-white shadow-sm"
                // className="manufacture-input"
                placeholder="Price Per Unit"
                type="number"
                value={pricePerUnit}
                onChange={(e) =>
                  dispatch(updatePricePerUnit(parseFloat(e.target.value)))
                }
              />
            </div>
            <div className="shipment-subtotal mt-4 flex justify-between items-center gap-1">
              <div>Subtotal</div>
              <div>${productSubTotal.toFixed(2)}</div>
            </div>
            <div className="shipment-estimated-tax mt-4 flex justify-between items-center gap-1">
              <div>Estimated Tax</div>
              <div>${productEstimatedTax.toFixed(2)}</div>
            </div>
            <div className="shipment-total mt-4 flex justify-between items-center gap-1 border-t py-8">
              <div>Estimated Total</div>
              <div>${productEstimatedTotal.toFixed(2)}</div>
            </div>
            <div className="w-full pb-10">
              <Link to="/supplier-generate-step-three">
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
        {/* Form Close */}
        {/* image */}
        <div className="sm:inline-flex hidden h-full w-full">
          <img
            src="https://cdn.leonardo.ai/users/bbc6548d-60b8-4166-9742-86b290ee2135/generations/efe68df2-8be0-468a-8dba-ee17e37fa455/3D_Animation_Style_shipment_taking_place_from_a_truck_to_the_w_3.jpg"
            alt="WareHouse"
            className="h-[80%] m-auto w-[100%] rounded-md object-cover"
          />
        </div>
      </div>
      {/* Main Container Close */}
    </div>
  );
}
