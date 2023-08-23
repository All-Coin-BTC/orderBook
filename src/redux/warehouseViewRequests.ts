import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface warehouseViewRequests {
  openRequests: Array<any>;
}

const initialState: warehouseViewRequests = {
  openRequests: [],
};

export const warehouseViewSlice = createSlice({
  name: "warehouseViewRequests",
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
export const { updateOpenRequests } = warehouseViewSlice.actions;

export default warehouseViewSlice.reducer;
