import React from "react";
import { Link } from "react-router-dom";

export default function ChooseRole() {
  return (
    <div>
      <div className="roles-title text-4xl text-center font-bold mt-8 ">
        Choose the role that best describes you
      </div>
      <div className="roles-container grid grid-cols-2 grid-rows-2 gap-4 p-2 mt-4">
        <div className="role-container text-center p-4 ">
          <p className="text-lg font-semibold">Customer</p>
          <p className="text-sm font-light">Purchase products</p>
        </div>
        <div className="role-container text-center p-4 ">
          <p className="text-lg font-semibold">Warehouse</p>
          <p className="text-sm font-light">List products on order book</p>
        </div>
        <Link to="/manufacturer-hub">
          <div className="role-container text-center p-4 ">
            <p className="text-lg font-semibold">Manufacturer</p>
            <p className="text-sm font-light">Issue invoices for products</p>
          </div>
        </Link>

        <div className="role-container text-center p-4 ">
          <p className="text-lg font-semibold">Logistics</p>
          <p className="text-sm font-light">
            Complete deliveries and issue invoices
          </p>
        </div>
      </div>
    </div>
  );
}
