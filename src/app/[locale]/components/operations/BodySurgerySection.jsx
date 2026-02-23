import { Link } from '../../../../navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function BodySurgerySection() {
    const locale = useLocale();
    const t = useTranslations('operationsPage.specialties.body');
    const bodyOperations = [
        { title: t('items.tummyTuck'), icon: 'ri-body-scan-line' },
        { title: t('items.liposuction'), icon: 'ri-drop-line' },
        { title: t('items.bodyContouring'), icon: 'ri-shape-line' },
        { title: t('items.armLift'), icon: 'ri-hand-heart-line' },
        { title: t('items.thighLift'), icon: 'ri-walk-line' },
        { title: t('items.breastSurgery'), icon: 'ri-heart-2-line' },
    ];

    return (
        <section className="py-20 bg-[#f4f9fd]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">{t('label')}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('heading')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bodyOperations.map((op, idx) => (
                        <div
                            key={idx}
                            className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className={`${op.icon} text-white text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{op.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {t('itemDescription')}
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[#17a2b8] font-semibold text-sm hover:gap-3 transition-all cursor-pointer"
                            >
                                {t('button')}
                                <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
