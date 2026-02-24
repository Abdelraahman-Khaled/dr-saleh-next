import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages();
  const meta =
    locale === "ar"
      ? {
          title: "د. صالح الخلف | أستاذ واستشاري أول جراحة التجميل والترميم",
          description:
            "الموقع الرسمي للدكتور صالح الخلف. متخصص في جراحات التجميل والترميم، تجميل الأنف، وشد الوجه بأحدث الخبرات والتقنيات الألمانية.",
          keywords: [
            "جراحة التجميل",
            "تجميل الأنف",
            "ترميم الحروق",
            "د. صالح الخلف",
          ],
        }
      : {
          title:
            "Dr. Saleh Al-Khalaf | Professor & Senior Consultant of Plastic & Reconstructive Surgery",
          description:
            "The official website of Dr. Saleh Al-Khalaf. Specialist in plastic and reconstructive surgery, rhinoplasty, and facelift with the latest German expertise.",
          keywords: [
            "Plastic Surgery",
            "Rhinoplasty",
            "Burn Reconstruction",
            "Dr. Saleh Al-Khalaf",
          ],
        };

  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Dr. Saleh Al-Khalaf" }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        {/* Google Tag Manager - Next.js Script Optimization */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KFBMBLQZ');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased `}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFBMBLQZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ReactQueryProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
