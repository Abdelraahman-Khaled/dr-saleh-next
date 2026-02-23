import { useTranslations } from 'next-intl';

export default function WhyChooseUsSection() {
    const t = useTranslations('operationsPage.whyChoose');
    const features = [
        { icon: 'ri-shield-check-line', title: t('items.safety.title'), desc: t('items.safety.desc') },
        { icon: 'ri-award-line', title: t('items.experience.title'), desc: t('items.experience.desc') },
        { icon: 'ri-microscope-line', title: t('items.technology.title'), desc: t('items.technology.desc') },
        { icon: 'ri-heart-pulse-line', title: t('items.followup.title'), desc: t('items.followup.desc') },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">{t('label')}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('heading')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, idx) => (
                        <div key={idx} className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className={`${item.icon} text-white text-3xl`}></i>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
