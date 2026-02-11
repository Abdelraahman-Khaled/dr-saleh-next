import Link from 'next/link';

export default function DoctorIntroOperationsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            عن د. صالح
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            جرّاح يقوده العلم والحكم والمسؤولية
                        </h2>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
                        د. صالح الغامدي هو أستاذ واستشاري أول في جراحة التجميل والترميم والجراحة التجميلية، ويتمتع بخبرة واسعة في كلٍ من التجميل الدقيق والرعاية الترميمية المعقدة. تقوم ممارسته على قناعة راسخة بأن جراحة التجميل لا تتعلق بالموضة أو التغيير المبالغ فيه، بل بالدقة والتوازن والوظيفة طويلة الأمد. يُتعامل مع كل مريض كحالة فردية من خلال تقييم دقيق، ونقاش صريح، وتخطيط مدروس. ويختار المرضى د. الغامدي لوضوح تواصله والتزامه بنتائج طبيعية ومستقرة ومناسبة — دون مبالغة.
                    </p>

                    <div className="text-center">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                        >
                            اقرأ أكثر!
                            <i className="ri-arrow-left-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
