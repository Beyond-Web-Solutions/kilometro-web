"use client";

import { contact } from "@/app/[locale]/contact/_lib/actions";
import { useActionState, useCallback } from "react";
import { CheckCircleIcon, Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { useReCaptcha } from "next-recaptcha-v3";
import Form from "next/form";

type State = {
  ok: boolean;
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

const initialState: State = {
  ok: false,
  errors: {},
};

export function ContactForm() {
  const t = useTranslations("contact.form");

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (_: unknown, formData: FormData) => {
      const token = await executeRecaptcha("contact");

      formData.set("captcha", token);

      return contact(_, formData);
    },
    [executeRecaptcha],
  );

  const [state, formAction, pending] = useActionState(
    handleSubmit,
    initialState,
  );

  return (
    <Form action={formAction} className="lg:flex-auto">
      {state.ok && (
        <div className="rounded-md bg-green-50 p-4 mb-16">
          <div className="flex">
            <div className="shrink-0">
              <CheckCircleIcon
                aria-hidden="true"
                className="size-5 text-green-400"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                {t("success.title")}
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <p>{t("success.description")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t("name")}
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
            />
          </div>
          {state.errors?.name?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t("email")}
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
            />
          </div>
          {state.errors?.email?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t("message")}
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
              defaultValue={""}
            />
          </div>
          {state.errors?.message?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          disabled={pending}
          className="flex items-center justify-center w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          {pending && <Loader className="size-4 mr-2 animate-spin" />}
          {t("submit")}
        </button>
      </div>
    </Form>
  );
}
