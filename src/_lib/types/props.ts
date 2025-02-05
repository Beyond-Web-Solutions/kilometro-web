import { ReactNode } from "react";
import { Locale } from "next-intl";

export type MetaDataParams = Readonly<{
  params: I18nParams;
}>;

export type LayoutProps<Params = object> = Readonly<{
  children: ReactNode;
  params: I18nParams<Params>;
}>;

export type PageProps<Params = object> = Readonly<{
  params: I18nParams<Params>;
}>;

type I18nParams<Params = object> = Promise<
  {
    locale: Locale;
  } & Params
>;
