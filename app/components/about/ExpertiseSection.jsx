import Link from 'next/link';

export default function ExpertiseSection() {
    const expertiseAreas = [
        'الجراحة التجميلية',
        'الجراحة الترميمية',
        'ترميم الحروق',
        'جراحة اليد',
        'إعادة بناء الوجه والفكين',
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">مجالات الخبرة</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            تمتد خبرة د. صالح عبر النطاق الكامل لجراحة التجميل والترميم، مما يتيح له علاج الحالات الاختيارية والحالات الطبية المعقدة بثقة وعناية متساويتين. وتشمل مجالات تخصصه:
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            {expertiseAreas.map((area, idx) => (
                                <li key={idx} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#17a2b8] rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-check-line text-white"></i>
                                    </div>
                                    <span className="text-gray-800 font-medium">{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
                    <p className="text-gray-600 mb-4">
                        تُعزّز هذه الخلفية السريرية الواسعة دقة اتخاذ القرار، وتضمن ألا تأتي النتائج التجميلية على حساب الوظيفة أو السلامة.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#17a2b8] font-medium hover:gap-3 transition-all cursor-pointer"
                    >
                        اكتشف المزيد!
                        <i className="ri-arrow-left-line"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
