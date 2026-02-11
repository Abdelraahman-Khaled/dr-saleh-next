import Link from 'next/link';

export default function BodySurgerySection() {
    const bodyOperations = [
        { title: 'شد البطن', icon: 'ri-body-scan-line' },
        { title: 'شفط الدهون', icon: 'ri-drop-line' },
        { title: 'نحت الجسم', icon: 'ri-shape-line' },
        { title: 'شد الذراعين', icon: 'ri-hand-heart-line' },
        { title: 'شد الفخذين', icon: 'ri-walk-line' },
        { title: 'تجميل الثدي', icon: 'ri-heart-2-line' },
    ];

    return (
        <section className="py-20 bg-[#f4f9fd]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">جراحات الجسم</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        نحت وتجميل الجسم
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        نقدم مجموعة متكاملة من جراحات تجميل الجسم للحصول على القوام المثالي الذي تحلم به
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bodyOperations.map((op, idx) => (
                        <div
                            key={idx}
                            className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className={`${op.icon} text-white text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{op.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                إجراء متخصص لتحسين مظهر الجسم والحصول على نتائج طبيعية ومتناسقة.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[#17a2b8] font-semibold text-sm hover:gap-3 transition-all cursor-pointer"
                            >
                                استشارة مجانية
                                <i className="ri-arrow-left-line"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
