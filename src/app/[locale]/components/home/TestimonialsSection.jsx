'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsSection({ bg = "bg-white" }) {
    const locale = useLocale();
    const t = useTranslations('home');

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className={`py-16 lg:py-20 ${bg} overflow-hidden`}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('testimonials.subtitle')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('testimonials.title')}
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {/* Before/After Images - Shows second on mobile, first on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto lg:max-w-none hover:scale-[1.02] transition-transform duration-500">
                            <div className="grid grid-cols-2">
                                <div className="relative">
                                    <img
                                        src="https://dr-saaleh.netlify.app/assets/img/after1.webp"
                                        alt="Before"
                                        className="w-full h-64 sm:h-72 object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                                        {t('testimonials.before')}
                                    </div>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://dr-saaleh.netlify.app/assets/img/before1.webp"
                                        alt="After"
                                        className="w-full h-64 sm:h-72 object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-[#17a2b8] px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg">
                                        {t('testimonials.after')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Testimonials - Shows first on mobile, second on desktop */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="order-1 lg:order-2"
                    >
                        <motion.span variants={fadeInUp} className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('testimonials.label')}
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                            {t('testimonials.subtitle')}
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="relative">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={24}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.testimonial-swiper-button-next',
                                    prevEl: '.testimonial-swiper-button-prev',
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className="testimonials-swiper"
                            >
                                {[0, 1].map((i) => (
                                    <SwiperSlide key={i}>
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(5)].map((_, idx) => (
                                                    <i key={idx} className="ri-star-fill text-yellow-400 text-lg"></i>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 mb-4 leading-relaxed italic">
                                                "{t(`testimonials.items.${i}.text`)}"
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={`https://dr-saaleh.netlify.app/assets/img/client-image/${i + 1}.png`}
                                                    alt={t(`testimonials.items.${i}.author`)}
                                                    className="w-12 h-12 rounded-full object-cover border-2 border-[#17a2b8]/20"
                                                />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-sm">
                                                        {t(`testimonials.items.${i}.author`)}
                                                    </p>
                                                    <p className="text-[#17a2b8] text-xs">
                                                        {t(`testimonials.items.${i}.role`)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Arrows */}
                            <div className="flex gap-3 mt-6 justify-start">
                                <button className="testimonial-swiper-button-prev w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-[#17a2b8] hover:border-[#17a2b8] hover:text-white transition-all cursor-pointer">
                                    <i className={locale === 'ar' ? "ri-arrow-right-s-line text-xl" : "ri-arrow-left-s-line text-xl"}></i>
                                </button>
                                <button className="testimonial-swiper-button-next w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-[#17a2b8] hover:border-[#17a2b8] hover:text-white transition-all cursor-pointer">
                                    <i className={locale === 'ar' ? "ri-arrow-left-s-line text-xl" : "ri-arrow-right-s-line text-xl"}></i>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
