import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!api|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|xml|txt|webp|png|gif|svg|ttf|woff2?|ico|csv|json|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
