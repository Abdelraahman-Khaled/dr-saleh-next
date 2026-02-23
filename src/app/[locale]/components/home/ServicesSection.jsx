import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
    const t = useTranslations('home');
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 flex justify-start">
                        <div className="w-full max-w-md">
                            <img
                                src="/doctor/pic-23.jpg"
                                alt="Services"
                                className="w-full h-auto rounded-3xl shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('services.title')}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            {t('services.subtitle')}
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t('services.description')}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-puzzle-line text-[#17a2b8] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            {t('services.reconstructive.title')}
                                        </h3>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                    <span>{t(`services.reconstructive.items.${i}`)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-hand-heart-line text-[#17a2b8] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            {t('services.hand.title')}
                                        </h3>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                    <span>{t(`services.hand.items.${i}`)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-stethoscope-line text-[#17a2b8] text-xl"></i>                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {t('services.burns.title')}
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {[0, 1, 2, 3].map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>{t(`services.burns.items.${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                        >
                            {t('services.bookNow')}
                            <i className="ri-calendar-check-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
