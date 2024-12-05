import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import routes from "./router/routes";
import AuthProvider from "./providers/AuthProvider";
import { ThemeProvider } from "./theme/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
