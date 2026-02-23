import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';

export default function FinalCTASection() {
    const t = useTranslations('aboutPage.finalCTA');
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">{t('label')}</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
                    <p className="text-gray-600 mb-8">{t('subtitle')}</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors shadow-lg whitespace-nowrap cursor-pointer"
                    >
                        {t('button')}
                        <i className="ri-calendar-check-line"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
