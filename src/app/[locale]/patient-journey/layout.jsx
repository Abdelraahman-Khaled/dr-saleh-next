import { getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!["en", "ar"].includes(locale)) return {};
  const messages = await getMessages();
  const meta = messages?.patientJourney?.meta;
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
  };
}

export default function PatientJourneyLayout({ children }) {
  return children;
}
