import Link from 'next/link';

export default function ServicesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 flex justify-start">
                        <div className="w-full max-w-md">
                            <img
                                src="/dr/3.png"
                                alt="Services"
                                className="w-full h-auto rounded-3xl shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            مسؤولية طبية
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            رعاية جراحية متفوقة ودقيقة
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            كل عملية — سواء كانت تجميلية أو وظيفية — تُجرى بنفس مستوى العناية
                            بالتفاصيل، والتركيز على الدقة، واحترام المريض.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-puzzle-line text-[#17a2b8] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            الجراحة الترميمية
                                        </h3>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>إعادة البناء بعد الحوادث والصدمات</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>علاج التشوهات الخِلقية</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>إعادة البناء بعد استئصال الأورام</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>تصحيح الندبات وعلاج الجروح المعقدة</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-hand-heart-line text-[#17a2b8] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            جراحة اليد والميكروسكوب الجراحي
                                        </h3>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>إصلاح الأوتار والأعصاب</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>إصابات اليد المعقدة</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>الجراحات الترميمية الدقيقة</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>استعادة الوظيفة بعد الصدمات</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-stethoscope-line text-[#17a2b8] text-xl"></i>                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        ترميم الحروق وعلاج الندبات
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>استعادة الوظيفة</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>تحسين الندبات وتعديلها</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>تحسين الحركة والمظهر مع مرور الوقت</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>مراعاة الجوانب النفسية وجودة الحياة</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                        >
                            احجز استشارة
                            <i className="ri-calendar-check-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
