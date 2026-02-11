import Link from 'next/link';

export default function GalleryHeroSection() {
    return (
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/gallery.jpg)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
            <div className="container mx-auto px-4 relative z-10 py-32">
                <div className="text-center text-white">
                    <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
                        <Link href="/" className="hover:underline cursor-pointer">الرئيسية</Link>
                        <i className="ri-arrow-left-s-line"></i>
                        <span>معرض الصور</span>
                    </nav>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">معرض الصور</h1>
                    <p className="text-xl opacity-95 max-w-2xl mx-auto">
                        لمحات من المسيرة المهنية والأكاديمية للدكتور صالح الغامدي
                    </p>
                </div>
            </div>
        </section>
    );
}
