import Link from 'next/link';

export default function ContactHeroSection() {
    return (
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20reception%20and%20contact%20center%20with%20elegant%20teal%20color%20scheme%20professional%20healthcare%20environment%20with%20comfortable%20waiting%20area%20and%20friendly%20staff%20clean%20minimalist%20design&width=1920&height=600&seq=contact-hero-1&orientation=landscape)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
            <div className="container mx-auto px-4 relative z-10 py-32">
                <div className="text-center text-white">
                    <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
                        <Link href="/" className="hover:underline cursor-pointer">الرئيسية</Link>
                        <i className="ri-arrow-left-s-line"></i>
                        <span>تواصل معنا</span>
                    </nav>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">تواصل معنا</h1>
                    <p className="text-xl opacity-95 max-w-2xl mx-auto">
                        نحن هنا للإجابة على استفساراتك ومساعدتك في حجز موعدك
                    </p>
                </div>
            </div>
        </section>
    );
}
