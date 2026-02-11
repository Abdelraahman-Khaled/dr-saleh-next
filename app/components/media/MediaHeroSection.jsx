import Link from 'next/link';

export default function MediaHeroSection() {
    return (
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20TV%20studio%20and%20media%20interview%20setting%20with%20elegant%20teal%20lighting%20modern%20broadcast%20equipment%20cameras%20and%20professional%20lighting%20setup%20clean%20minimalist%20media%20production%20environment&width=1920&height=600&seq=media-hero-1&orientation=landscape)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
            <div className="container mx-auto px-4 relative z-10 py-32">
                <div className="text-center text-white">
                    <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
                        <Link href="/" className="hover:underline cursor-pointer">الرئيسية</Link>
                        <i className="ri-arrow-left-s-line"></i>
                        <span>الظهور الإعلامي</span>
                    </nav>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">الظهور الإعلامي</h1>
                    <p className="text-xl opacity-95 max-w-2xl mx-auto">
                        شاهد أبرز اللقاءات التلفزيونية والمشاركات العلمية للدكتور صالح الخلف
                    </p>
                </div>
            </div>
        </section>
    );
}
