import Link from 'next/link';

export default function CertificationsSection() {
    const certifications = [
        {
            title: ' معادله البورد السعودي ',
            subtitle: 'جراحة التجميل والترميم',
        },
        {
            title: 'البورد الألماني (FACHARZT)',
            subtitle: 'جراحة التجميل والجراحة التجميلية',
        },
        {
            title: 'شهادة الاعتراف من نقابة الأطباء في بافاريا – ألمانيا (Bayerische Landesärztekammer)',
            subtitle: 'اختصاصي جراحة التجميل والترميم (ألمانيا، 2010)  (Plastische und Ästhetische Chirurgie).',
            detail: 'تعتبر من أقوى الشهادات المهنية في ألمانيا، وتؤكد إتمام برنامج التدريب التخصصي المعتمد وفق النظام الألماني.',
        },
        {
            title: 'شهادة تدريب تخصصي في جراحة تشوهات الوجه والفكين (Craniofacial Surgery Program)',
            subtitle: 'مستشفى بوغنهاوزن الجامعي – ميونخ (TUM)',
            detail: 'تثبت إكمال تدريب تخصصي متقدم في جراحة الوجه والفكين، الجراحة الترميمية، جراحة الحروق واليد (أكتوبر 2009 - مارس 2010).',
        },
        {
            title: 'شهادة التصنيف المهني – الهيئة السعودية للتخصصات الصحية',
            subtitle: 'تصنيف واعتماد مهني رسمي (2010)',
            detail: 'تصنيف "اختصاصي جراحة التجميل" بناءً على المؤهلات العلمية والخبرة العملية الدولية.',
        },
    ];

    const consultancyList = [
        'اعتماد استشاري من الهيئة السعودية للتخصصات الصحية',
        'اعتماد استشاري من هيئة الصحة بدبي (الإمارات العربية المتحدة)',
        'اعتماد استشاري من الهيئة الوطنية لتنظيم المهن الصحية (مملكة البحرين)',
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">الشهادات والاعتمادات المهنية</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 max-w-3xl mx-auto">
                        يحمل د. الغامدي عدة شهادات واعتمادات رفيعة المستوى، تعكس التزامه بأعلى معايير الكفاءة الجراحية الدولية.
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Certifications List */}
                    <div className="space-y-4">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-award-line text-[#17a2b8] text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                                        <p className="text-[#17a2b8] text-sm mb-2">{cert.subtitle}</p>
                                        {cert.detail && <p className="text-gray-500 text-sm">{cert.detail}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Consultancy Box */}
                    <div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                            <ul className="space-y-4 mb-8">
                                {consultancyList.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <i className="ri-medal-line text-[#17a2b8] text-xl mt-1"></i>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-[#17a2b8]/5 rounded-xl p-6 border border-[#17a2b8]/20">
                                <h5 className="font-bold text-gray-900 mb-2">أستاذ زائر فخري (Gulf Medical College – الإمارات العربية المتحدة)</h5>
                                <p className="text-gray-600 text-sm">
                                    كلية الخليج الطبية – الإمارات (2008)، تقديراً للمساهمات العلمية والبحثية.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
