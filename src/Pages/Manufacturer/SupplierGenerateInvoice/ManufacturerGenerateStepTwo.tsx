import React from "react";
import { Link } from "react-router-dom";

export default function ManufacturerGenerateStepTwo() {
  return (
    <div className="step-two-container text-start flex flex-col items-center justify-center font-light">
      <div className="enter-manufacture-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Step 2</div>
        <div className="subtitle text-lg font-light text-center">
          Enter Product Shipment Details
        </div>
        <div className="shipment-field-one mt-4 flex justify-between items-center gap-1">
          <div>Product Name</div>
          <input className="manufacture-input" />
        </div>
        <div className="shipment-field-two mt-4 flex justify-between items-center gap-1">
          <div>Product ID</div>
          <input className="manufacture-input" />
        </div>
        <div className="shipment-field-three mt-4 flex justify-between items-center gap-1">
          <div>Quantity</div>
          <input className="manufacture-input" />
        </div>
        <div className="shipment-field-four mt-4 flex justify-between items-center gap-1">
          <div>Price per unit</div>
          <input className="manufacture-input" />
        </div>
        <div className="shipment-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>$49.99</div>
        </div>
        <div className="shipment-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>$2.99</div>
        </div>
        <div className="shipment-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${(49.99 + 2.99).toFixed(2)}</div>
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
