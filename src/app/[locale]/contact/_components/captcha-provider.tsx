"use client";

import { ReactNode } from "react";
import { useLocale } from "next-intl";
import { ReCaptchaProvider } from "next-recaptcha-v3";

interface Props {
  children: ReactNode;
}

export function CaptchaProvider({ children }: Props) {
  const lang = useLocale();

  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      language={lang}
      useEnterprise
    >
      {children}
    </ReCaptchaProvider>
  );
}
