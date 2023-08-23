import React, { useState } from "react";
import Homepage from "./Pages/Homepage";

import { Navbar } from "./Components/Navbar";
import ChooseRole from "./Pages/ChooseRole";
import { Route, Routes } from "react-router-dom";

import WarehousingHub from "./Pages/WarehousingHub";
import SupplierHub from "./Pages/SupplierHub";
import WarehouseViewRequests from "./Pages/WarehouseViewRequests/WarehouseViewRequests";

import SupplierGenerateStepOne from "./Pages/Supplier/SupplierGenerateInvoice/SupplierGenerateStepOne";
import SupplierGenerateStepTwo from "./Pages/Supplier/SupplierGenerateInvoice/SupplierGenerateStepTwo";
import SupplierGenerateStepThree from "./Pages/Supplier/SupplierGenerateInvoice/SupplierGenerateStepThree";
import SupplierReviewPage from "./Pages/Supplier/SupplierGenerateInvoice/SupplierReviewPage";
import SupplierCompleteInvoice from "./Pages/Supplier/SupplierGenerateInvoice/SupplierCompleteInvoice";
import SupplierOrders from "./Pages/Supplier/SupplierOrders";

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
      </Routes>
    </>
  );
}

export default App;
