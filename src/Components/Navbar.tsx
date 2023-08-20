import React, { useState } from "react";
import { Link } from "react-router-dom";
type NavbarProps = {
  displayMobileMenu: boolean;
  setDisplayMobileMenu: (params: boolean) => void;
};
export const Navbar = ({
  displayMobileMenu,
  setDisplayMobileMenu,
}: NavbarProps) => {
  const [displayCustomersLinks, setDisplayCustomersLinks] =
    useState<boolean>(false);
  const [displayManufacturersLinks, setDisplayManufacturersLinks] =
    useState<boolean>(false);
  const [displayWarehousesLinks, setDisplayWarehousesLinks] =
    useState<boolean>(false);
  return (
    <>
      <div className="navbar px-4 py-4 flex justify-between bg-white mb-8">
        <div className="navbar-left flex items-center">
          <Link to="/" onClick={() => setDisplayMobileMenu(false)}>
            <img className="w-8 h-8" src="/auction.png" alt="" />
          </Link>
          <Link to="/" onClick={() => setDisplayMobileMenu(false)}>
            <div className="logo-text">OrderBook</div>
          </Link>
        </div>
        <div className="navbar-right flex items-center">
          <img
            className="w-8 h-8"
            src={`${displayMobileMenu ? "/close.png" : "/more.png"}`}
            onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
            alt=""
          />
        </div>
      </div>
      {displayMobileMenu && (
        <div className="mobile-hamburger-display w-screen h-screen flex flex-col items-center">
          <div
            className="customers-hamburger-item text-xl font-light mt-6 flex items-center gap-3 cursor-pointer"
            onClick={() => setDisplayCustomersLinks(false)}
          >
            <p>Customers</p>
            <img className="w-4 h-4" src="/down-arrow.png" alt="" />
          </div>
          <div
            className={`${
              displayCustomersLinks
                ? "customers-dropdown-container-active text-center font-light text-grayText"
                : "customers-dropdown-container-inactive"
            }`}
          >
            <p>View Markets</p>
            <p>Purchase History</p>
            <p>Rewards Enrollment</p>
          </div>
          <div
            className="customers-hamburger-item text-xl font-light mt-6 flex items-center gap-3 cursor-pointer"
            onClick={() =>
              setDisplayManufacturersLinks(!displayManufacturersLinks)
            }
          >
            <p>Manufacturers</p>
            <img className="w-4 h-4" src="/down-arrow.png" alt="" />
          </div>
          <div
            className={`${
              displayManufacturersLinks
                ? "manufacturers-dropdown-container-active text-center font-light text-grayText"
                : "manufacturers-dropdown-container-inactive"
            }`}
          >
            <Link
              to="/manufacturer-hub"
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
            >
              <p>Create Invoice</p>
            </Link>
            <p>Invoice History</p>
            <p>Outstanding Invoices</p>
          </div>
          <div
            className="customers-hamburger-item text-xl font-light mt-6 flex items-center gap-3 cursor-pointer"
            onClick={() => setDisplayWarehousesLinks(!displayWarehousesLinks)}
          >
            <p>Warehouses</p>
            <img className="w-4 h-4" src="/down-arrow.png" alt="" />
          </div>
          <div
            className={`${
              displayWarehousesLinks
                ? "warehouses-dropdown-container-active text-center font-light text-grayText"
                : "warehouses-dropdown-container-inactive"
            }`}
          >
            <p>List Products for Sale</p>
            <p>Sales History</p>
            <p>Open Orders</p>
          </div>
          <div className="customers-hamburger-item text-xl font-light mt-6 flex items-center gap-3">
            <p>Logistics</p>
            <img className="w-4 h-4" src="/down-arrow.png" alt="" />
          </div>
        </div>
      )}
    </>
  );
};
