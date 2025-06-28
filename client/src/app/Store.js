import { configureStore } from "@reduxjs/toolkit";
import { UserAuthApi } from "../Services/UserAuthApi";
import { setupListeners } from "@reduxjs/toolkit/query";

// store.js
const Store = configureStore({
  reducer: {
    [UserAuthApi.reducerPath]: UserAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserAuthApi.middleware),
});
setupListeners(Store.dispatch);
export default Store;
