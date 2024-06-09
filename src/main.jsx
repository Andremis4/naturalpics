import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import FotoProvider from "./assets/context/Fotos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FotoProvider>
        <App />
      </FotoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
