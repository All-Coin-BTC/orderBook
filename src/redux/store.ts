import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "./supplierView/supplierToWarehouse";
import warehouseViewOrdersReducer from "./warehouseViewRequests";
export const store = configureStore({
  reducer: {
    warehouse: warehouseReducer,
    warehouseView: warehouseViewOrdersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
