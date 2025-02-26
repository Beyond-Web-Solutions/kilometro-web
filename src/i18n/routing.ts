import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["nl-NL"],

  // Used when no locale matches
  defaultLocale: "nl-NL",

  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "nl-NL": "nl",
    },
  },

  pathnames: {
    "/": "/",

    "/download": {
      "nl-NL": "/download",
    },

    "/contact": {
      "nl-NL": "/contact",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
