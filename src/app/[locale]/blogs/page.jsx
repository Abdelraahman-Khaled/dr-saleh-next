'use client';
import { Link } from '../../../navigation';
import { useQuery } from '@tanstack/react-query';
import { useTranslations, useLocale } from 'next-intl';
import { getBlogs } from '../../../lib/api/blogs';
import ScrollTicker from '../components/home/ScrollingTicker';

export default function BlogsPage() {
  const locale = useLocale();
  const t = useTranslations('blogsPage');

  // Fetch blogs from API
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs-landing'],
    queryFn: getBlogs,
  });

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
              <Link href="/" className="hover:underline cursor-pointer">
                {t('breadcrumb.home')}
              </Link>
              <i className={locale === 'ar' ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'}></i>
              <span>{t('breadcrumb.blog')}</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              {t('title')}
            </h1>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <ScrollTicker />

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-56 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-3 w-1/3"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-500 font-bold">
                {t('error')}
              </p>
            </div>
          )}

          {/* Blogs Grid */}
          {blogs && blogs.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => {
                const photo = blog.photos?.find(p => p.is_arabic === (locale === 'ar')) || blog.photos?.[0];
                const title = locale === 'ar' ? blog.title_ar : blog.title_en;
                const description = locale === 'ar' ? blog.description_ar : blog.description_en;
                const slug = locale === 'ar' ? blog.slug_ar : blog.slug;

                return (
                  <article
                    key={blog.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={photo?.url || '/placeholder-blog.jpg'}
                        alt={photo?.alt || title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#17a2b8] transition-colors font-heading">
                        {title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {description}
                      </p>
                      <Link
                        href={`/blogs/${slug}`}
                        className="inline-flex items-center gap-2 text-[#17a2b8] font-bold hover:gap-3 transition-all cursor-pointer"
                      >
                        {t('readMore')}
                        <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* No Blogs */}
          {blogs && blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-medium">
                {t('noBlogs')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
              {t('newsletter.label')}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              {t('newsletter.title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-sm flex-1 max-w-md shadow-sm"
              />
              <button className="px-8 py-3 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer shadow-md">
                {t('newsletter.button')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
