import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/auth/AuthLayout";
import MainLayout from "../layouts/main/MainLayout";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
