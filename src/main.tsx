import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.tsx";
import GlobalInfo from "./context/GlobalInfo.tsx";
createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
    {/* <StrictMode> */}
      <GlobalInfo>
        <App />
      </GlobalInfo>
    {/* </StrictMode> */}
  </GoogleOAuthProvider>
);
