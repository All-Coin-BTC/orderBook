import { configureStore } from "@reduxjs/toolkit";
import supplierReducer from "./supplierView/supplierToWarehouse";
import warehouseViewOrdersReducer from "./viewOpenDistributionRequests";
import warehouseToSupplierReducer from "./warehouseView/WarehouseToSupplier";
import supplierViewOrdersReducer from "./viewOpenBuyRequests";
export const store = configureStore({
  reducer: {
    supplier: supplierReducer,
    warehouseView: warehouseViewOrdersReducer /*Displays the distribution orders for the warehouse to see */,
    warehouseToSupplier: warehouseToSupplierReducer,
    supplierView: supplierViewOrdersReducer /*displays the buy orders for the supplier to see */,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
