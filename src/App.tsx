import React, { useState } from "react";
import Homepage from "./Pages/Homepage";

import { Navbar } from "./Components/Navbar";
import ChooseRole from "./Pages/ChooseRole";
import { Route, Routes } from "react-router-dom";
import WarehousingHub from "./Pages/WarehousingHub";
import SupplierHub from "./Pages/SupplierHub";
import WarehouseViewRequests from "./Pages/Warehouse/WarehouseViewRequests";
import SupplierGenerateStepOne from "./Pages/Supplier/SupplierGenerateInvoice/SupplierGenerateStepOne";
import SupplierGenerateStepTwo from "./Pages/Supplier/SupplierGenerateInvoice/SupplierGenerateStepTwo";
import SupplierGenerateStepThree from "./Pages/Supplier/SupplierGenerateInvoice/SupplierGenerateStepThree";
import SupplierReviewPage from "./Pages/Supplier/SupplierGenerateInvoice/SupplierReviewPage";
import SupplierCompleteInvoice from "./Pages/Supplier/SupplierGenerateInvoice/SupplierCompleteInvoice";
import SupplierOrders from "./Pages/Supplier/SupplierOrders";
import WarehouseGenerateStepOne from "./Pages/Warehouse/WarehouseGenerateOrder/WarehouseGenerateStepOne";
import WarehouseGenerateStepTwo from "./Pages/Warehouse/WarehouseGenerateOrder/WarehouseGenerateStepTwo";
import WarehouseGenerateStepThree from "./Pages/Warehouse/WarehouseGenerateOrder/WarehouseGenerateStepThree";
import WarehouseReviewPage from "./Pages/Warehouse/WarehouseGenerateOrder/WarehouseReviewPage";
import WarehouseCompleteInvoice from "./Pages/Warehouse/WarehouseGenerateOrder/WarehouseCompleteInvoice";
import WarehouseOrders from "./Pages/Warehouse/WarehouseOrders";
import LogisticsHub from "./Pages/LogisticsHub";
import LogisticsPotentialOrders from "./Pages/Logistics/LogisticsPotentialOrders";

function App() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  return (
    <>
      <Navbar displayMobileMenu={displayMobileMenu} setDisplayMobileMenu={setDisplayMobileMenu} />
      <Routes>
        {!displayMobileMenu && <Route path="/" element={<Homepage />} />}
        {!displayMobileMenu && <Route path="/roles" element={<ChooseRole />} />}
        {!displayMobileMenu && <Route path="/supplier-hub" element={<SupplierHub />} />}
        {!displayMobileMenu && <Route path="/supplier-generate-step-one" element={<SupplierGenerateStepOne />} />}
        {!displayMobileMenu && <Route path="/supplier-generate-step-two" element={<SupplierGenerateStepTwo />} />}
        {!displayMobileMenu && <Route path="/supplier-generate-step-three" element={<SupplierGenerateStepThree />} />}
        {!displayMobileMenu && <Route path="/supplier-review-page" element={<SupplierReviewPage />} />}
        {!displayMobileMenu && <Route path="/supplier-complete-invoice" element={<SupplierCompleteInvoice />} />}
        {!displayMobileMenu && <Route path="/supplier-orders" element={<SupplierOrders />} />}
        {!displayMobileMenu && <Route path="/warehouse-hub" element={<WarehousingHub />} />}
        {!displayMobileMenu && <Route path="/warehouse-requests" element={<WarehouseViewRequests />} />}
        {!displayMobileMenu && <Route path="/warehouse-generate-step-one" element={<WarehouseGenerateStepOne />} />}
        {!displayMobileMenu && <Route path="/warehouse-generate-step-two" element={<WarehouseGenerateStepTwo />} />}
        {!displayMobileMenu && <Route path="/warehouse-generate-step-three" element={<WarehouseGenerateStepThree />} />}
        {!displayMobileMenu && <Route path="/warehouse-review-page" element={<WarehouseReviewPage />} />}
        {!displayMobileMenu && <Route path="/warehouse-complete-invoice" element={<WarehouseCompleteInvoice />} />}
        {!displayMobileMenu && <Route path="/warehouse-orders" element={<WarehouseOrders />} />}
        {!displayMobileMenu && <Route path="/logistics-hub" element={<LogisticsHub />} />}
        {!displayMobileMenu && <Route path="/logistics-potential-orders" element={<LogisticsPotentialOrders />} />}
      </Routes>
    </>
  );
}

export default App;
