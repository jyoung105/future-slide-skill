export const SITE_META = {
  themeKey: "fss-theme",
  localeKey: "fss-locale",
  diagram: {
    en: "/diagram/four-skill-flow.png",
    ko: "/diagram/four-skill-flow_ko.png",
  },
} as const;

export type Locale = "en" | "ko";
export type Theme = "light" | "dark";

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "ko";
}

export function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}
