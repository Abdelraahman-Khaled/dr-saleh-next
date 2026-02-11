import Link from 'next/link';
import ScrollTicker from '../components/home/ScrollingTicker';

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: 'تجميل الأنف',
      excerpt:
        'عملية تجميل الأنف تهدف إلى تحسين شكل الأنف ووظيفته، مما يعزز تناسق ملامح الوجه ويزيد من الثقة بالنفس. تعرف على كل ما تحتاج معرفته قبل اتخاذ القرار.',
      image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/5.png',
      date: '15 يناير 2024',
      category: 'جراحة تجميلية',
    },
    {
      id: 2,
      title: 'شفط الدهون',
      excerpt:
        'شفط الدهون هو إجراء تجميلي يزيل الدهون الزائدة من مناطق معينة في الجسم لتحسين القوام والمظهر العام. اكتشف التقنيات الحديثة المستخدمة.',
      image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/6.png',
      date: '10 يناير 2024',
      category: 'نحت الجسم',
    },
    {
      id: 3,
      title: 'شد الوجه',
      excerpt:
        'عملية شد الوجه تساعد في استعادة شباب البشرة عن طريق إزالة الترهلات والتجاعيد للحصول على مظهر أكثر نضارة وحيوية.',
      image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/7.png',
      date: '5 يناير 2024',
      category: 'تجديد الشباب',
    },
    {
      id: 4,
      title: 'ترميم الحروق وعلاج الندبات',
      excerpt:
        'تعرف على أحدث التقنيات في علاج الحروق وترميم الجلد المتضرر، وكيف يمكن استعادة المظهر الطبيعي والوظيفة.',
      image: 'https://dr-saaleh.netlify.app/assets/img/before1.webp',
      date: '28 ديسمبر 2023',
      category: 'جراحة ترميمية',
    },
    {
      id: 5,
      title: 'جراحة اليد والميكروسكوب الجراحي',
      excerpt:
        'جراحات اليد المتخصصة لعلاج الإصابات واستعادة الحركة الطبيعية باستخدام أحدث تقنيات الجراحة المجهرية.',
      image: 'https://dr-saaleh.netlify.app/assets/img/after1.webp',
      date: '20 ديسمبر 2023',
      category: 'جراحة اليد',
    },
    {
      id: 6,
      title: 'نصائح ما قبل وبعد الجراحة',
      excerpt:
        'دليل شامل للتحضير للجراحة التجميلية وأهم النصائح للتعافي السريع والحصول على أفضل النتائج.',
      image: 'https://dr-saaleh.netlify.app/assets/img/hero.webp',
      date: '15 ديسمبر 2023',
      category: 'نصائح طبية',
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20medical%20blog%20and%20healthcare%20articles%20concept%20with%20elegant%20teal%20and%20white%20color%20scheme%20showing%20medical%20journals%20stethoscope%20and%20digital%20tablet%20on%20clean%20desk%20professional%20medical%20writing%20aesthetic&width=1920&height=600&seq=blog-hero-1&orientation=landscape)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="text-center text-white">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
              <Link href="/" className="hover:underline cursor-pointer">الرئيسية</Link>
              <i className="ri-arrow-left-s-line"></i>
              <span>المدونة</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">أحدث المقالات</h1>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              اطلع على أحدث المقالات والمعلومات حول جراحات التجميل والعناية بالمظهر
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <ScrollTicker/>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#17a2b8] text-white text-xs font-medium rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <i className="ri-calendar-line"></i>
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#17a2b8] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{blog.excerpt}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#17a2b8] font-medium hover:gap-3 transition-all cursor-pointer"
                  >
                    قراءة المزيد
                    <i className="ri-arrow-left-line"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">النشرة البريدية</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ابق على اطلاع بأحدث المقالات</h2>
            <p className="text-gray-600 mb-8">
              اشترك في نشرتنا البريدية للحصول على أحدث المقالات والنصائح الطبية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-sm flex-1 max-w-md"
              />
              <button className="px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
}
