import Link from 'next/link';

export default function FinalCTASection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">ابدأ باستشارة قائمة على المعرفة.</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">احجز استشارة مع د. صالح الخلف!</h2>
                    <p className="text-gray-600 mb-8">الحوار الأولي هو الخطوة الأولى نحو نتائج آمنة وذات معنى.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors shadow-lg whitespace-nowrap cursor-pointer"
                    >
                        احجز موعد الآن
                        <i className="ri-calendar-check-line"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
