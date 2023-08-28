import React, { useEffect, useState } from "react";

export default function CreateAccount() {
  const [typeOfAccount, setTypeOfAccount] = useState("");
  const [typeOfLogisticsEquipment, setTypeOfLogisticsEquipment] = useState("");
  useEffect(() => {
    console.log(typeOfAccount);
  }, [typeOfAccount]);
  useEffect(() => {
    console.log(typeOfLogisticsEquipment);
  }, [typeOfLogisticsEquipment]);

  return (
    <div className="create-account-page-container bg-white flex flex-col items-center pt-8 px-4 h-screen">
      <div className="title text-4xl text-center">Create Your AllBook Account</div>
      <div className="username text-start w-full font-light mt-4">Username</div>
      <input className="username-input" />
      <div className="password text-start w-full font-light mt-4">Password</div>
      <input className="password-input" />
      <div className="confirm-password text-start w-full font-light mt-4">Re-enter Password</div>
      <input className="confirm-password-input " />
      <div className="choose-user-category text-start w-full font-light mt-4">Choose User Category</div>
      <select
        id="user-category"
        name="user-cateogry"
        className="user-category-input"
        onChange={(e) => setTypeOfAccount(e.target.value)}
      >
        <option value="supplier">Supplier</option>
        <option value="warehouse">Warehouse</option>
        <option value="logistics">Logistics</option>
      </select>
      {typeOfAccount == "logistics" ? (
        <>
          <div className="choose-user-category text-start w-full font-light mt-4">Logisitcs Equipment</div>
          <select
            id="user-category"
            name="user-cateogry"
            className="user-category-input"
            onChange={(e) => setTypeOfLogisticsEquipment(e.target.value)}
          >
            <option value="car">Car</option>
            <option value="box-truck">Box Truck</option>
            <option value="van">Van</option>
            <option value="semi">Semi</option>
            <option value="ship">Ship</option>
            <option value="airplane">Airplane</option>
          </select>
        </>
      ) : (
        <></>
      )}
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-8 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Create Account
      </button>
    </div>
  );
}
