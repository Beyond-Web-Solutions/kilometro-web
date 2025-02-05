import { ReactNode } from "react";
import { Locale } from "next-intl";

export type LayoutProps<Params = object> = Readonly<{
  children: ReactNode;
  params: I18nParams<Params>;
}>;

type I18nParams<Params = object> = Promise<
  {
    locale: Locale;
  } & Params
>;
