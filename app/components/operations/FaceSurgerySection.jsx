import Link from 'next/link';

export default function FaceSurgerySection() {
    const faceOperations = [
        {
            title: 'تجميل الأنف',
            description: 'تحسين بنيوي وتجميلي للأنف مع عناية خاصة بالمظهر ووظيفة التنفس.',
            icon: 'ri-puzzle-line'
        },
        {
            title: 'شد الوجه والشد المصغّر',
            description: 'تقنيات لتجديد شباب الوجه تعالج علامات التقدم في العمر مع الحفاظ على حركة الوجه الطبيعية وتعابيره.',
            icon: 'ri-user-smile-line'
        },
        {
            title: 'جراحة الجفون (Blepharoplasty)',
            description: 'إجراءات للجفون العلوية والسفلية لاستعادة مظهر أكثر انتعاشًا دون تغيير طابع العين.',
            icon: 'ri-eye-line'
        },
        {
            title: 'تحديد الذقن وخط الفك',
            description: 'تحسين التناسق والتحديد من خلال نحت دقيق للملامح.',
            icon: 'ri-user-line'
        },
        {
            title: 'نقل الدهون',
            description: 'استعادة الحجم باستخدام دهون المريض نفسه للحصول على نتائج طبيعية المظهر.',
            icon: 'ri-drop-line'
        },
        {
            title: 'رفع الشفة',
            description: 'تحسين نسب الشفاه لتحقيق مظهر شبابي ومتوازن.',
            icon: 'ri-heart-line'
        },
    ];

    const noseOperations = [
        {
            title: 'ترميم الإصابات',
            description: 'إصلاح الإصابات الناتجة عن الحوادث أو الصدمات مع مراعاة الوظيفة والمظهر معًا.',
            icon: 'ri-first-aid-kit-line'
        },
        {
            title: 'التشوهات الخِلقية',
            description: 'تصحيح العيوب البنيوية الموجودة منذ الولادة.',
            icon: 'ri-heart-pulse-line'
        },
        {
            title: 'ترميم الأنف الوظيفي',
            description: 'استعادة تدفق الهواء والدعم البنيوي للأنف.',
            icon: 'ri-lungs-line'
        },
        {
            title: 'تصحيح الندبات',
            description: 'تحسين مظهر الندبات ووظيفتها من خلال تقنيات جراحية مخصّصة.',
            icon: 'ri-scissors-cut-line'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">الخبرات</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            خبرة لا تُقاس بالزمن، بل بالحكم الطبي والمسؤولية
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            لا تُقاس خبرة د. صالح الخلف بالعدد أو الزمن، بل بالحكم الطبي والمسؤولية — مع الالتزام الدائم بمبدأ الثبات والجودة الذي يميز حلول الرعاية الجراحية المتفوقة.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-l from-[#17a2b8]/5 to-transparent p-6 rounded-2xl border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-user-smile-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">الجراحات التجميلية</h3>
                                        <p className="text-sm text-gray-600 mt-1">إجراءات تهدف إلى تحسين المظهر مع الحفاظ على التوازن الطبيعي والتعبير.</p>
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {faceOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <i className={`${op.icon} text-[#17a2b8] text-xl mt-1 flex-shrink-0`}></i>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{op.title}</h4>
                                                <p className="text-sm text-gray-600">{op.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-l from-[#17a2b8]/5 to-transparent p-6 rounded-2xl border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-puzzle-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">الجراحات الترميمية</h3>
                                        <p className="text-sm text-gray-600 mt-1">إجراءات تركز على استعادة الوظيفة والبنية وجودة الحياة.</p>
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {noseOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <i className={`${op.icon} text-[#17a2b8] text-xl mt-1 flex-shrink-0`}></i>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{op.title}</h4>
                                                <p className="text-sm text-gray-600">{op.description}</p>
                                            </div>
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
                            <div className="absolute -top-4 -right-4 w-full h-full bg-[#17a2b8]/10 rounded-3xl"></div>
                            <img
                                src="/doctor/pic-23.jpg"
                                alt="جراحات تجميل الوجه"
                                className="relative z-10 w-full rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
