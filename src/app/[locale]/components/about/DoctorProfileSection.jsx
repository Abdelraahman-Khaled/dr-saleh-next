import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';

export default function DoctorProfileSection() {
    const t = useTranslations('aboutPage.doctorProfile');
    const tCommon = useTranslations('home');

    const whyChoose = [
        { title: t('whyChoose.items.precision.title'), subtitle: t('whyChoose.items.precision.subtitle') },
        { title: t('whyChoose.items.experience.title'), subtitle: t('whyChoose.items.experience.subtitle') },
        { title: t('whyChoose.items.integrity.title'), subtitle: t('whyChoose.items.integrity.subtitle') },
        { title: t('whyChoose.items.development.title'), subtitle: t('whyChoose.items.development.subtitle') },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Doctor Image & Info */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-50 rounded-3xl p-6 text-center sticky top-24">
                            <img
                                src="/doctor/pic-9.jpg"
                                alt={t('sidebar.name')}
                                className="w-full max-w-sm mx-auto rounded-2xl mb-6"
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('sidebar.name')}</h3>
                            <p className="text-[#17a2b8] text-sm mb-4">{t('sidebar.tagline')}</p>
                            <div className="flex justify-center gap-3">
                                {[
                                    { icon: 'ri-tiktok-line', url: 'https://tiktok.com/@dr.salehalkhalaf' },
                                    { icon: 'ri-twitter-x-line', url: 'https://x.com/drsalehalkhalaf' },
                                    { icon: 'ri-youtube-line', url: 'https://www.youtube.com/@dr.salehalkhalaf' },
                                    { icon: 'ri-instagram-line', url: 'https://www.instagram.com/dr.salehalkhalaf' },
                                    { icon: 'ri-facebook-line', url: 'https://www.facebook.com/dr.salehalkhalaf/' },
                                    { icon: 'ri-snapchat-line', url: 'https://www.snapchat.com/@drsalehalkhalaf' },
                                    { icon: 'ri-linkedin-line', url: 'https://www.linkedin.com/in/صالح-الغامدي/' },
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 bg-[#17a2b8]/10 rounded-full flex items-center justify-center hover:bg-[#17a2b8] hover:text-white text-[#17a2b8] transition-all cursor-pointer"
                                    >
                                        <i className={social.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="lg:col-span-3">
                        <span className="inline-block px-4 py-2 bg-[#17a2b8]/10 text-[#17a2b8] rounded-full text-sm font-semibold mb-4">
                            {t('details.title')}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('details.heading')}</h2>

                        <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                            <p className="mb-4 leading-relaxed">
                                {t('details.bio.p1')}
                            </p>
                            <p className="leading-relaxed">
                                {t('details.bio.p2')}
                            </p>
                        </div>

                        {/* Why Choose */}
                        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{t('whyChoose.heading')}</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {whyChoose.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-[#17a2b8] rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="ri-check-line text-white"></i>
                                        </div>
                                        <div>
                                            <h6 className="font-bold text-gray-900 text-sm">{item.title}</h6>
                                            <p className="text-gray-500 text-xs">{item.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <div className='flex flex-wrap gap-4'>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer"
                                >
                                    {tCommon('appointment.button')}
                                    <i className="ri-notification-3-line"></i>
                                </Link>
                                <a
                                    href="https://wa.me/966508277780"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                                >
                                    {t('details.cta.whatsapp')}
                                    <i className="ri-arrow-left-line"></i>
                                </a>
                            </div>
                            <img
                                src="https://dr-saaleh.netlify.app/assets/img/logo.png"
                                alt="Signature"
                                className="h-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
