"use client";

import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useQuery } from '@tanstack/react-query';
import ScrollTicker from '../home/ScrollingTicker';
import { getOperationDetails } from '../../../lib/api/operations';
import { LanguageContext } from '../../../context/LanguageContext';
import { useTranslation } from '../../../context/useTranslation';
import FaqAccordion from '../FaqAccordion';
import '../blogs/BlogDetail.css';

const OperationDetailContent = ({ slug, initialOperation }) => {
    const { language, prevLanguage } = useContext(LanguageContext);
    const t = useTranslation('operationDetail');
    const router = useRouter();

    const { data: operation = initialOperation } = useQuery({
        queryKey: ['operation', slug],
        queryFn: () => getOperationDetails(slug),
        initialData: initialOperation,
        refetchInterval: 5000,
    });

    // Handle language change navigation
    useEffect(() => {
        if (!operation) return;
        if (prevLanguage.current === language) return;

        const targetSlug = language === "ar"
            ? operation.slug_ar || operation.slug
            : operation.slug || operation.slug_ar;

        router.replace(`/operations/${targetSlug}`, { scroll: false });
    }, [language, operation, router, prevLanguage]);

    // Helper to get language-specific content
    const getLang = (arValue, enValue) => language === 'ar' ? arValue : enValue;

    // Get language-specific content
    const title = operation ? getLang(operation.title_ar, operation.title_en) : '';
    const photo = operation?.photos?.find(p => p.is_arabic === (language === 'ar')) || operation?.photos?.[0];

    // Render operation content sections
    const renderContent = () => {
        if (operation?.contents && Array.isArray(operation.contents)) {
            return operation.contents.map((section, index) => (
                <div key={index} className="mb-8">
                    {/* Render HTML content */}
                    {section.content_ar || section.content_en ? (
                        <div
                            className="blog-detail-content"
                            dangerouslySetInnerHTML={{ __html: getLang(section.content_ar, section.content_en) }}
                        />
                    ) : null}

                    {section.photos && section.photos.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {section.photos.map((img, imgIndex) => {
                                if (!img.url || img.url === "") return null;
                                const imgAlt = getLang(img.alt_ar, img.alt_en) || img.alt || '';
                                return (
                                    <div key={imgIndex} className="rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={img.url}
                                            alt={imgAlt}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            ));
        }
        return null;
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                {photo?.url && (
                    <img
                        src={photo.url}
                        alt={getLang(photo.alt_ar, photo.alt_en) || photo.alt || title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ zIndex: 0 }}
                    />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" style={{ zIndex: 1 }} />
                {/* Content */}
                <div className="container mx-auto px-4 relative py-32" style={{ zIndex: 2 }}>
                    <div className="text-center text-white">
                        <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
                            <Link href="/" className="hover:underline cursor-pointer">
                                {t.breadcrumb?.home || 'الرئيسية'}
                            </Link>
                            <i className="ri-arrow-left-s-line"></i>
                            <Link href="/operations" className="hover:underline cursor-pointer">
                                {t.breadcrumb?.operations || 'العمليات'}
                            </Link>
                            <i className="ri-arrow-left-s-line"></i>
                            <span>{title}</span>
                        </nav>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
                    </div>
                </div>
            </section>

            {/* Scrolling Ticker */}
            <ScrollTicker />

            {/* Operation Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-8xl mx-auto">
                        {/* Featured Image */}
                        {photo?.url && (
                            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={photo.url}
                                    alt={getLang(photo.alt_ar, photo.alt_en) || photo.alt || title}
                                    className="w-full h-auto object-cover  max-h-[714px]"
                                />
                            </div>
                        )}

                        {/* Operation Content */}
                        {operation && (
                            <>
                                {/* Content Sections */}
                                {renderContent()}

                                {/* FAQs Section */}
                                {operation.faqs && operation.faqs.length > 0 && (
                                    <div className="mt-16 pt-16 border-t border-gray-200">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                            <div className="w-12 h-12 bg-[#17a2b8] rounded-full flex items-center justify-center">
                                                <i className="ri-question-line text-white text-xl"></i>
                                            </div>
                                            {t.faqs || 'الأسئلة الشائعة'}
                                        </h2>
                                        <FaqAccordion faqs={operation.faqs} language={language} />
                                    </div>
                                )}

                                {/* CTA Section */}
                                <div className="mt-16 pt-16 border-t border-gray-200 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {t.cta?.title || 'هل لديك استفسار؟'}
                                    </h3>
                                    <p className="text-gray-600 mb-8">
                                        {t.cta?.description || 'احجز استشارتك الآن للحصول على تقييم شخصي'}
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors"
                                    >
                                        {t.cta?.button || 'احجز استشارة'}
                                        <i className="ri-calendar-check-line"></i>
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Back to Operations */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <Link
                        href="/operations"
                        className="inline-flex items-center gap-2 text-[#17a2b8] font-medium hover:gap-3 transition-all"
                    >
                        <i className="ri-arrow-right-line"></i>
                        {t.backToOperations || 'العودة إلى العمليات'}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default OperationDetailContent;
