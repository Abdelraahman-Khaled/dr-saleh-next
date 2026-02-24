'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);
    const tInfo = useTranslations('contactPage.info');
    const locale = useLocale();

    // The WhatsApp number might have spaces or '+' and we need a clean number for the wa.me link
    const rawNumber = tInfo('whatsapp.value') || '';
    const whatsappNumber = rawNumber.replace(/\s/g, '').replace('+', '');
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Position based on language (often left in RTL so it doesn't block scrollbar, right in LTR)
    const positionClass = locale === 'en' ? 'left-4 md:left-6' : 'right-4 md:right-6';

    return (
        <div className={`fixed bottom-4 md:bottom-6 ${positionClass} z-50 flex flex-col gap-3 pointer-events-none`}>
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`w-12 h-12 md:w-14 md:h-14 bg-[#17a2b8] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:bg-[#138496] pointer-events-auto cursor-pointer ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <i className="ri-arrow-up-line text-2xl md:text-3xl"></i>
            </button>

            {/* WhatsApp Button */}
            <Link
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 pointer-events-auto cursor-pointer"
                aria-label="Contact us on WhatsApp"
            >
                <i className="ri-whatsapp-line text-2xl md:text-3xl"></i>
            </Link>
        </div>
    );
}
