import { formats } from "@/i18n/request";
import { routing } from "@/i18n/routing";
import nl from "./messages/nl-NL.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof nl;
    Formats: typeof formats;
    Locale: (typeof routing.locales)[number];
  }
}
