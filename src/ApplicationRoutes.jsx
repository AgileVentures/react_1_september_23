import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutUs from "./AboutUs";

const ApplicationRoutes = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/about_us", element: <AboutUs /> },
  ]);
  return <RouterProvider router={router} />;
};

export default ApplicationRoutes;
