import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import "swiper/css/bundle";
import "@splidejs/splide/dist/css/splide.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import {
  HomePage,
  OpeningTimePage,
  MenuPage,
  AboutPage,
  ContactPage,
} from "./Pages/PageIndex.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/opening-time", element: <OpeningTimePage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
