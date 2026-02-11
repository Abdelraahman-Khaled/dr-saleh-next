export default function AcademicResearchSection() {
    const academicRoles = [
        'أستاذ جراحة التجميل والترميم',
        'رئيس أقسام جراحة التجميل في عدة مستشفيات مرجعية',
        'مدير برنامج البورد السعودي لجراحة التجميل (المنطقة الشرقية)',
        'مقيّم برامج الدكتوراه بالهيئة السعودية للتخصصات الصحية',
        'رئيس أقسام أكاديمية وتعليمية في مؤسسات صحية كبرى',
    ];

    const researchList = [
        'أبحاث متعددة المراكز في علاج الحروق باستخدام بروتوكولات MEBO وMEBT',
        'أبحاث حول التصوير غير التدخلي لإصابات الجهاز العضلي والأربطة',
        'المشاركة كمؤلف مشارك في أطلس (Atlas of MEBO)',
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Academic Leadership */}
                    <div className="bg-gradient-to-br from-[#17a2b8]/5 to-[#17a2b8]/10 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[#17a2b8] rounded-full flex items-center justify-center">
                                <i className="ri-building-line text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">القيادة الأكاديمية والأدوار التعليمية</h3>
                                <span className="text-[#17a2b8] text-sm">جرّاح يعلّم ويقود</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">
                            شغل د. الغامدي عدة مناصب أكاديمية وقيادية بارزة، من بينها:
                        </p>
                        <ul className="space-y-3">
                            {academicRoles.map((role, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <i className="ri-arrow-left-s-line text-[#17a2b8] mt-1"></i>
                                    <span className="text-gray-700">{role}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Research */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[#17a2b8] rounded-full flex items-center justify-center">
                                <i className="ri-microscope-line text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">البحث العلمي والمساهمة الأكاديمية</h3>
                                <span className="text-[#17a2b8] text-sm">تطوير المعرفة من خلال البحث السريري</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">
                            ساهم د. الغامدي بفاعلية في الأبحاث السريرية المتعلقة بالجراحة الترميمية والتصوير الطبي ورعاية الحروق. ومن أبرز مساهماته البحثية:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {researchList.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <i className="ri-file-text-line text-[#17a2b8] mt-1"></i>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-500 text-sm border-t border-gray-200 pt-4">
                            تعكس هذه الأبحاث تركيزه على تحسين نتائج المرضى، وتعزيز السلامة، والتخطيط الجراحي القائم على الدليل العلمي.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
