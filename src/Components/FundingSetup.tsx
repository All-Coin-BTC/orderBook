import React from "react";

export default function FundingSetup() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="payment-method-container flex flex-col pt-8">
        <div className="current-balance container text-3xl">$0.00</div>
        <div className="select-payment-text text-xl">Select a payment method</div>
        <div className="payment-choices-container flex gap-4">
          <div className=" payment-card debit-card-selection rounded-2xl px-8 py-2">
            <img className="w-8" src="credit-card.png" />
            <p>Debit Card</p>
          </div>
          <div className=" payment-card bank-selection rounded-2xl px-8 py-2">
            <img className="w-8" src="bank.png" />
            <p>ACH Transfer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
