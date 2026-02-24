'use client';
import { Link } from '../../../../navigation';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getOperations } from '../../../../lib/api/operations';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function OperationsGallerySection() {
    const locale = useLocale();
    const t = useTranslations('operationsPage.gallery');

    const { data: operations = [], isLoading, error } = useQuery({
        queryKey: ['operations'],
        queryFn: getOperations,
        refetchInterval: 5000,
    });

    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Helper to get language-specific content
    const getLang = (arValue, enValue) => locale === 'ar' ? arValue : enValue;

    const categories = [
        { id: 'all', name: t('categories.all') },
        { id: 'face', name: t('categories.face') },
        { id: 'body', name: t('categories.body') },
        { id: 'reconstructive', name: t('categories.reconstructive') },
        { id: 'hand', name: t('categories.hand') },
    ];

    const handleCategoryChange = (id) => {
        setActiveCategory(id);
        setCurrentPage(1);
    };

    const filteredOperations = activeCategory === 'all'
        ? operations
        : operations.filter(op => op.category === activeCategory);

    const totalPages = Math.ceil(filteredOperations.length / itemsPerPage);
    const currentOperations = filteredOperations.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (isLoading) {
        return (
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="h-4 bg-gray-200 w-32 mx-auto rounded mb-3 animate-pulse"></div>
                        <div className="h-10 bg-gray-200 w-1/2 max-w-lg mx-auto rounded mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 w-2/3 max-w-2xl mx-auto rounded animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse border border-gray-100">
                                <div className="h-48 bg-gray-200 w-full relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full opacity-50"></div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="h-4 bg-gray-200 w-1/3 rounded mb-3"></div>
                                    <div className="h-6 bg-gray-200 w-3/4 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-200 w-full rounded mb-2"></div>
                                    <div className="h-4 bg-gray-200 w-2/3 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-500">{t('error')}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('label')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                        {t('heading')}
                    </h2>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat.id
                                    ? 'bg-[#17a2b8] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {currentOperations.map((operation, idx) => {
                            const title = getLang(operation.title_ar, operation.title_en);
                            const description = getLang(operation.description_ar, operation.description_en) || operation.description;

                            const photo = operation.photos?.find(p => p.is_landing) ||
                                operation.photos?.find(p => p.is_arabic === (locale === 'ar')) ||
                                operation.photos?.[0];

                            const imageUrl = photo?.url || operation.image;
                            const slug = locale === 'ar' ? (operation.slug_ar || operation.slug) : (operation.slug || operation.slug_ar);

                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={operation.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Link href={`/operations/${slug}`}>
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.7 }}
                                                src={imageUrl}
                                                alt={title}
                                                className="w-full h-full object-cover block"
                                            />
                                        </Link>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <Link
                                                href={`/operations/${slug}`}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#17a2b8] rounded-full font-bold text-sm hover:bg-[#17a2b8] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                                            >
                                                {t('viewDetails')}
                                                <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <Link href={`/operations/${slug}`}>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#17a2b8] transition-colors">{title}</h3>
                                        </Link>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                            {description ? description.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : ''}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12" dir="ltr">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-[#17a2b8] hover:text-white hover:border-[#17a2b8] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-600 transition-colors cursor-pointer"
                        >
                            <i className="ri-arrow-left-s-line text-xl"></i>
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${currentPage === i + 1
                                    ? 'bg-[#17a2b8] text-white border-[#17a2b8]'
                                    : 'border-gray-200 text-gray-600 hover:border-[#17a2b8] hover:text-[#17a2b8]'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-[#17a2b8] hover:text-white hover:border-[#17a2b8] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-600 transition-colors cursor-pointer"
                        >
                            <i className="ri-arrow-right-s-line text-xl"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
