import Link from 'next/link';

export default function DoctorIntroSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Title */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        نبذة عن د. صالح الغامدي
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl text-[#17a2b8] font-semibold mb-8">
                        أستاذ واستشاري أول في جراحة التجميل والترميم والجراحة التجميلية
                    </p>

                    {/* Description Paragraphs */}
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
                        <p>
                            يولي د. صالح اهتمامًا خاصًا بالتفاصيل في جراحات تجميل الوجه، مع احترام الهوية الطبيعية لكل مريض. تستند ممارسته إلى خبرة واسعة في جراحات التجميل والحالات الترميمية المعقدة، بما في ذلك إعادة بناء إصابات الوجه، وجراحة اليد، وعلاج الحروق، وإعادة البناء بعد الصدمات أو الأورام.
                        </p>
                        <p>
                            تمكّنه هذه الخبرة السريرية الواسعة من إجراء كل عملية باحترام عميق للتشريح، والوظيفة، والنتائج طويلة المدى.
                        </p>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-all shadow-lg whitespace-nowrap"
                        >
                            احجز استشارة
                            <i className="ri-calendar-check-line"></i>
                        </Link>

                        <a
                            href="https://wa.me/966123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20BA5A] transition-all shadow-lg whitespace-nowrap"
                        >
                            تواصل عبر واتساب
                            <i className="ri-whatsapp-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
