'use client';
import { Link } from '../../../../navigation';
import { useState, useEffect, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
    const [textIndex, setTextIndex] = useState(0);
    const t = useTranslations('home.hero');
    const locale = useLocale();

    const heroTexts = useMemo(() => [
        {
            id: 0,
            title: t('texts.0.title'),
            subtitle: t('texts.0.subtitle'),
            description: t('texts.0.description')
        },
        {
            id: 1,
            title: t('texts.1.title'),
            subtitle: t('texts.1.subtitle'),
            description: t('texts.1.description')
        }
    ], [t]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % heroTexts.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [heroTexts]);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="relative max-[768px]:pt-18 min-[1537px]:h-[65vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    src="https://readdy.ai/api/search-image?query=Modern%20luxury%20medical%20clinic%20interior%20with%20elegant%20teal%20and%20white%20color%20scheme%20soft%20ambient%20lighting%20premium%20healthcare%20environment%20clean%20minimalist%20design%20professional%20medical%20aesthetic%20clinic%20background&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className={`absolute inset-0 bg-gradient-to-l from-[#0d5c6a]/95 via-[#17a2b8]/85 to-[#17a2b8]/70 ${locale === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}`}></div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-52 h-52 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl"
            ></motion.div>

            <div className="container mx-auto px-3 sm:px-4 relative z-10 pt-16 sm:pt-20 lg:pt-0 pb-8 sm:pb-0 lg:pb-0">
                <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-120px)]">
                    {/* Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="text-white order-1 lg:order-1 lg:col-span-5 px-2 sm:px-0"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-sm rounded-full mb-3 sm:mb-5">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            <span className="text-xs sm:text-sm font-medium">{t('badge')}</span>
                        </motion.div>

                        <div className="relative mb-3 sm:mb-5">
                            {/* Invisible placeholder to set height dynamically based on the longest text */}
                            <div className="invisible pointer-events-none" aria-hidden="true">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                    {locale === 'en' ? "Dr. Saleh Al-Khalaf" : "د. صالح الخلف"}
                                    <br />
                                    <span className="text-white/90">
                                        {locale === 'en'
                                            ? "Senior Consultant of Plastic & Reconstructive Surgery"
                                            : "استشاري أول جراحة التجميل والترميم"}
                                    </span>
                                </h1>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={textIndex}
                                    initial={{ opacity: 0, x: locale === 'ar' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: locale === 'ar' ? -20 : 20 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full"
                                >
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                        {heroTexts[textIndex].title}
                                        <br />
                                        <span className="text-white/90">{heroTexts[textIndex].subtitle}</span>
                                    </h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="relative mb-4 sm:mb-6">
                            {/* Invisible placeholder for description */}
                            <div className="invisible pointer-events-none text-sm sm:text-base lg:text-lg leading-relaxed max-w-md" aria-hidden="true">
                                {locale === 'en'
                                    ? "German specialized expertise in rhinoplasty, facelift, and burn reconstruction using the latest international techniques."
                                    : "خبرة ألمانية متخصصة في تجميل الأنف، شد الوجه، وترميم الحروق باستخدام أحدث التقنيات العالمية."}
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={textIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 max-w-md"
                                >
                                    {heroTexts[textIndex].description}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-6 pt-6">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap text-sm"
                            >
                                <i className="ri-calendar-check-line text-lg"></i>
                                {t('buttons.bookConsultation')}
                            </Link>
                            <a
                                href="https://wa.me/966508277780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-[#17a2b8] transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap text-sm"
                            >
                                <i className="ri-whatsapp-line text-lg"></i>
                                {t('buttons.contactClinic')}
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={fadeInUp} className="flex flex-wrap justify-start xs:justify-start gap-4 sm:gap-6 pt-4 sm:pt-5 border-t border-white/20">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">+15</div>
                                <div className="text-[10px] sm:text-xs text-white/70">{t('stats.experience')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">+5000</div>
                                <div className="text-[10px] sm:text-xs text-white/70">{t('stats.operations')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">100%</div>
                                <div className="text-[10px] sm:text-xs text-white/70">{t('stats.satisfaction')}</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Doctor Image */}
                    <div className="relative order-2 lg:order-2 lg:col-span-7 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative Circle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"
                            ></motion.div>

                            {/* Image Container */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-[280px] h-[340px] xs:w-[320px] xs:h-[420px] sm:w-[380px] sm:h-[500px] md:w-[440px] md:h-[580px] lg:w-[460px] lg:h-[560px] xl:w-[520px] xl:h-[680px] 2xl:w-[580px] 2xl:h-[820px]"
                            >
                                <img
                                    src="/doctor/pic-20.png"
                                    alt="د. صالح الخلف"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                                transition={{
                                    opacity: { delay: 1, duration: 0.5 },
                                    x: { delay: 1, duration: 0.5 },
                                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className={`absolute ${locale === 'en' ? '-left-20 xs:-left-6 sm:-left-20 lg:-left-16' : 'left-7 xs:-left-2 sm:-left-10 lg:-left-2'} top-1/4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl z-20 border border-gray-100 max-w-[85vw] ml-2 xs:ml-0`}
                            >
                                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                        <i className="ri-award-line text-[#17a2b8] text-base sm:text-xl lg:text-2xl"></i>
                                    </div>
                                    <div className="max-w-[140px] sm:max-w-[180px]">
                                        <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-gray-900 leading-tight">{t('badges.saudiBoard')}</div>
                                        <div className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">{t('badges.specialty')}</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                                transition={{
                                    opacity: { delay: 1.2, duration: 0.5 },
                                    x: { delay: 1.2, duration: 0.5 },
                                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className={`absolute ${locale === 'en' ? 'right-0 xs:right-0 sm:-right-8 lg:-right-12' : '-right-1 xs:-right-2 sm:-right-2 lg:-right-8'} bottom-1/4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl z-20 border border-gray-100 max-w-[85vw] mr-2 xs:mr-0`}
                            >
                                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <i className="ri-verified-badge-line text-emerald-500 text-base sm:text-xl lg:text-2xl"></i>
                                    </div>
                                    <div className="max-w-[120px] sm:max-w-[160px]">
                                        <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-gray-900 leading-tight">{t('badges.germanBoard')}</div>
                                        <div className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">{t('badges.certified')}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={() => {
                    const nextSection = document.querySelector('section:nth-of-type(2)');
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden lg:block cursor-pointer hover:text-white transition-colors z-50"
                aria-label="Scroll down"
            >
                <i className="ri-arrow-down-line text-2xl"></i>
            </motion.button>
        </section>
    );
}

