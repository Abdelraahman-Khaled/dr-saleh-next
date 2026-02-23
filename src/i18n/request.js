import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Supported locales
const locales = ["en", "ar"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
