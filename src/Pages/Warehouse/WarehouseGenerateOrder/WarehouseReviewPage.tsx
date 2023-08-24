import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { updateOpenRequests } from "../../../redux/viewOpenDistributionRequests";
import { updateOpenBuyRequests } from "../../../redux/viewOpenBuyRequests";
export default function WarehouseReviewPage() {
  const {
    wTSname,
    wTSsupplierId,
    wTSaddress,
    wTSproductName,
    wTSproductId,
    wTSproductQuantity,
    wTSpricePerUnit,
    wTSproductSubTotal,
    wTSproductEstimatedTax,
    wTSproductEstimatedTotal,
    wTSsupplierLocation,
    wTSwarehouseLocation,
    wTStotalMileage,
    wTSmaximumAcceptableDeliveryTime,
    wTSlogisticsProviderPremium,
    wTSlogisticsSubtotal,
    wTSlogisticsEstimatedTax,
    wTSlogisticsEstimatedTotal,
  } = useSelector((state: RootState) => state.warehouseToSupplier);

  const dispatch = useDispatch();
  const { openBuyRequests } = useSelector((state: RootState) => state.supplierView);
  console.log(openBuyRequests);
  return (
    <div className="review-container text-start flex flex-col items-center justify-center font-light text-sm">
      <div className="review-details-container rounded-2xl p-4 px-8">
        <div className="title text-2xl font-semibold text-center">Review</div>
        <div className="subtitle text-lg font-light text-center">Validate Transaction Details</div>
        <div className="text-center font-bold mt-4 ">Supplier Details</div>
        <div className="review-field-one mt-4 flex justify-between items-center gap-1">
          <div>Supplier Name</div>
          <div>{wTSname}</div>
        </div>
        <div className="review-field-two mt-4 flex justify-between items-center gap-1">
          <div>Supplier ID</div>
          <div>{wTSsupplierId}</div>
        </div>

        <div className="review-field-four mt-4 flex justify-between items-center gap-1">
          <div>Product Name</div>
          <div>{wTSproductName}</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Product ID</div>
          <div>{wTSproductId}</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Quantity</div>
          <div>{wTSproductQuantity}</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Price / Unit</div>
          <div>{wTSpricePerUnit}</div>
        </div>
        <div className="review-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>${wTSproductSubTotal.toFixed(2)}</div>
        </div>
        <div className="review-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>${wTSproductEstimatedTax.toFixed(2)}</div>
        </div>
        <div className="review-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${wTSproductEstimatedTotal.toFixed(2)}</div>
        </div>
        <div className="text-center font-bold mt-4 ">Logistics Details</div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Trip Distance</div>
          <div>${wTStotalMileage}</div>
        </div>
        <div className="review-field-five mt-4 flex justify-between items-center gap-1">
          <div>Logistics Provider Premium</div>
          <div>${wTSlogisticsProviderPremium}</div>
        </div>
        <div className="review-subtotal mt-4 flex justify-between items-center gap-1">
          <div>Subtotal</div>
          <div>${wTSlogisticsSubtotal}</div>
        </div>
        <div className="review-estimated-tax mt-4 flex justify-between items-center gap-1">
          <div>Estimated Tax</div>
          <div>${wTSlogisticsEstimatedTax.toFixed(2)}</div>
        </div>
        <div className="review-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Estimated Total</div>
          <div>${wTSlogisticsEstimatedTotal.toFixed(2)}</div>
        </div>
        <div className="grand-total mt-4 flex justify-between items-center gap-1 border-t py-8">
          <div>Grand Total</div>
          <div>${(wTSlogisticsEstimatedTotal + wTSproductEstimatedTotal).toFixed(2)}</div>
        </div>
        <div className="next-logistics flex justify-center items-center">
          <Link
            to="/warehouse-complete-invoice"
            onClick={() =>
              dispatch(
                updateOpenBuyRequests([
                  ...openBuyRequests,
                  {
                    wTSname: wTSname,
                    wTSsupplierId: wTSsupplierId,
                    wTSaddress: wTSaddress,
                    wTSproductName: wTSproductName,
                    wTSproductId: wTSproductId,
                    wTSproductQuantity: wTSproductQuantity,
                    wTSpricePerUnit: wTSpricePerUnit,
                    wTSproductSubTotal: wTSproductSubTotal,
                    wTSproductEstimatedTax: wTSproductEstimatedTax,
                    wTSproductEstimatedTotal: wTSproductEstimatedTotal,
                    wTSsupplierLocation: wTSsupplierLocation,
                    wTSwarehouseLocation: wTSwarehouseLocation,
                    wTStotalMileage: wTStotalMileage,
                    wTSmaximumAcceptableDeliveryTime: wTSmaximumAcceptableDeliveryTime,
                    wTSlogisticsProviderPremium: wTSlogisticsProviderPremium,
                    wTSlogisticsSubtotal: wTSlogisticsSubtotal,
                    wTSlogisticsEstimatedTax: wTSlogisticsEstimatedTax,
                    wTSlogisticsEstimatedTotal: wTSlogisticsEstimatedTotal,
                  },
                ])
              )
            }
          >
            <button className="manufacture-submit-btn px-8 py-4 rounded-2xl">Submit Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
