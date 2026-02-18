'use client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from '../../../context/useTranslation';
import { useLanguage } from '../../../context/LanguageContext';
import { getBlogs } from '../../../lib/api/blogs';

export default function BlogSection() {
    const t = useTranslation('home');
    const { language } = useLanguage();

    // Fetch blogs from API
    const { data: blogs, isLoading, error } = useQuery({
        queryKey: ['blogs-landing'],
        queryFn: getBlogs,
    });

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t.blog?.title || 'المدونات'}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t.blog?.subtitle || 'مركز للمعلومات الطبية — من أجلك!'}
                    </h2>
                </div>

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
                        <p className="text-red-500">{language === 'ar' ? 'فشل تحميل المدونات' : 'Failed to load blogs'}</p>
                    </div>
                )}

                {/* Blogs Grid */}
                {blogs && blogs.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.slice(0, 3).map((blog) => {
                            // Get the appropriate photo based on language
                            const photo = blog.photos?.find(p => p.is_arabic === (language === 'ar')) || blog.photos?.[0];
                            const title = language === 'ar' ? blog.title_ar : blog.title_en;
                            const description = language === 'ar' ? blog.description_ar : blog.description_en;
                            const slug = language === 'ar' ? blog.slug_ar : blog.slug;

                            return (
                                <div
                                    key={blog.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-full h-48 bg-gray-100">
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
                                            {t.blog?.readMore || 'قراءة المزيد'}
                                            <i className="ri-arrow-left-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="text-center mt-12">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                    >
                        {t.blog?.viewAll || 'اطلع على جميع المقالات'}
                        <i className="ri-arrow-left-line"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
