import React from "react";
import { Link } from "react-router-dom";

export default function ManufacturerGenerateStepThree() {
  return (
    <div className="step-three-container text-start flex flex-col items-center justify-center font-light text-sm">
      <div className="enter-logistics-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Step 3</div>
        <div className="subtitle text-lg font-light text-center">Enter Logistics Details</div>
        <div className="logistics-field-one mt-4 flex justify-between items-center gap-1">
          <div>Supplier Location (Your Address)</div>
          <input className="logistics-input" />
        </div>
        <div className="logistics-field-two mt-4 flex justify-between items-center gap-1">
          <div>Warehouse Location (Recipient Address)</div>
          <input className="logistics-input" />
        </div>
        <div className="logistics-field-three mt-4 flex justify-between items-center gap-1">
          <div>Total Miles</div>
          <input className="logistics-input" />
        </div>
        <div className="logistics-field-four mt-4 flex justify-between items-center gap-1">
          <div>Maximum Delivery Time</div>
          <input className="logistics-input" />
        </div>
        <div className="logistics-field-five mt-4 flex justify-between items-center gap-1">
          <div>Logistics Provider Premium</div>
          <input className="logistics-input" />
        </div>
        <div className="logistics-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>$49.99</div>
        </div>
        <div className="logistics-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>$2.99</div>
        </div>
        <div className="logistics-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${(49.99 + 2.99).toFixed(2)}</div>
        </div>
        <div className="next-logistics flex justify-center items-center">
          <Link to="/ManufacturerReviewPage">
            <button className="manufacture-submit-btn px-8 py-4 rounded-2xl">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
