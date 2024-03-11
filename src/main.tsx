import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import { GlobalStyle } from "./styles/globalStyles.ts";
import Theme from "./styles/theme.ts";
import HooksProviders from "./components/hooks/index.tsx";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <HooksProviders>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </HooksProviders>
  </React.StrictMode>
);
