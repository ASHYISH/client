import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    categoryReducer,
    cartReducer,
  },
});
