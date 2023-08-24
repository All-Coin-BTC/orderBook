import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface viewOpenBuyRequests {
  openBuyRequests: Array<any>;
}

const initialState: viewOpenBuyRequests = {
  openBuyRequests: [],
};

export const buyOrdersSlice = createSlice({
  name: "viewOpenBuyRequests",
  initialState,
  reducers: {
    updateOpenBuyRequests: (state, action: PayloadAction<Array<any>>) => {
      state.openBuyRequests = action.payload;
    },
  },
});

/*
  
  */
// Action creators are generated for each case reducer function
export const { updateOpenBuyRequests } = buyOrdersSlice.actions;

export default buyOrdersSlice.reducer;
