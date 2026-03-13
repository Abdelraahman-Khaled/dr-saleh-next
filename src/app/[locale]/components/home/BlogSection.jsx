'use client';
import { Link } from '../../../../navigation';
import { useQuery } from '@tanstack/react-query';
import { useTranslations, useLocale } from 'next-intl';
import { getBlogs } from '../../../../lib/api/blogs';
import { motion } from 'framer-motion';

export default function BlogSection() {
    const t = useTranslations('home');
    const locale = useLocale();

    // Fetch blogs from API
    const { data: blogs, isLoading, error } = useQuery({
        queryKey: ['blogs-landing'],
        queryFn: getBlogs,
    });

    if (!isLoading && !error && (!blogs || blogs.length === 0)) {
        return null;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('blog.title')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('blog.subtitle')}
                    </h2>
                </motion.div>

                {/* Loading State */}
                {isLoading && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                <div className="w-full h-48 bg-gray-200"></div>
                                <div className="p-6">
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
                        <p className="text-red-500">{locale === 'ar' ? 'فشل تحميل المدونات' : 'Failed to load blogs'}</p>
                    </div>
                )}

                {/* Blogs Grid */}
                {blogs && blogs.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {blogs.slice(0, 3).map((blog) => {
                            // Get the appropriate photo based on language
                            const photo = blog.photos?.find(p => p.is_arabic === (locale === 'ar')) || blog.photos?.[0];
                            const title = locale === 'ar' ? blog.title_ar : blog.title_en;
                            const description = locale === 'ar' ? blog.description_ar : blog.description_en;
                            const slug = locale === 'ar' ? blog.slug_ar : blog.slug;

                            return (
                                <motion.div
                                    key={blog.id}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-full h-64 bg-gray-100">
                                        <img
                                            src={photo?.url || '/placeholder-blog.jpg'}
                                            alt={photo?.alt || title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {description}
                                        </p>
                                        <Link
                                            href={`/blogs/${slug}`}
                                            className="text-[#17a2b8] font-medium text-sm hover:underline inline-flex items-center gap-1"
                                        >
                                            {t('blog.readMore')}
                                            <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                    >
                        {t('blog.viewAll')}
                        <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
