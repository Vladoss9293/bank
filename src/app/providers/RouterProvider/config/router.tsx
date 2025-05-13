import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () =>
      import("../../../../pages/MainPage").then((m) => ({
        Component: m.MainPage,
      })),
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);
