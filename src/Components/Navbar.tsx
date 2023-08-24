import React, { useState } from "react";
import { Link } from "react-router-dom";
type NavbarProps = {
  displayMobileMenu: boolean;
  setDisplayMobileMenu: (params: boolean) => void;
};
export const Navbar = ({ displayMobileMenu, setDisplayMobileMenu }: NavbarProps) => {
  const [displayCustomersLinks, setDisplayCustomersLinks] = useState<boolean>(false);
  const [displayManufacturersLinks, setDisplayManufacturersLinks] = useState<boolean>(false);
  const [displayWarehousesLinks, setDisplayWarehousesLinks] = useState<boolean>(false);
  const [displayLogisticsLinks, setDisplayLogisticsLink] = useState<boolean>(false);
  return (
    <>
      <div className="navbar px-4 py-4 flex justify-between bg-white ">
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
        <div className="mobile-hamburger-display w-screen h-screen flex flex-col items-center gap-6 mt-8">
          <div className="what-we-offer bg-white rounded-2xl w-80 px-12 mx-6 py-4 flex justify-between items-center">
            <p className="flex">What We Offer</p>
            <img className="w-8" src="/down-arrow.png" />
          </div>
          <div className="who-we-serve bg-white rounded-2xl w-80 px-12 mx-6 py-4 flex justify-between items-center">
            <p className="flex">Who We Serve</p>
            <img className="w-8" src="/down-arrow.png" />
          </div>
          <div className="why-us bg-white rounded-2xl w-80 px-12 mx-6 py-4 flex justify-between items-center">
            <p className="flex">Why OrderBook?</p>
            <img className="w-8" src="/down-arrow.png" />
          </div>
          <div className="documentation bg-white rounded-2xl w-80 px-12 mx-6 py-4 flex justify-between items-center">
            <p className="flex">Documentation</p>
            <img className="w-8" src="/down-arrow.png" />
          </div>
          <div className="account-area flex flex-col gap-2">
            <div className="create-account bg-transparent rounded-2xl w-80 mx-6  flex justify-center items-center">
              <Link to="/create-account" onClick={() => setDisplayMobileMenu(false)}>
                <button className="border-solid border-2 border-indigo-600 w-80 py-4 mx-30 rounded-2xl">
                  Create Account
                </button>
              </Link>
            </div>
            <div className="sign-in bg-transparent rounded-2xl w-80 mx-6  flex justify-center items-center ">
              <button className="border-solid border-2 border-indigo-600 w-80 py-4 mx-30 rounded-2xl bg-indigo-600 text-white">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
