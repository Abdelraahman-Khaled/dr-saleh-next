import Link from 'next/link';

export default function CTABanner() {
    return (
        <section className="py-12 bg-[#17a2b8]">
            <div className="container mx-auto px-4 text-center">
                <h4 className="text-2xl font-bold text-white mb-2">الاستشارة الواعية هي الخطوة الأولى</h4>
                <p className="text-white/90 mb-6">تبدأ النتائج الآمنة وذات المعنى بالوضوح وبناء الثقة.</p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                    احجز موعد الآن
                    <i className="ri-calendar-line"></i>
                </Link>
            </div>
        </section>
    );
}
