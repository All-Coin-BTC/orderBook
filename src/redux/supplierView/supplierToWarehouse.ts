import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface supplierToWarehouseData {
  name: string;
  id: string;
  address: string;
  productName: string;
  productId: string;
  productQuantity: number;
  pricePerUnit: number;
  productSubTotal: number;
  productEstimatedTax: number;
  productEstimatedTotal: number;
  supplierLocation: string;
  warehouseLocation: string;
  totalMileage: number;
  maximumAcceptableDeliveryTime: number;
  logisticsProviderPremium: number;
  logisticsSubtotal: number;
  logisticsEstimatedTax: number;
  logisticsEstimatedTotal: number;
}

const initialState: supplierToWarehouseData = {
  name: "",
  id: "",
  address: "",
  productName: "",
  productId: "",
  productQuantity: 0,
  pricePerUnit: 0,
  productSubTotal: 0,
  productEstimatedTax: 0,
  productEstimatedTotal: 0,
  supplierLocation: "",
  warehouseLocation: "",
  totalMileage: 0,
  maximumAcceptableDeliveryTime: 0,
  logisticsProviderPremium: 0,
  logisticsSubtotal: 0,
  logisticsEstimatedTax: 0,
  logisticsEstimatedTotal: 0,
};

export const supplierToWarehouseSlice = createSlice({
  name: "supplierToWarehouseData",
  initialState,
  reducers: {
    updateWarehouseName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateWarehouseId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    updateWarehouseAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    updateProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
    updateProductId: (state, action: PayloadAction<string>) => {
      state.productId = action.payload;
    },
    updateProductQuantity: (state, action: PayloadAction<number>) => {
      state.productQuantity = action.payload;
    },
    updatePricePerUnit: (state, action: PayloadAction<number>) => {
      state.pricePerUnit = action.payload;
    },
    updateProductSubtotal: (state, action: PayloadAction<number>) => {
      state.productSubTotal = action.payload;
    },
    updateProductEstimatedTax: (state, action: PayloadAction<number>) => {
      state.productEstimatedTax = action.payload;
    },
    updateProductEstimatedTotal: (state, action: PayloadAction<number>) => {
      state.productEstimatedTotal = action.payload;
    },
    updateSupplierLocation: (state, action: PayloadAction<string>) => {
      state.supplierLocation = action.payload;
    },
    updateWarehouseLocation: (state, action: PayloadAction<string>) => {
      state.warehouseLocation = action.payload;
    },
    updateTotalMileage: (state, action: PayloadAction<number>) => {
      state.totalMileage = action.payload;
    },
    updateMaximumAcceptableDeliveryTime: (state, action: PayloadAction<number>) => {
      state.maximumAcceptableDeliveryTime = action.payload;
    },
    updateLogisticsProviderPremium: (state, action: PayloadAction<number>) => {
      state.logisticsProviderPremium = action.payload;
    },
    updateLogisticsSubtotal: (state, action: PayloadAction<number>) => {
      state.logisticsSubtotal = action.payload;
    },
    updateLogisticsEstimatedTax: (state, action: PayloadAction<number>) => {
      state.logisticsEstimatedTax = action.payload;
    },
    updateLogisticsEstimatedTotal: (state, action: PayloadAction<number>) => {
      state.logisticsEstimatedTotal = action.payload;
    },
  },
});

/*
  
  */
// Action creators are generated for each case reducer function
export const {
  updateWarehouseName,
  updateWarehouseId,
  updateWarehouseAddress,
  updateProductName,
  updateProductId,
  updateProductQuantity,
  updatePricePerUnit,
  updateProductSubtotal,
  updateProductEstimatedTax,
  updateProductEstimatedTotal,
  updateSupplierLocation,
  updateWarehouseLocation,
  updateTotalMileage,
  updateMaximumAcceptableDeliveryTime,
  updateLogisticsProviderPremium,
  updateLogisticsSubtotal,
  updateLogisticsEstimatedTax,
  updateLogisticsEstimatedTotal,
} = supplierToWarehouseSlice.actions;

export default supplierToWarehouseSlice.reducer;
