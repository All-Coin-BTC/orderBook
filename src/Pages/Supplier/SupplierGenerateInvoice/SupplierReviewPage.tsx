import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { updateOpenRequests } from "../../../redux/viewOpenDistributionRequests";

export default function SupplierReviewPage() {
  const {
    name,
    id,
    address,
    productName,
    productId,
    productQuantity,
    pricePerUnit,
    productSubTotal,
    productEstimatedTax,
    productEstimatedTotal,
    supplierLocation,
    warehouseLocation,
    totalMileage,
    maximumAcceptableDeliveryTime,
    logisticsProviderPremium,
    logisticsSubtotal,
    logisticsEstimatedTax,
    logisticsEstimatedTotal,
  } = useSelector((state: RootState) => state.supplier);
  const dispatch = useDispatch();
  const { openRequests } = useSelector(
    (state: RootState) => state.warehouseView
  );
  console.log(openRequests);
  return (
    <div className="h-[87vh] text-start sm:flex flex-col items-center justify-center">
      <div
        className="sm:max-h-max md:w-[960px]
         m-auto bg-white flex flex-col space-y-4 items-center
       rounded-xl py-4 shadow-xl"
      >
        <div>
          <h1 className="title text-2xl font-semibold text-center">Review</h1>
          <h3 className="subtitle text-lg font-light text-center">
            Validate Transaction Details
          </h3>
        </div>

        <main className="flex justify-between space-x-16 px-10 items-start border-y border-gray-100 w-full">
          <article className="w-full">
            <div className="text-center font-bold mt-4 ">Warehouse Details</div>
            <div className="review-field-one mt-4 flex justify-between items-center gap-1">
              <div>Recipient Name</div>
              <div>{name}</div>
            </div>
            <div className="review-field-two mt-4 flex justify-between items-center gap-1">
              <div>Recipient ID</div>
              <div>{id}</div>
            </div>
            <div className="review-field-three mt-4 flex justify-between items-center gap-1">
              <div>Recipient Address</div>
              <div>{address}</div>
            </div>
            <div className="review-field-four mt-4 flex justify-between items-center gap-1">
              <div>Product Name</div>
              <div>{productName}</div>
            </div>
            <div className="review-field-five mt-4 flex justify-between items-center gap-1">
              <div>Product ID</div>
              <div>{productId}</div>
            </div>
            <div className="review-field-five mt-4 flex justify-between items-center gap-1">
              <div>Quantity</div>
              <div>{productQuantity}</div>
            </div>
            <div className="review-field-five mt-4 flex justify-between items-center gap-1">
              <div>Price / Unit</div>
              <div>{pricePerUnit}</div>
            </div>
            <div className="review-subtotal mt-4 flex justify-between items-center gap-1">
              <div>Subtotal</div>
              <div>${productSubTotal.toFixed(2)}</div>
            </div>
            <div className="review-estimated-tax mt-4 flex justify-between items-center gap-1">
              <div>Estimated Tax</div>
              <div>${productEstimatedTax.toFixed(2)}</div>
            </div>
            <div className="review-total mt-4 flex justify-between items-center gap-1 border-t py-8">
              <div>Estimated Total</div>
              <div>${productEstimatedTotal.toFixed(2)}</div>
            </div>
          </article>

          <article className="w-full">
            <div className="text-center font-bold mt-4 ">Logistics Details</div>
            <div className="review-field-five mt-4 flex justify-between items-center gap-1">
              <div>Trip Distance</div>
              <div>${totalMileage}</div>
            </div>
            <div className="review-field-five mt-4 flex justify-between items-center gap-1">
              <div>Logistics Provider Premium</div>
              <div>${logisticsProviderPremium}</div>
            </div>
            <div className="review-subtotal mt-4 flex justify-between items-center gap-1">
              <div>Subtotal</div>
              <div>${logisticsSubtotal}</div>
            </div>
            <div className="review-estimated-tax mt-4 flex justify-between items-center gap-1">
              <div>Estimated Tax</div>
              <div>${logisticsEstimatedTax.toFixed(2)}</div>
            </div>
            <div className="review-total mt-4 flex justify-between items-center gap-1 border-t py-8">
              <div>Estimated Total</div>
              <div>${logisticsEstimatedTotal.toFixed(2)}</div>
            </div>
            <div className="grand-total mt-4 flex justify-between items-center gap-1 border-t py-8">
              <div>Grand Total</div>
              <div>
                ${(logisticsEstimatedTotal + productEstimatedTotal).toFixed(2)}
              </div>
            </div>
          </article>
        </main>

        <div className="next-logistics flex justify-center items-center">
          <Link
            to="/supplier-complete-invoice"
            onClick={() =>
              dispatch(
                updateOpenRequests([
                  ...openRequests,
                  {
                    name: name,
                    id: id,
                    address: address,
                    productName: productName,
                    productId: productId,
                    productQuantity: productQuantity,
                    pricePerUnit: pricePerUnit,
                    productSubTotal: productSubTotal,
                    productEstimatedTax: productEstimatedTax,
                    productEstimatedTotal: productEstimatedTotal,
                    supplierLocation: supplierLocation,
                    warehouseLocation: warehouseLocation,
                    totalMileage: totalMileage,
                    maximumAcceptableDeliveryTime:
                      maximumAcceptableDeliveryTime,
                    logisticsProviderPremium: logisticsProviderPremium,
                    logisticsSubtotal: logisticsSubtotal,
                    logisticsEstimatedTax: logisticsEstimatedTax,
                    logisticsEstimatedTotal: logisticsEstimatedTotal,
                  },
                ])
              )
            }
          >
            <button
              className="bg-gray-900 w-full shadow-xl text-[0.8rem]
              font-bold text-gray-300 py-2 px-6 rounded-md hover:scale-105 
              transition-all ease-linear"
            >
              Submit Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
