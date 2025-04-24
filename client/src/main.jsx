import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AlertProvider } from "./context/AlertContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>
);
