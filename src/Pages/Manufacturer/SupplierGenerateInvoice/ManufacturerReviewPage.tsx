import React from "react";
import { Link } from "react-router-dom";

export default function ManufacturerReviewPage() {
  return (
    <div className="review-container text-start flex flex-col items-center justify-center font-light text-sm">
      <div className="review-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Review</div>
        <div className="subtitle text-lg font-light text-center">Validate Transaction Details</div>
        <div className="text-center font-bold mt-4 ">Warehouse Details</div>
        <div className="review-field-one mt-4 flex justify-between items-center gap-1">
          <div>Recipient Name</div>
          <div></div>
        </div>
        <div className="review-field-two mt-4 flex justify-between items-center gap-1">
          <div>Recipient ID</div>
        </div>
        <div className="review-field-three mt-4 flex justify-between items-center gap-1">
          <div>Recipient Address</div>
        </div>
        <div className="review-field-four mt-4 flex justify-between items-center gap-1">
          <div>Product Name</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Product ID</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Quantity</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Price / Unit</div>
        </div>
        <div className="review-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>$49.99</div>
        </div>
        <div className="review-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>$2.99</div>
        </div>
        <div className="review-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${(49.99 + 2.99).toFixed(2)}</div>
        </div>

        <div className="text-center font-bold mt-4 ">Logistics Details</div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Trip Distance</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Logistics Provider Premium</div>
        </div>
        <div className="review-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>$49.99</div>
        </div>
        <div className="review-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>$2.99</div>
        </div>
        <div className="review-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${(49.99 + 2.99).toFixed(2)}</div>
        </div>
        <div className="next-logistics flex justify-center items-center">
          <Link to="/manufacturer-complete-invoice">
            <button className="manufacture-submit-btn px-8 py-4 rounded-2xl">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
