import Link from 'next/link';

export default function ReconstructiveSurgerySection() {
    const burnOperations = [
        { title: 'إعادة البناء بعد الحوادث والصدمات', icon: 'ri-hospital-line' },
        { title: 'علاج التشوهات الخِلقية', icon: 'ri-heart-add-line' },
        { title: 'إعادة البناء بعد استئصال الأورام', icon: 'ri-surgical-mask-line' },
        { title: 'تصحيح الندبات وعلاج الجروح المعقدة', icon: 'ri-bandage-line' },
        { title: 'ترميم الحروق وعلاج الندبات', icon: 'ri-fire-line' },
        { title: 'استعادة الوظيفة', icon: 'ri-hand-heart-line' },
        { title: 'تحسين الندبات وتعديلها', icon: 'ri-magic-line' },
        { title: 'تحسين الحركة والمظهر مع مرور الوقت', icon: 'ri-time-line' },
        { title: 'مراعاة الجوانب النفسية وجودة الحياة', icon: 'ri-mental-health-line' },
    ];

    const handOperations = [
        { title: 'إصلاح الأوتار والأعصاب', icon: 'ri-hand-coin-line' },
        { title: 'إصابات اليد المعقدة', icon: 'ri-first-aid-kit-line' },
        { title: 'الجراحات الترميمية الدقيقة', icon: 'ri-microscope-line' },
        { title: 'استعادة الوظيفة بعد الصدمات', icon: 'ri-restart-line' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">مسؤولية طبية</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            رعاية جراحية متفوقة ودقيقة
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            كل عملية — سواء كانت تجميلية أو وظيفية — تُجرى بنفس مستوى العناية بالتفاصيل، والتركيز على الدقة، واحترام المريض. اتصل بالعيادة لحجز استشارة!
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-heart-pulse-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">ترميم الحروق وعلاج الندبات</h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {burnOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                                            <i className="ri-check-double-line text-[#17a2b8]"></i>
                                            <span className="text-sm">{op.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-hand-heart-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">جراحة اليد والميكروسكوب الجراحي</h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {handOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                                            <i className="ri-check-double-line text-[#17a2b8]"></i>
                                            <span className="text-sm">{op.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer"
                        >
                            احجز استشارة
                            <i className="ri-calendar-check-line"></i>
                        </Link>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#17a2b8]/10 rounded-3xl"></div>
                            <img
                                src="/dr/5.png"
                                alt="جراحات ترميمية"
                                className="relative z-10 w-full rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
