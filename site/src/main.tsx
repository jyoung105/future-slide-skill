import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/i18n/use-locale";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </StrictMode>,
);
