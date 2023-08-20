import React, { useState } from "react";
import Homepage from "./Pages/Homepage";
import { Navbar } from "./Components/Navbar";
import ChooseRole from "./Pages/ChooseRole";
import { Route, Routes } from "react-router-dom";
import ManufacturerHub from "./Pages/ManufacturerHub";

function App() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  return (
    <>
      <Navbar
        displayMobileMenu={displayMobileMenu}
        setDisplayMobileMenu={setDisplayMobileMenu}
      />
      <Routes>
        {!displayMobileMenu && <Route path="/" element={<Homepage />} />}
        {!displayMobileMenu && <Route path="/roles" element={<ChooseRole />} />}
        {!displayMobileMenu && (
          <Route path="/manufacturer-hub" element={<ManufacturerHub />} />
        )}
      </Routes>
    </>
  );
}

export default App;
