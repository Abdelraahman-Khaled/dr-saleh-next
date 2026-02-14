import Link from 'next/link';

export default function AppointmentCTA() {
    return (
        <section
            className="md:py-8 lg:py-16 xl:py-24 bg-[#17a2b8] overflow-visible relative flex items-center"
            style={{ backgroundImage: 'url(/assets/pattern.webp)' }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#17a2b8]/95 to-[#138496]/95 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Column - Hidden on mobile, shown on large screens */}
                    <div className="hidden lg:block order-1 relative h-[500px]">
                        <div className="absolute bottom-0 w-full h-[120%] flex items-end justify-center pointer-events-none">
                            {/* Decorative Rotating Frame */}
                            <div className="absolute bottom-10 w-[480px] h-[480px] border border-white/10 rounded-full animate-spin-slow" style={{ animation: 'spin 20s linear infinite' }}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                            </div>

                            <div className="absolute bottom-20 w-[420px] h-[420px] border border-white/5 rounded-full animate-spin-slow" style={{ animation: 'spin 15s linear infinite reverse' }}>
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute top-32 right-12 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl rotate-12 flex items-center justify-center animate-bounce shadow-lg border border-white/20" style={{ animationDuration: '3s' }}>
                                <i className="ri-calendar-check-line text-3xl text-white"></i>
                            </div>

                            <div className="absolute top-48 left-8 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full -rotate-12 flex items-center justify-center animate-pulse shadow-lg border border-white/20" style={{ animationDuration: '4s' }}>
                                <i className="ri-stethoscope-line text-2xl text-white"></i>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute bottom-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl transform translate-y-1/4"></div>

                            <img
                                src="/doctor/pic-20.png"
                                alt="د. صالح الخلف"
                                className="relative z-10 h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-2 text-white">
                        <div className="relative z-10 text-center lg:text-right">
                            <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6 shadow-lg">
                                كيف تحجز موعدك؟
                            </span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                ببساطة. مباشرة. <br />
                                <span className="text-white/80">وبأمان تام.</span>
                            </h2>

                            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg mx-auto lg:mr-0 lg:ml-auto">
                                نحن هنا لتسهيل رحلتك العلاجية. تواصل معنا مباشرة عبر القنوات الرسمية للحصول على استشارة سريعة وموثوقة.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group"
                                >
                                    <span>احجز موعد الآن</span>
                                    <i className="ri-calendar-check-line text-xl group-hover:scale-110 transition-transform"></i>
                                </Link>

                                <a
                                    href="https://wa.me/966508277780"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
                                >
                                    <span> تواصل عبر الواتساب</span>
                                    <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
