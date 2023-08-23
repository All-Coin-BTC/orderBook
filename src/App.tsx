import React, { useState } from "react";
import Homepage from "./Pages/Homepage";

import { Navbar } from "./Components/Navbar";
import ChooseRole from "./Pages/ChooseRole";
import { Route, Routes } from "react-router-dom";
import ManufacturerHub from "./Pages/ManufacturerHub";
import WarehousingHub from "./Pages/WarehousingHub";
import ManufacturerGenerateStepOne from "./Pages/Manufacturer/SupplierGenerateInvoice/ManufacturerGenerateStepOne";
import ManufacturerGenerateStepTwo from "./Pages/Manufacturer/SupplierGenerateInvoice/ManufacturerGenerateStepTwo";
import ManufacturerGenerateStepThree from "./Pages/Manufacturer/SupplierGenerateInvoice/ManufacturerGenerateStepThree";
import ManufacturerReviewPage from "./Pages/Manufacturer/SupplierGenerateInvoice/ManufacturerReviewPage";
import ManufacturerCompleteInvoice from "./Pages/Manufacturer/SupplierGenerateInvoice/ManufacturerCompleteInvoice";
import WarehouseViewRequests from "./Pages/WarehouseViewRequests/WarehouseViewRequests";
import ManufacturerOrders from "./Pages/Manufacturer/ManufacturerOrders";

function App() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  return (
    <>
      <Navbar displayMobileMenu={displayMobileMenu} setDisplayMobileMenu={setDisplayMobileMenu} />
      <Routes>
        {!displayMobileMenu && <Route path="/" element={<Homepage />} />}
        {!displayMobileMenu && <Route path="/roles" element={<ChooseRole />} />}
        {!displayMobileMenu && <Route path="/manufacturer-hub" element={<ManufacturerHub />} />}
        {!displayMobileMenu && <Route path="/ManufacturerGenerateStepOne" element={<ManufacturerGenerateStepOne />} />}
        {!displayMobileMenu && <Route path="/ManufacturerGenerateStepTwo" element={<ManufacturerGenerateStepTwo />} />}
        {!displayMobileMenu && <Route path="/ManufacturerGenerateStepThree" element={<ManufacturerGenerateStepThree />} />}
        {!displayMobileMenu && <Route path="/ManufacturerReviewPage" element={<ManufacturerReviewPage />} />}
        {!displayMobileMenu && <Route path="/manufacturer-complete-invoice" element={<ManufacturerCompleteInvoice />} />}
        {!displayMobileMenu && <Route path="/manufacturer-orders" element={<ManufacturerOrders />} />}
        {!displayMobileMenu && <Route path="/warehouse-hub" element={<WarehousingHub />} />}
        {!displayMobileMenu && <Route path="/warehouse-requests" element={<WarehouseViewRequests />} />}
      </Routes>
    </>
  );
}

export default App;
