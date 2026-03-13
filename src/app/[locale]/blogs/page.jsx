'use client';
import { useState } from 'react';
import { Link } from '../../../navigation';
import { useQuery } from '@tanstack/react-query';
import { useTranslations, useLocale } from 'next-intl';
import { getBlogs } from '../../../lib/api/blogs';
import ScrollTicker from '../components/home/ScrollingTicker';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogsPage() {
  const locale = useLocale();
  const t = useTranslations('blogsPage');

  // Fetch blogs from API
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs-landing'],
    queryFn: getBlogs,
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: newsletterEmail,
          phone_number: 'N/A',
          msg_subject: 'New Newsletter Subscription',
          message: `New subscription request from: ${newsletterEmail}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setNewsletterEmail('');
      } else {
        throw new Error();
      }
    } catch (err) {
      setErrorMsg(locale === 'ar' ? 'حدث خطأ ما، يرجى المحاولة مرة أخرى.' : 'Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20medical%20blog%20and%20healthcare%20articles%20concept%20with%20elegant%20teal%20and%20white%20color%20scheme%20showing%20medical%20journals%20stethoscope%20and%20digital%20tablet%20on%20clean%20desk%20professional%20medical%20writing%20aesthetic&width=1920&height=600&seq=blog-hero-1&orientation=landscape)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="text-center text-white">
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90"
            >
              <Link href="/" className="hover:underline cursor-pointer">
                {t('breadcrumb.home')}
              </Link>
              <i className={locale === 'ar' ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'}></i>
              <span>{t('breadcrumb.blog')}</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold mb-6 font-heading"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl opacity-95 max-w-2xl mx-auto"
            >
              {t('subtitle')}
            </motion.p>
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
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {blogs.map((blog, idx) => {
                  const photo = blog.photos?.find(p => p.is_arabic === (locale === 'ar')) || blog.photos?.[0];
                  const title = locale === 'ar' ? blog.title_ar : blog.title_en;
                  const description = locale === 'ar' ? blog.description_ar : blog.description_en;
                  const slug = locale === 'ar' ? blog.slug_ar : blog.slug;

                  return (
                    <motion.article
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 30 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      key={blog.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
                    >
                      <div className="relative h-64 overflow-hidden">
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
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
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
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
              {t('newsletter.label')}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              {t('newsletter.title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('newsletter.description')}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-green-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-checkbox-circle-fill text-green-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'ar' ? 'شكراً لاشتراكك!' : 'Thank you for subscribing!'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'ar' ? 'تم تسجيل بريدك الإلكتروني بنجاح.' : 'Your email has been registered successfully.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#17a2b8] font-medium hover:underline cursor-pointer"
                >
                  {locale === 'ar' ? 'الاشتراك ببريد آخر' : 'Subscribe with another email'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={t('newsletter.placeholder')}
                    className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#17a2b8] text-sm flex-1 max-w-md shadow-sm bg-white"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <i className="ri-loader-4-line animate-spin text-xl"></i>
                    ) : (
                      t('newsletter.button')
                    )}
                  </motion.button>
                </div>
                {errorMsg && (
                  <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
