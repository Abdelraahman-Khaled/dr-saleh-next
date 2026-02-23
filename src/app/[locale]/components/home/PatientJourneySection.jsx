import { useTranslations } from 'next-intl';

export default function PatientJourneySection() {
    const t = useTranslations('home');
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#17a2b8] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#17a2b8] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('patientJourney.title')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('patientJourney.subtitle')}
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#17a2b8] via-[#17a2b8] to-[#17a2b8] transform -translate-y-1/2"></div>

                        <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
                            {[
                                { num: 1, title: t('patientJourney.steps.0.title'), icon: 'ri-calendar-check-line' },
                                { num: 2, title: t('patientJourney.steps.1.title'), icon: 'ri-file-list-3-line' },
                                { num: 3, title: t('patientJourney.steps.2.title'), icon: 'ri-clipboard-line' },
                                { num: 4, title: t('patientJourney.steps.3.title'), icon: 'ri-surgical-mask-line' },
                                { num: 5, title: t('patientJourney.steps.4.title'), icon: 'ri-heart-pulse-line' },
                            ].map((step) => (
                                <div key={step.num} className="relative">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-6">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-full flex items-center justify-center shadow-xl relative z-10 transform hover:scale-110 transition-transform duration-300">
                                                <span className="text-white text-2xl font-bold">{step.num}</span>
                                            </div>
                                            <div className="absolute inset-0 bg-[#17a2b8] rounded-full blur-xl opacity-30 animate-pulse"></div>
                                        </div>
                                        <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow min-h-[140px] flex flex-col justify-center">
                                            <div className="w-10 h-10 bg-[#17a2b8]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <i className={`${step.icon} text-[#17a2b8] text-xl`}></i>
                                            </div>
                                            <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://wa.me/966508277780"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-bold text-lg transform transition-all duration-300 whitespace-nowrap"
                        >
                            <i className="ri-whatsapp-line text-2xl"></i>
                            {t('hero.buttons.contactClinic')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
