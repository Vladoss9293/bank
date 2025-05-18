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
    path: "/register",
    lazy: () =>
      import('../../../../pages/RegisterPage').then((m) => ({
        Component: m.RegisterPage,
      }))
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);
