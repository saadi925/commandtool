import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRoutes from "./routes/Routes.tsx";
import { SearchProvider } from "./context/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchProvider>
      <AppRoutes />
    </SearchProvider>
  </React.StrictMode>
);
