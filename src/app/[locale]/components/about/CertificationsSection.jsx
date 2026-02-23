import { useTranslations } from 'next-intl';

export default function CertificationsSection() {
    const t = useTranslations('aboutPage.certifications');

    const certifications = [
        {
            title: t('items.c1.title'),
            subtitle: t('items.c1.subtitle'),
        },
        {
            title: t('items.c2.title'),
            subtitle: t('items.c2.subtitle'),
        },
        {
            title: t('items.c3.title'),
            subtitle: t('items.c3.subtitle'),
            detail: t('items.c3.detail'),
        },
        {
            title: t('items.c4.title'),
            subtitle: t('items.c4.subtitle'),
            detail: t('items.c4.detail'),
        },
        {
            title: t('items.c5.title'),
            subtitle: t('items.c5.subtitle'),
            detail: t('items.c5.detail'),
        },
    ];

    const consultancyList = [
        t('consultancy.items.i1'),
        t('consultancy.items.i2'),
        t('consultancy.items.i3'),
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">{t('label')}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 max-w-3xl mx-auto">
                        {t('heading')}
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Certifications List */}
                    <div className="space-y-4">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-award-line text-[#17a2b8] text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                                        <p className="text-[#17a2b8] text-sm mb-2">{cert.subtitle}</p>
                                        {cert.detail && <p className="text-gray-500 text-sm">{cert.detail}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Consultancy Box */}
                    <div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                            <ul className="space-y-4 mb-8">
                                {consultancyList.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <i className="ri-medal-line text-[#17a2b8] text-xl mt-1"></i>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-[#17a2b8]/5 rounded-xl p-6 border border-[#17a2b8]/20">
                                <h5 className="font-bold text-gray-900 mb-2">{t('honorary.title')}</h5>
                                <p className="text-gray-600 text-sm">
                                    {t('honorary.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
