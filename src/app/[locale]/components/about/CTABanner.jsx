import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';

export default function CTABanner() {
    const t = useTranslations('aboutPage.ctaBanner');
    return (
        <section className="py-12 bg-[#17a2b8]">
            <div className="container mx-auto px-4 text-center">
                <h4 className="text-2xl font-bold text-white mb-2">{t('title')}</h4>
                <p className="text-white/90 mb-6">{t('subtitle')}</p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                    {t('button')}
                    <i className="ri-calendar-line"></i>
                </Link>
            </div>
        </section>
    );
}
