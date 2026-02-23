import { Link } from '../../../../navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function DoctorIntroOperationsSection() {
    const locale = useLocale();
    const t = useTranslations('operationsPage.doctorIntro');
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('label')}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            {t('heading')}
                        </h2>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
                        {t('bio')}
                    </p>

                    <div className="text-center">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                        >
                            {t('button')}
                            <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
