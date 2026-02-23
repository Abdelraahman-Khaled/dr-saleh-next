import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';

export default function DoctorIntroSection() {
    const t = useTranslations('home');
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="gap-12 items-center max-w-6xl mx-auto text-center">
                    {/* Content Area */}
                    <div>
                        <div className="inline-block px-4 py-2 bg-[#17a2b8]/10 text-[#17a2b8] rounded-full text-sm font-semibold mb-4">
                            {t('doctorIntro.title')}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {t('doctorIntro.subtitle')}
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-8">
                            <p>
                                {t('doctorIntro.description')}
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-all shadow-lg whitespace-nowrap"
                            >
                                {t('doctorIntro.button')}
                                <i className="ri-arrow-right-line rtl:rotate-180"></i>
                            </Link>

                            <a
                                href="https://wa.me/966508277780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20BA5A] transition-all shadow-lg whitespace-nowrap"
                            >
                                {t('doctorIntro.whatsapp')}
                                <i className="ri-whatsapp-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
