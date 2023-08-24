import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface viewAcceptedOrders {
  acceptedOrders: Array<any>;
}

const initialState: viewAcceptedOrders = {
  acceptedOrders: [],
};

export const acceptedOrdersSlice = createSlice({
  name: "viewAcceptedOrders",
  initialState,
  reducers: {
    updateAcceptedOrders: (state, action: PayloadAction<Array<any>>) => {
      state.acceptedOrders = action.payload;
    },
  },
});

/*
  
  */
// Action creators are generated for each case reducer function
export const { updateAcceptedOrders } = acceptedOrdersSlice.actions;

export default acceptedOrdersSlice.reducer;
