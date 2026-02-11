'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsSection({ title, desc, bg = "bg-white" }) {
    return (
        <section className={`py-20 ${bg}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">آراء المرضى</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {desc}
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                            <div className="grid grid-cols-2">
                                <div className="relative">
                                    <img
                                        src="https://dr-saaleh.netlify.app/assets/img/after1.webp"
                                        alt="Before"
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-900">
                                        قبل
                                    </div>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://dr-saaleh.netlify.app/assets/img/before1.webp"
                                        alt="After"
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-[#17a2b8] px-4 py-2 rounded-full text-sm font-bold text-white">
                                        بعد
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            آراء المرضى
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                            تجارب حقيقية. انطباعات صادقة.
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
                                <SwiperSlide>
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            خدمة ممتازة، التزام بالمواعيد واهتمام كبير بالتفاصيل. شكرًا لكم على جودة العمل
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://dr-saaleh.netlify.app/assets/img/client-image/1.png"
                                                alt="رنيم العتيق"
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">رنيم العتيق</p>
                                                <p className="text-[#17a2b8] text-xs">مريض</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            تسلم أياديكم على الشغل الممتاز. نظافة، دقة، والتزام كامل بالموعد. شكرًا لكم.
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://dr-saaleh.netlify.app/assets/img/client-image/2.png"
                                                alt="عبدالعزيز القحطاني"
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">عبدالعزيز القحطاني</p>
                                                <p className="text-[#17a2b8] text-xs">مريض</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
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
