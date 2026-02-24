"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Link, useRouter } from '../../../../navigation';
import { useQuery } from '@tanstack/react-query';
import ScrollTicker from '../home/ScrollingTicker';
import { getBlogDetails } from '../../../../lib/api/blogs';
import { useTranslations, useLocale } from 'next-intl';
import FaqAccordion from '../FaqAccordion';
import { motion } from 'framer-motion';
import './BlogDetail.css';

const BlogDetailContent = ({ slug, initialBlog }) => {
    const locale = useLocale();
    const t = useTranslations('blogDetail');
    const router = useRouter();

    const { data: blog = initialBlog } = useQuery({
        queryKey: ['blog', slug],
        queryFn: () => getBlogDetails(slug),
        initialData: initialBlog,
        refetchInterval: 5000, // 5 seconds polling for live updates
    });

    // Helper to get language-specific content
    const getLang = (arValue, enValue) => locale === 'ar' ? arValue : enValue;

    // Get language-specific content
    const title = blog ? getLang(blog.title_ar, blog.title_en) : '';
    const photo = blog?.photos?.find(p => p.is_arabic === (locale === 'ar')) || blog?.photos?.[0];

    // Render blog content sections
    const renderContent = () => {
        console.log(blog);
        if (blog?.contents && Array.isArray(blog.contents)) {
            return blog.contents.map((section, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    key={index}
                    className="mb-8"
                >
                    {/* Render HTML content */}
                    {section.content_ar || section.content_en ? (
                        <div
                            className="blog-detail-content"
                            dangerouslySetInnerHTML={{ __html: getLang(section.content_ar, section.content_en) }}
                        />
                    ) : null}

                    {/* Render section images if they exist */}
                    {section.photos && section.photos.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {section.photos.map((img, imgIndex) => {
                                if (!img.url || img.url === "") return null;
                                return (
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        key={imgIndex}
                                        className="rounded-2xl overflow-hidden shadow-lg"
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.alt || ''}
                                            className="w-full h-auto object-cover"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </motion.div>
            ));
        }
        return null;
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                {photo?.url && (
                    <motion.img
                        initial={{ scale: 1.15, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        src={photo.url}
                        alt={photo.alt || title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ zIndex: 0 }}
                    />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" style={{ zIndex: 1 }} />
                {/* Content */}
                <div className="container mx-auto px-4 relative py-32" style={{ zIndex: 2 }}>
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
                            <i className={locale === 'ar' ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line"}></i>
                            <Link href="/blogs" className="hover:underline cursor-pointer">
                                {t('breadcrumb.blog')}
                            </Link>
                            <i className={locale === 'ar' ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line"}></i>
                            <span>{title}</span>
                        </motion.nav>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl lg:text-5xl font-bold mb-6 font-heading"
                        >
                            {title}
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Scrolling Ticker */}
            <ScrollTicker />

            {/* Blog Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-8xl mx-auto">
                        {/* Featured Image */}
                        {photo?.url && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="mb-12 rounded-2xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src={photo.url}
                                    alt={photo.alt || title}
                                    className="w-full h-auto object-cover max-h-[714px] hover:scale-105 transition-transform duration-700"
                                />
                            </motion.div>
                        )}

                        {/* Blog Content */}
                        {blog && (
                            <>
                                {/* Content Sections */}
                                {renderContent()}

                                {/* FAQs Section */}
                                {blog.faqs && blog.faqs.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="mt-16 pt-16 border-t border-gray-200"
                                    >
                                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3 font-heading">
                                            <div className="w-12 h-12 bg-[#17a2b8] rounded-full flex items-center justify-center">
                                                <i className="ri-question-line text-white text-xl"></i>
                                            </div>
                                            {t('faqs')}
                                        </h2>
                                        <FaqAccordion faqs={blog.faqs} />
                                    </motion.div>
                                )}

                                {/* CTA Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="mt-16 pt-16 border-t border-gray-200 text-center"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                                        {t('cta.title')}
                                    </h3>
                                    <p className="text-gray-600 mb-8">
                                        {t('cta.description')}
                                    </p>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors shadow-md cursor-pointer whitespace-nowrap"
                                        >
                                            {t('cta.button')}
                                            <i className="ri-calendar-check-line"></i>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Back to Blogs */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-[#17a2b8] font-bold hover:gap-3 transition-all cursor-pointer"
                    >
                        <i className={locale === 'ar' ? "ri-arrow-right-line" : "ri-arrow-left-line"}></i>
                        {t('backToBlog')}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default BlogDetailContent;
