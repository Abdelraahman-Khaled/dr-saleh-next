'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'ar' : 'en';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className="px-4 py-2 text-sm font-medium transition-colors bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center gap-2 border border-white/20 shadow-sm"
        >
            <i className="ri-global-line text-lg"></i>
            {locale === 'en' ? 'العربية' : 'English'}
        </button>
    );
}
