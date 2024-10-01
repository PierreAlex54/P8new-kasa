import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.scss";

import Home from "./assets/pages/Home/index.jsx";
import APropos from "./assets/pages/A-propos/index.jsx";
import Error from "./assets/pages/404/index.jsx";
import Logement from "./assets/pages/Logement/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <APropos />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
