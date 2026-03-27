import { getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages();
  const meta = messages.blogsPage.meta;

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

export default function BlogsLayout({ children }) {
  return children;
}
