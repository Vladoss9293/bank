import { configureStore } from "@reduxjs/toolkit";
import { router } from "../../RouterProvider/config/router";
import { rootReducer } from "./redux";

export const extraArgument = {
  router,
};

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: { extraArgument } });
  },
});
