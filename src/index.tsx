import React from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryContext } from "./contexts/ReactQueryContext";
import GlobalStyle from "./styles/global_style";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/main_theme";
import { Router } from "./Router";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <ReactQueryContext>
        <Router />
      </ReactQueryContext>
    </ThemeProvider>
  </>
);
