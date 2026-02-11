import Link from 'next/link';

export default function OperationsCTASection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://dr-saaleh.netlify.app/assets/img/appointment.webp)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#17a2b8]/95 to-[#138496]/95" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <span className="text-white/80 font-semibold text-sm mb-3 block">كيف تحجز؟</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            ببساطة. مباشرة. وبأمان.
                        </h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed">
                            هل لديك استفسار عن أي عملية؟ تواصل معنا الآن للحصول على استشارة ومعرفة المزيد عن الإجراء المناسب لك
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                            >
                                احجز استشارة
                                <i className="ri-calendar-check-line"></i>
                            </Link>
                            <a
                                href="https://wa.me/966508277780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold transition-colors whitespace-nowrap cursor-pointer"
                            >
                                <i className="ri-whatsapp-line text-xl"></i>
                                واتساب
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end lg:w-1/2">
                        <img
                            src="/dr/1.png"
                            alt="احجز استشارة"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
