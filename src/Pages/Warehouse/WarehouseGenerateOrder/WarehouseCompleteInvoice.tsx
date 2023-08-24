import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";

import { Link } from "react-router-dom";

export default function WarehouseCompleteInvoice() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Your Order has been sent successfully.</p>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
