import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import "./index.css";
import { config } from "./web3/config";

const queryClient = new QueryClient();
import { AuthProvider } from "./context/AuthContext";  // ADD

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>          {/* ADD */}
      <App />
    </AuthProvider>         {/* ADD */}
  </QueryClientProvider>
</WagmiProvider>
  </React.StrictMode>,
);
