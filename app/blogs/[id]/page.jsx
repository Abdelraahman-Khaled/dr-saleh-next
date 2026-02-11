'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogDetailPage({ params }) {
    // Sample blog data - in production, this would come from a database or CMS
    const blogData = {
        1: {
            id: 1,
            title: 'تجميل الأنف: دليل شامل للعملية والنتائج',
            excerpt: 'عملية تجميل الأنف تهدف إلى تحسين شكل الأنف ووظيفته، مما يعزز تناسق ملامح الوجه ويزيد من الثقة بالنفس.',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/5.png',
            date: '15 يناير 2024',
            author: 'د. صالح الخلف',
            category: 'جراحة تجميلية',
            readTime: '8 دقائق',
            content: `
        <h2>مقدمة عن تجميل الأنف</h2>
        <p>تُعد عملية تجميل الأنف من أكثر العمليات التجميلية شيوعاً حول العالم. تهدف هذه العملية إلى تحسين شكل الأنف ووظيفته، مما يساعد على تحقيق التوازن والتناسق في ملامح الوجه.</p>

        <h2>أنواع عمليات تجميل الأنف</h2>
        <p>هناك نوعان رئيسيان من عمليات تجميل الأنف:</p>
        <ul>
          <li><strong>تجميل الأنف التجميلي:</strong> يركز على تحسين المظهر الخارجي للأنف</li>
          <li><strong>تجميل الأنف الوظيفي:</strong> يهدف إلى تحسين وظيفة التنفس بالإضافة إلى المظهر</li>
        </ul>

        <h2>من هو المرشح المثالي؟</h2>
        <p>المرشح المثالي لعملية تجميل الأنف هو الشخص الذي:</p>
        <ul>
          <li>يتمتع بصحة جيدة عامة</li>
          <li>لديه توقعات واقعية من العملية</li>
          <li>أكمل نمو الوجه (عادة بعد سن 16-18 سنة)</li>
          <li>لا يعاني من مشاكل صحية خطيرة</li>
        </ul>

        <h2>خطوات العملية</h2>
        <p>تتم عملية تجميل الأنف عادة تحت التخدير العام وتستغرق من ساعتين إلى أربع ساعات، حسب مدى تعقيد الحالة. يتم إجراء شقوق صغيرة داخل الأنف أو في قاعدته لإعادة تشكيل الغضاريف والعظام.</p>

        <h2>فترة التعافي</h2>
        <p>معظم المرضى يمكنهم العودة إلى العمل خلال أسبوع إلى أسبوعين. ومع ذلك، قد يستغرق الأمر عدة أشهر حتى يختفي التورم بالكامل وتظهر النتائج النهائية.</p>

        <h2>النتائج المتوقعة</h2>
        <p>النتائج النهائية لعملية تجميل الأنف تظهر تدريجياً على مدار عام كامل. من المهم أن يكون لديك توقعات واقعية ومناقشة أهدافك بوضوح مع جراحك.</p>

        <h2>نصائح ما بعد العملية</h2>
        <ul>
          <li>الحفاظ على رأسك مرفوعاً خلال النوم</li>
          <li>تجنب الأنشطة الشاقة لمدة 4-6 أسابيع</li>
          <li>عدم ارتداء النظارات لمدة 6 أسابيع على الأقل</li>
          <li>حماية الأنف من أشعة الشمس المباشرة</li>
          <li>اتباع تعليمات الطبيب بدقة</li>
        </ul>

        <h2>الخلاصة</h2>
        <p>تجميل الأنف عملية دقيقة تتطلب خبرة ومهارة عالية. من المهم اختيار جراح متخصص وذو خبرة واسعة لضمان الحصول على أفضل النتائج الممكنة.</p>
      `
        },
        2: {
            id: 2,
            title: 'شفط الدهون: التقنيات الحديثة والنتائج',
            excerpt: 'شفط الدهون هو إجراء تجميلي يزيل الدهون الزائدة من مناطق معينة في الجسم لتحسين القوام والمظهر العام.',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/6.png',
            date: '10 يناير 2024',
            author: 'د. صالح الخلف',
            category: 'نحت الجسم',
            readTime: '6 دقائق',
            content: `
        <h2>ما هو شفط الدهون؟</h2>
        <p>شفط الدهون هو إجراء جراحي يهدف إلى إزالة الدهون الزائدة من مناطق محددة في الجسم، مما يساعد على تحسين شكل الجسم وتناسقه.</p>

        <h2>المناطق الأكثر شيوعاً للعلاج</h2>
        <ul>
          <li>البطن والخصر</li>
          <li>الأرداف والفخذين</li>
          <li>الذراعين</li>
          <li>الذقن والرقبة</li>
          <li>الظهر</li>
        </ul>

        <h2>التقنيات الحديثة</h2>
        <p>تطورت تقنيات شفط الدهون بشكل كبير، وأصبحت أكثر أماناً وفعالية:</p>
        <ul>
          <li><strong>شفط الدهون بالفيزر:</strong> يستخدم الموجات فوق الصوتية لتفتيت الدهون</li>
          <li><strong>شفط الدهون بالليزر:</strong> يستخدم طاقة الليزر لإذابة الدهون</li>
          <li><strong>شفط الدهون التقليدي:</strong> الطريقة الكلاسيكية المثبتة</li>
        </ul>

        <h2>فترة التعافي والنتائج</h2>
        <p>معظم المرضى يمكنهم العودة للعمل خلال أسبوع. النتائج النهائية تظهر بعد 3-6 أشهر عندما يختفي التورم بالكامل.</p>
      `
        },
        3: {
            id: 3,
            title: 'شد الوجه: استعادة الشباب والنضارة',
            excerpt: 'عملية شد الوجه تساعد في استعادة شباب البشرة عن طريق إزالة الترهلات والتجاعيد.',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/7.png',
            date: '5 يناير 2024',
            author: 'د. صالح الخلف',
            category: 'تجديد الشباب',
            readTime: '7 دقائق',
            content: `
        <h2>عملية شد الوجه</h2>
        <p>تهدف عملية شد الوجه إلى تحسين علامات الشيخوخة في الوجه والرقبة، مما يمنح مظهراً أكثر شباباً ونضارة.</p>

        <h2>أنواع عمليات شد الوجه</h2>
        <ul>
          <li><strong>شد الوجه الكامل:</strong> يعالج الوجه والرقبة بالكامل</li>
          <li><strong>شد الوجه المصغر:</strong> يركز على مناطق محددة</li>
          <li><strong>شد الرقبة:</strong> يستهدف منطقة الرقبة فقط</li>
        </ul>

        <h2>النتائج والتعافي</h2>
        <p>النتائج تدوم عادة من 7 إلى 10 سنوات، ويمكن للمرضى العودة للأنشطة الطبيعية خلال 2-3 أسابيع.</p>
      `
        }
    };

    // Get blog post based on ID from params (default to 1 if not found)
    const blog = blogData[params?.id] || blogData[1];

    // Related posts
    const relatedPosts = [
        {
            id: 2,
            title: 'شفط الدهون',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/6.png',
            category: 'نحت الجسم'
        },
        {
            id: 3,
            title: 'شد الوجه',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/7.png',
            category: 'تجديد الشباب'
        },
        {
            id: 4,
            title: 'ترميم الحروق',
            image: 'https://dr-saaleh.netlify.app/assets/img/before1.webp',
            category: 'جراحة ترميمية'
        }
    ].filter(post => post.id !== blog.id);

    return (
        <div className="min-h-screen bg-white" dir="rtl">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 py-32">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        {/* Breadcrumb */}
                        <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
                            <Link href="/" className="hover:underline">الرئيسية</Link>
                            <i className="ri-arrow-left-s-line"></i>
                            <Link href="/blogs" className="hover:underline">المدونة</Link>
                            <i className="ri-arrow-left-s-line"></i>
                            <span>{blog.category}</span>
                        </nav>

                        {/* Category Badge */}
                        <span className="inline-block px-4 py-2 bg-[#17a2b8] rounded-full text-sm font-medium mb-6">
                            {blog.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex items-center justify-center gap-6 text-sm opacity-90">
                            <div className="flex items-center gap-2">
                                <i className="ri-user-line"></i>
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="ri-calendar-line"></i>
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="ri-time-line"></i>
                                <span>{blog.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Article Content */}
                            <article className="lg:col-span-8">
                                {/* Excerpt */}
                                <div className="bg-gray-50 border-r-4 border-[#17a2b8] p-6 rounded-lg mb-8">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                </div>

                                {/* Content */}
                                <div
                                    className="prose prose-lg max-w-none"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                    style={{
                                        lineHeight: '1.8',
                                        color: '#374151'
                                    }}
                                />

                                {/* Share Section */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">شارك المقال</h3>
                                    <div className="flex gap-3">
                                        <button className="w-12 h-12 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                            <i className="ri-facebook-fill text-xl"></i>
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                            <i className="ri-twitter-fill text-xl"></i>
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                            <i className="ri-whatsapp-fill text-xl"></i>
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                            <i className="ri-linkedin-fill text-xl"></i>
                                        </button>
                                    </div>
                                </div>
                            </article>

                            {/* Sidebar */}
                            <aside className="lg:col-span-4">
                                {/* Author Card */}
                                <div className="bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-2xl p-6 text-white mb-8">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <i className="ri-user-line text-[#17a2b8] text-3xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{blog.author}</h3>
                                        <p className="text-sm opacity-90 mb-4">
                                            استشاري جراحة التجميل والترميم
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#17a2b8] rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
                                        >
                                            احجز استشارة
                                            <i className="ri-calendar-check-line"></i>
                                        </Link>
                                    </div>
                                </div>

                                {/* Related Posts */}
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
                                    <div className="space-y-4">
                                        {relatedPosts.map((post) => (
                                            <Link
                                                key={post.id}
                                                href={`/blogs/${post.id}`}
                                                className="block group"
                                            >
                                                <div className="flex gap-4">
                                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img
                                                            src={post.image}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="text-xs text-[#17a2b8] font-medium">{post.category}</span>
                                                        <h4 className="text-sm font-bold text-gray-900 mt-1 group-hover:text-[#17a2b8] transition-colors line-clamp-2">
                                                            {post.title}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#17a2b8] to-[#138496]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            هل لديك استفسار؟
                        </h2>
                        <p className="text-lg mb-8 opacity-95">
                            احجز استشارة مع د. صالح الخلف للحصول على تقييم شامل ومناقشة خياراتك
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-xl"
                            >
                                <i className="ri-calendar-check-line text-xl"></i>
                                احجز استشارة
                            </Link>
                            <a
                                href="https://wa.me/966508277780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#17a2b8] transition-all duration-300 inline-flex items-center gap-2"
                            >
                                <i className="ri-whatsapp-line text-xl"></i>
                                تواصل عبر واتساب
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Styles for prose content */}
            <style jsx global>{`
        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
        .prose ul {
          list-style-type: disc;
          margin-right: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        .prose strong {
          font-weight: 600;
          color: #17a2b8;
        }
      `}</style>
        </div>
    );
}
