import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

export const metadata = {
  title: "د. صالح الخلف | أستاذ واستشاري أول جراحة التجميل والترميم",
  description: "الموقع الرسمي للدكتور صالح الخلف. متخصص في جراحات التجميل والترميم، تجميل الأنف، وشد الوجه بأحدث الخبرات والتقنيات الألمانية.",
  keywords: ["جراحة التجميل", "تجميل الأنف", "ترميم الحروق", "د. صالح الخلف", "Plastic Surgery", "Reconstructive Surgery", "Saudi Arabia"],
  authors: [{ name: "Dr. Saleh Al-Khalaf" }],
  openGraph: {
    title: "د. صالح الخلف - خيارك الأول لجراحة التجميل والترميم",
    description: "أستاذ واستشاري أول جراحة التجميل والترميم. نقدم رعاية طبية متكاملة بأحدث التقنيات والخبرات الألمانية.",
    type: "website",
    locale: "ar_SA",
  },
  icons: {
    icon: "/file.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
