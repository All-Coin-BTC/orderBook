import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface viewLogisticsDeliveryOrders {
  logisticsDeliveryOrders: Array<any>;
}

const initialState: viewLogisticsDeliveryOrders = {
  logisticsDeliveryOrders: [],
};

export const logisticsDeliveryOrdersSlice = createSlice({
  name: "viewLogisticsDeliveryOrders",
  initialState,
  reducers: {
    updateLogisticsDeliveryOrders: (state, action: PayloadAction<Array<any>>) => {
      state.logisticsDeliveryOrders = action.payload;
    },
  },
});

/*
  
  */
// Action creators are generated for each case reducer function
export const { updateLogisticsDeliveryOrders } = logisticsDeliveryOrdersSlice.actions;

export default logisticsDeliveryOrdersSlice.reducer;
