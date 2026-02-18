'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../context/useTranslation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation('navbar');
  const isHome = pathname === '/';

  // Update scrolled state on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Clean‑up listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Make navLinks reactive to language changes
  const navLinks = useMemo(() => [
    { path: '/', label: t.links?.home || 'الرئيسية' },
    { path: '/about', label: t.links?.about || 'عن الدكتور' },
    { path: '/operations', label: t.links?.operations || 'الجراحات' },
    { path: '/blogs', label: t.links?.blogs || 'المدونة' },
    { path: '/media', label: t.links?.media || 'الظهور الإعلامي' },
    { path: '/gallery', label: t.links?.gallery || 'معرض الصور' },
    { path: '/patient-journey', label: t.links?.patientJourney || 'رحلة المريض' },
    { path: '/faqs', label: t.links?.faqs || 'الأسئلة الشائعة' },
    { path: '/contact', label: t.links?.contact || 'تواصل معنا' },
  ], [t, language]); // Re-create when language or translations change

  // Show transparent navbar only on home page when not scrolled
  const showTransparent = isHome && !scrolled;

  // Use white logo when navbar is transparent, colored logo when white background
  const logoSrc = scrolled || !isHome
    ? 'https://dr-saaleh.netlify.app/assets/img/logo.png'
    : 'https://dr-saaleh.netlify.app/assets/img/footer-logo.png';

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 bg-[#1a1f2e] shadow-md`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src={scrolled || !isHome
                  ? 'https://dr-saaleh.netlify.app/assets/img/footer-logo.png'
                  : 'https://dr-saaleh.netlify.app/assets/img/footer-logo.png'}
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop navigation links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#17a2b8] text-white ${pathname === link.path ? 'text-[#17a2b8]' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop right‑side actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer text-white hover:text-white/80"
              >
                {language === 'ar' ? 'English' : 'العربية'}
              </button> */}
              <Link
                href="/contact"
                className="px-6 py-2 bg-[#17a2b8] text-white rounded-full text-sm font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
              >
                {t.buttons?.bookConsultation || 'حجز استشارة'}
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i
                className={`text-2xl text-white ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'
          }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Sliding panel */}
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-xl transform transition-transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block text-gray-800 font-medium hover:text-[#17a2b8] transition-colors ${pathname === link.path ? 'text-[#17a2b8]' : ''
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors mt-6 whitespace-nowrap"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.buttons?.bookConsultation || 'حجز استشارة'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
