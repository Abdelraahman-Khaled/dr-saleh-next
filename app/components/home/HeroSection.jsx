'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [textIndex, setTextIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const heroTexts = [
        {
            title: 'دقة تمنحك الطمأنينة…',
            subtitle: 'وبالنتيجة تشبهك!',
            description: 'يبدأ د. صالح الغامدي بالعلم، ويجعل الخبرة دليله، ويستهدف النتائج الصحيحة — وليس بالضرورة الأكثر وضوحًا.'
        },
        {
            title: 'نفهمك، نشعر بك،',
            subtitle: 'ونحن هنا من أجلك!',
            description: 'كل مريض يصل وهو يحمل أسئلة. بعضهم يصل بتردد. يؤمن د. صالح الخلف أن النتائج المتميزة تبدأ قبل الجراحة بوقت طويل — بالاستماع الجيد، والصدق، والحكم الطبي السليم.'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % heroTexts.length);
                setFade(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen sm:min-h-[85vh] lg:max-h-[58vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://readdy.ai/api/search-image?query=Modern%20luxury%20medical%20clinic%20interior%20with%20elegant%20teal%20and%20white%20color%20scheme%20soft%20ambient%20lighting%20premium%20healthcare%20environment%20clean%20minimalist%20design%20professional%20medical%20aesthetic%20clinic%20background&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#0d5c6a]/95 via-[#17a2b8]/85 to-[#17a2b8]/70"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-52 h-52 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-3 sm:px-4 relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-0">
                <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-120px)]">
                    {/* Content */}
                    <div className="text-white order-2 lg:order-1 lg:col-span-5 px-2 sm:px-0">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-sm rounded-full mb-3 sm:mb-5">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            <span className="text-xs sm:text-sm font-medium">استشاري جراحة التجميل والترميم</span>
                        </div>

                        <h1 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-5 leading-tight transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            {heroTexts[textIndex].title}
                            <br />
                            <span className="text-white/90">{heroTexts[textIndex].subtitle}</span>
                        </h1>

                        <p className={`text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed text-white/90 max-w-md transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            {heroTexts[textIndex].description}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap text-sm"
                            >
                                <i className="ri-calendar-check-line text-lg"></i>
                                احجز استشارة
                            </Link>
                            <a
                                href="https://wa.me/966508277780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-[#17a2b8] transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap text-sm"
                            >
                                <i className="ri-whatsapp-line text-lg"></i>
                                تحدث مع العيادة
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xs:justify-start gap-4 sm:gap-6 pt-4 sm:pt-5 border-t border-white/20">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">+15</div>
                                <div className="text-[10px] sm:text-xs text-white/70">سنة خبرة</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">+5000</div>
                                <div className="text-[10px] sm:text-xs text-white/70">عملية ناجحة</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">100%</div>
                                <div className="text-[10px] sm:text-xs text-white/70">رضا المرضى</div>
                            </div>
                        </div>
                    </div>

                    {/* Doctor Image */}
                    <div className="relative order-1 lg:order-2 lg:col-span-7 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Decorative Circle */}
                            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>

                            {/* Image Container */}
                            <div className="relative w-[280px] h-[380px] xs:w-[320px] xs:h-[420px] sm:w-[380px] sm:h-[500px] md:w-[440px] md:h-[580px] lg:w-[520px] lg:h-[680px] xl:w-[580px] xl:h-[760px]">
                                <img
                                    src="/dr/1.png"
                                    alt="د. صالح الخلف"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -left-1 xs:-left-2 sm:-left-10 lg:-left-10 top-1/4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl">
                                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                        <i className="ri-award-line text-[#17a2b8] text-base sm:text-xl lg:text-2xl"></i>
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-gray-900 leading-tight">معادلة البورد السعودي</div>
                                        <div className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">جراحة التجميل</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 2 */}
                            <div className="absolute -right-1 xs:-right-2 sm:-right-2 lg:-right-8 bottom-1/4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl">
                                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <i className="ri-verified-badge-line text-emerald-500 text-base sm:text-xl lg:text-2xl"></i>
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-gray-900 leading-tight">البورد الألماني</div>
                                        <div className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">معتمد دولياً</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
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
            </button>
        </section>
    );
}
