import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fa", "zh", "fr", "de"],
  defaultLocale: "en",
  localePrefix: "always",
});
