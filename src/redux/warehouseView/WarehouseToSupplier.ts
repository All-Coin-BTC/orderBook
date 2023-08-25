import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
/*wTS/WTS means warehouse to supplier. Only doing this so we have a different naming convention between supplier sent and warehouse sent orders. */
export interface warehouseToSupplierData {
  wTSorderId: string;
  wTSname: string;
  wTSsupplierId: string;

  wTSproductName: string;
  wTSproductId: string;
  wTSproductQuantity: number;
  wTSpricePerUnit: number;
  wTSproductSubTotal: number;
  wTSproductEstimatedTax: number;
  wTSproductEstimatedTotal: number;
  wTSsupplierLocation: string;
  wTSwarehouseLocation: string;
  wTStotalMileage: number;
  wTSmaximumAcceptableDeliveryTime: number;
  wTSlogisticsProviderPremium: number;
  wTSlogisticsSubtotal: number;
  wTSlogisticsEstimatedTax: number;
  wTSlogisticsEstimatedTotal: number;
  wTSsupplierAccepts: boolean;
}

const initialState: warehouseToSupplierData = {
  wTSorderId: "",
  wTSname: "",
  wTSsupplierId: "",

  wTSproductName: "",
  wTSproductId: "",
  wTSproductQuantity: 0,
  wTSpricePerUnit: 0,
  wTSproductSubTotal: 0,
  wTSproductEstimatedTax: 0,
  wTSproductEstimatedTotal: 0,
  wTSsupplierLocation: "",
  wTSwarehouseLocation: "",
  wTStotalMileage: 0,
  wTSmaximumAcceptableDeliveryTime: 0,
  wTSlogisticsProviderPremium: 0,
  wTSlogisticsSubtotal: 0,
  wTSlogisticsEstimatedTax: 0,
  wTSlogisticsEstimatedTotal: 0,
  wTSsupplierAccepts: false,
};

export const warehouseToSupplierSlice = createSlice({
  name: "warehouseToSupplierData",
  initialState,
  reducers: {
    updateWTSorderId: (state, action: PayloadAction<string>) => {
      state.wTSname = action.payload;
    },
    updateWTSSupplierName: (state, action: PayloadAction<string>) => {
      state.wTSname = action.payload;
    },
    updateWTSsupplierId: (state, action: PayloadAction<string>) => {
      state.wTSsupplierId = action.payload;
    },

    updateWTSProductName: (state, action: PayloadAction<string>) => {
      state.wTSproductName = action.payload;
    },
    updateWTSProductId: (state, action: PayloadAction<string>) => {
      state.wTSproductId = action.payload;
    },
    updateWTSProductQuantity: (state, action: PayloadAction<number>) => {
      state.wTSproductQuantity = action.payload;
    },
    updateWTSPricePerUnit: (state, action: PayloadAction<number>) => {
      state.wTSpricePerUnit = action.payload;
    },
    updateWTSProductSubtotal: (state, action: PayloadAction<number>) => {
      state.wTSproductSubTotal = action.payload;
    },
    updateWTSProductEstimatedTax: (state, action: PayloadAction<number>) => {
      state.wTSproductEstimatedTax = action.payload;
    },
    updateWTSProductEstimatedTotal: (state, action: PayloadAction<number>) => {
      state.wTSproductEstimatedTotal = action.payload;
    },
    updateWTSSupplierLocation: (state, action: PayloadAction<string>) => {
      state.wTSsupplierLocation = action.payload;
    },
    updateWTSWarehouseLocation: (state, action: PayloadAction<string>) => {
      state.wTSwarehouseLocation = action.payload;
    },
    updateWTSTotalMileage: (state, action: PayloadAction<number>) => {
      state.wTStotalMileage = action.payload;
    },
    updateWTSMaximumAcceptableDeliveryTime: (state, action: PayloadAction<number>) => {
      state.wTSmaximumAcceptableDeliveryTime = action.payload;
    },
    updateWTSLogisticsProviderPremium: (state, action: PayloadAction<number>) => {
      state.wTSlogisticsProviderPremium = action.payload;
    },
    updateWTSLogisticsSubtotal: (state, action: PayloadAction<number>) => {
      state.wTSlogisticsSubtotal = action.payload;
    },
    updateWTSLogisticsEstimatedTax: (state, action: PayloadAction<number>) => {
      state.wTSlogisticsEstimatedTax = action.payload;
    },
    updateWTSLogisticsEstimatedTotal: (state, action: PayloadAction<number>) => {
      state.wTSlogisticsEstimatedTotal = action.payload;
    },
    updateWTSsupplierAccepts: (state, action: PayloadAction<boolean>) => {
      state.wTSsupplierAccepts = action.payload;
    },
  },
});

/*
  
  */
// Action creators are generated for each case reducer function
export const {
  updateWTSorderId,
  updateWTSSupplierName,
  updateWTSsupplierId,
  updateWTSProductName,
  updateWTSProductId,
  updateWTSProductQuantity,
  updateWTSPricePerUnit,
  updateWTSProductSubtotal,
  updateWTSProductEstimatedTax,
  updateWTSProductEstimatedTotal,
  updateWTSSupplierLocation,
  updateWTSWarehouseLocation,
  updateWTSTotalMileage,
  updateWTSMaximumAcceptableDeliveryTime,
  updateWTSLogisticsProviderPremium,
  updateWTSLogisticsSubtotal,
  updateWTSLogisticsEstimatedTax,
  updateWTSLogisticsEstimatedTotal,
  updateWTSsupplierAccepts,
} = warehouseToSupplierSlice.actions;

export default warehouseToSupplierSlice.reducer;
