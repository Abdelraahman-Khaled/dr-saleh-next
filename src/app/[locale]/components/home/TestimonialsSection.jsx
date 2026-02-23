'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsSection({ title, desc, bg = "bg-white" }) {
    const t = useTranslations('home');
    return (
        <section className={`py-16 lg:py-20 ${bg}`}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('testimonials.subtitle')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('testimonials.title')}
                    </h2>
                </div>

                {/* Content */}
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {/* Before/After Images - Shows second on mobile, first on desktop */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto lg:max-w-none">
                            <div className="grid grid-cols-2">
                                <div className="relative">
                                    <img
                                        src="https://dr-saaleh.netlify.app/assets/img/after1.webp"
                                        alt="Before"
                                        className="w-full h-64 sm:h-72 object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-900">
                                        {t('testimonials.before')}
                                    </div>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://dr-saaleh.netlify.app/assets/img/before1.webp"
                                        alt="After"
                                        className="w-full h-64 sm:h-72 object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-[#17a2b8] px-4 py-2 rounded-full text-sm font-bold text-white">
                                        {t('testimonials.after')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials - Shows first on mobile, second on desktop */}
                    <div className="order-1 lg:order-2">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('testimonials.label')}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                            {t('testimonials.title')}
                        </h2>

                        <div className="relative">
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
                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {t(`testimonials.items.${i}.text`)}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={`https://dr-saaleh.netlify.app/assets/img/client-image/${i + 1}.png`}
                                                    alt={t(`testimonials.items.${i}.author`)}
                                                    className="w-12 h-12 rounded-full object-cover"
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
                                    <i className="ri-arrow-right-s-line text-xl"></i>
                                </button>
                                <button className="testimonial-swiper-button-next w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-[#17a2b8] hover:border-[#17a2b8] hover:text-white transition-all cursor-pointer">
                                    <i className="ri-arrow-left-s-line text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
