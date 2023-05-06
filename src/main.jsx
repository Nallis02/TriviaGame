import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes.jsx";
import { InfoContextProvider } from "./contexts/InfoContexs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <InfoContextProvider>
        <MainRoutes />
      </InfoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
