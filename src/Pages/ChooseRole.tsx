import React from "react";
import { Link } from "react-router-dom";

export default function ChooseRole() {
  return (
    <div>
      <div className="roles-title text-4xl text-center font-bold mt-8 ">Choose the role that best describes you</div>
      <div className="roles-container grid grid-cols-1 grid-rows-3 gap-4 p-2 mt-4">
        <Link to="/manufacturer-hub">
          <div className="role-container text-center p-4 ">
            <p className="text-lg font-semibold">Manufacturer</p>
            <p className="text-sm font-light">Create and view orders</p>
          </div>
        </Link>
        <Link to="/warehouse-hub">
          <div className="role-container text-center p-4 ">
            <p className="text-lg font-semibold">Warehouse</p>
            <p className="text-sm font-light">Restock and manage your inventory.</p>
          </div>
        </Link>

        <div className="role-container text-center p-4 ">
          <p className="text-lg font-semibold">Logistics</p>
          <p className="text-sm font-light">Accept and perform delivery requests</p>
        </div>
      </div>
    </div>
  );
}
