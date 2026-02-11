export default function PhilosophySection() {
    const professionalValues = [
        'السلامة كأولوية قصوى',
        'الصدق في التوصيات والتوقعات',
        'الشفافية طوال رحلة العلاج',
        'احترام استقلالية المريض وفرديته',
    ];

    const academicParticipation = [
        'تعليم وتدريب الأطباء المقيمين والزملاء',
        'المشاركة في المؤتمرات الوطنية والدولية',
        'التعليم الطبي المستمر',
        'التطوير الأكاديمي والمهني',
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">فلسفة الجمال الطبيعي</span>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        يتبع د. الغامدي فلسفة <strong>المظهر الطبيعي</strong>، مؤمنًا بأن أنجح النتائج التجميلية هي تلك الدقيقة والمتوازنة، والتي تحترم السمات الفريدة لكل مريض. الهدف ليس خلق وجه جديد، بل استعادة التناغم والتناسق والثقة — مع الحفاظ على التعبير، والشخصية، والهوية.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        {/* Evidence-Based Approach */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                    <i className="ri-microscope-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">النهج الطبي القائم على الدليل</h3>
                            </div>
                            <p className="text-gray-600">
                                تستند جميع القرارات الجراحية إلى الطب المبني على البراهين، من خلال الدمج بين: <strong>الأبحاث العلمية | الإرشادات السريرية | الخبرة الجراحية الواسعة</strong>. يُصمَّم كل برنامج علاجي وفق التشريح والوظيفة وتوقعات واقعية، بما يضمن نتائج مسؤولة وقابلة للتنبؤ.
                            </p>
                        </div>

                        {/* Professional Values */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                    <i className="ri-shield-check-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">القيم المهنية</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                ترتكز ممارسة د. الغامدي على قيم طبية أساسية توجه كل تفاعل مع المرضى:
                            </p>
                            <ul className="space-y-2">
                                {professionalValues.map((value, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <i className="ri-check-line text-[#17a2b8]"></i>
                                        <span className="text-gray-700">{value}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 text-sm mt-4 pt-4 border-t border-gray-200 italic">
                                لا يتم الضغط على المرضى لإجراء أي تدخل، ويُشجَّعون دائمًا على اتخاذ قرارات واعية ومستنيرة.
                            </p>
                        </div>

                        {/* Academic Participation */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                    <i className="ri-graduation-cap-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">المشاركة الأكاديمية والمهنية</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                بصفته أستاذًا، يظل د. الغامدي منخرطًا بشكل نشط في:
                            </p>
                            <ul className="space-y-2">
                                {academicParticipation.map((activity, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <i className="ri-check-line text-[#17a2b8]"></i>
                                        <span className="text-gray-700">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/dr/6.png"
                            alt="Vision"
                            className="w-full rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
