import React from "react";

export default function ManufacturerHub() {
  return (
    <div className="manufacturer-hub-container flex flex-col items-center">
      <div className="manufacturer-title mt-8">
        <p className="text-3xl text-center ">Welcome to the Manufacturer Hub</p>
      </div>
      <div className="issue-invoice-container mt-8 text-center">
        <div className="issue-invoice-title text-3xl font-semibold">
          Issue Invoice
        </div>
        <div className="issue-invoice-subtitle text-sm font-light">
          Send out the proper invoices for products
        </div>
        <div className="detail-1-container flex items-center mt-4 gap-2 justify-between">
          <div className="detail-1 ">Item Name</div>
          <div className="detail-1-input">
            <input type="text" placeholder="Enter item name" />
          </div>
        </div>
        <div className="detail-2-container flex items-center mt-4 gap-2 justify-between">
          <div className="detail-2 ">Quantity</div>
          <div className="detail-2-input">
            <input type="text" placeholder="Enter number of items" />
          </div>
        </div>
        <div className="detail-3-container flex items-center mt-4 gap-2 justify-between">
          <div className="detail-3 ">Unit Price</div>
          <div className="detail-3-input">
            <input type="text" placeholder="Enter price per unit" />
          </div>
        </div>
        <div className="subtotal-container flex items-center mt-8 gap-2 justify-between">
          <div className="subtotal ">Subtotal</div>
          <div className="subtotal-display">$6.34</div>
        </div>
        <div className="tax-container flex items-center mt-8 gap-2 justify-between">
          <div className="tax ">Tax(0%)</div>
          <div className="tax-display">$0.00</div>
        </div>
        <div className="total-container flex items-center mt-8 gap-2 justify-between border-t pt-4">
          <div className="total ">Total</div>
          <div className="total-display">$6.34</div>
        </div>
        <div className="issue-invoice-container">
          <button className="issue-invoice-btn">Issue Invoice</button>
        </div>
      </div>
    </div>
  );
}
