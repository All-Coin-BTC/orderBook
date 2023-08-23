import { configureStore } from "@reduxjs/toolkit";
import supplierReducer from "./supplierView/supplierToWarehouse";
import warehouseViewOrdersReducer from "./viewOpenDistributionRequests";
import warehouseToSupplierReducer from "./warehouseView/WarehouseToSupplier";
export const store = configureStore({
  reducer: {
    supplier: supplierReducer,
    warehouseView: warehouseViewOrdersReducer,
    warehouseToSupplier: warehouseToSupplierReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
