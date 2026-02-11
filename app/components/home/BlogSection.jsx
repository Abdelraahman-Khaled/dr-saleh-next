import Link from 'next/link';

export default function BlogSection() {
    const blogs = [
        {
            title: 'تجميل الأنف',
            img: '5',
            desc: 'عملية تجميل الأنف تهدف إلى تحسين شكل الأنف ووظيفته...',
        },
        {
            title: 'شفط الدهون',
            img: '6',
            desc: 'شفط الدهون هو إجراء تجميلي يزيل الدهون الزائدة...',
        },
        {
            title: 'شد الوجه',
            img: '7',
            desc: 'عملية شد الوجه تساعد في استعادة شباب البشرة...',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        المدونات
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        مركز للمعلومات الطبية — من أجلك!
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="w-full h-48 bg-gray-100">
                                <img
                                    src={`https://dr-saaleh.netlify.app/assets/img/video-thumbnails/${blog.img}.png`}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{blog.desc}</p>
                                <Link
                                    href="/blogs"
                                    className="text-[#17a2b8] font-medium text-sm hover:underline inline-flex items-center gap-1"
                                >
                                    قراءة المزيد
                                    <i className="ri-arrow-left-line"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                    >
                        اطلع على جميع المقالات
                        <i className="ri-arrow-left-line"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
