import Link from 'next/link';

export default function AppointmentCTA() {
    return (
        <section
            className="py-20 bg-[#17a2b8] overflow-hidden relative"
            style={{ backgroundImage: 'url(/assets/pattern.webp)' }}
        >
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image - Hidden on mobile */}
                    <div className="hidden lg:block order-1">
                        <div className="relative">
                            <img
                                alt="Appointment"
                                loading="lazy"
                                width={600}
                                height={400}
                                className="h-auto object-cover rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
                                src="/dr/1.png"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-2">
                        <div className="relative z-10">
                            <div className="mb-8">
                                <span
                                    className="text-white block mb-4 text-right"
                                    style={{ fontSize: '1.2rem', opacity: 0.9 }}
                                >
                                    كيف تحجز؟
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white text-right mb-6">
                                    ببساطة. مباشرة. وبأمان.
                                </h2>
                            </div>

                            <div className="text-right">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                >
                                    تحدث مباشرة مع العيادة
                                    <i className="ri-notification-line text-xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
