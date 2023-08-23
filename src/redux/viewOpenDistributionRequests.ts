import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface viewOpenDistributionRequests {
  openRequests: Array<any>;
}

const initialState: viewOpenDistributionRequests = {
  openRequests: [],
};

export const distributionOrdersSlice = createSlice({
  name: "viewOpenDistributionRequests",
  initialState,
  reducers: {
    updateOpenRequests: (state, action: PayloadAction<Array<any>>) => {
      state.openRequests = action.payload;
    },
  },
});

/*
  
  */
// Action creators are generated for each case reducer function
export const { updateOpenRequests } = distributionOrdersSlice.actions;

export default distributionOrdersSlice.reducer;
