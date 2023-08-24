import React from "react";

export default function CreateAccount() {
  return (
    <div className="create-account-page-container bg-white flex flex-col items-center pt-8 px-4 h-screen">
      <div className="title text-3xl text-center">Create Your OrderBook Account</div>
      <div className="username text-start w-full font-light mt-4">Username</div>
      <input className="username-input" />
      <div className="password text-start w-full font-light mt-4">Password</div>
      <input className="password-input" />
      <div className="confirm-password text-start w-full font-light mt-4">Re-enter Password</div>
      <input className="confirm-password-input mb-8" />
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Create Account
      </button>
    </div>
  );
}
