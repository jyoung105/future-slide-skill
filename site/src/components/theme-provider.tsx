import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "fss-theme";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_ASSETS = {
  "favicon-ico": "favicon.ico",
  "favicon-32": "favicon-32x32.png",
  "favicon-16": "favicon-16x16.png",
  "apple-touch-icon": "apple-touch-icon.png",
  "site-webmanifest": "site.webmanifest",
} as const;

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(t);

  const base = `/logo/${t}/`;
  Object.entries(THEME_ASSETS).forEach(([id, filename]) => {
    document.getElementById(id)?.setAttribute("href", `${base}${filename}`);
  });

  try {
    localStorage.setItem(STORAGE_KEY, t);
  } catch {}
}

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const cls = document.documentElement.classList;
  if (cls.contains("dark")) return "dark";
  if (cls.contains("light")) return "light";
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "dark" || v === "light") return v;
  } catch {}
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);

  const setTheme = useCallback((t: Theme) => {
    applyTheme(t);
    setThemeState(t);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
