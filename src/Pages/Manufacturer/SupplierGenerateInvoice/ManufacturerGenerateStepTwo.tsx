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
} from "../../../redux/supplierToWarehouse";
export default function ManufacturerGenerateStepTwo() {
  const {
    productName,
    productId,
    productQuantity,
    pricePerUnit,
    productSubTotal,
    productEstimatedTax,
    productEstimatedTotal,
  } = useSelector((state: RootState) => state.warehouse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProductSubtotal(pricePerUnit * productQuantity));
  }, [pricePerUnit, productQuantity]);

  useEffect(() => {
    dispatch(updateProductEstimatedTax(productSubTotal * 0.08));
  }, [productSubTotal]);

  useEffect(() => {
    dispatch(updateProductEstimatedTotal(productSubTotal + productEstimatedTax));
  }, [productEstimatedTax, productSubTotal]);
  console.log(pricePerUnit, productQuantity, productSubTotal);
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
            value={productName}
            onChange={(e) => dispatch(updateProductName(e.target.value))}
          />
        </div>
        <div className="shipment-field-two mt-4 flex justify-between items-center gap-1">
          <div>Product ID</div>
          <input
            className="manufacture-input"
            type="text"
            value={productId}
            onChange={(e) => dispatch(updateProductId(e.target.value))}
          />
        </div>
        <div className="shipment-field-three mt-4 flex justify-between items-center gap-1">
          <div>Quantity</div>
          <input
            className="manufacture-input"
            type="number"
            value={productQuantity}
            onChange={(e) => dispatch(updateProductQuantity(parseFloat(e.target.value)))}
          />
        </div>
        <div className="shipment-field-four mt-4 flex justify-between items-center gap-1">
          <div>Price per unit</div>
          <input
            className="manufacture-input"
            type="number"
            value={pricePerUnit}
            onChange={(e) => dispatch(updatePricePerUnit(parseFloat(e.target.value)))}
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
        <div className="next-logistics flex justify-center items-center">
          <Link to="/ManufacturerGenerateStepThree">
            <button className="manufacture-submit-btn px-8 py-4 rounded-2xl">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
