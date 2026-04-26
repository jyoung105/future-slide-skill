import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  translations,
  type Locale,
} from "./translations";

const STORAGE_KEY = "fss-locale";

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const langs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || DEFAULT_LOCALE];
  for (const raw of langs) {
    const l = String(raw).toLowerCase();
    if (l.startsWith("ko")) return "ko";
    if (l.startsWith("en")) return "en";
  }
  return DEFAULT_LOCALE;
}

function readInitialLocale(): Locale {
  if (typeof document === "undefined") return DEFAULT_LOCALE;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v && (SUPPORTED_LOCALES as readonly string[]).includes(v)) {
      return v as Locale;
    }
  } catch {}
  return detectBrowserLocale();
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    document.title = translations[locale]["meta.title"] ?? document.title;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const t = useCallback(
    (key: string) => translations[locale][key] ?? translations.en[key] ?? key,
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
