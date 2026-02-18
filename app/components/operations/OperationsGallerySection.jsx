import Link from 'next/link';
import { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getOperations } from '../../../lib/api/operations';
import { LanguageContext } from '../../../context/LanguageContext';
import { useTranslation } from '../../../context/useTranslation';

export default function OperationsGallerySection() {
    const { language } = useContext(LanguageContext);
    const t = useTranslation('home'); // Using home translations for now, or could add specific ones

    const { data: operations = [], isLoading, error } = useQuery({
        queryKey: ['operations'],
        queryFn: getOperations,
        refetchInterval: 5000,
    });

    const [activeCategory, setActiveCategory] = useState('all');

    // Helper to get language-specific content
    const getLang = (arValue, enValue) => language === 'ar' ? arValue : enValue;

    const categories = [
        { id: 'all', name: getLang('جميع الجراحات', 'All Operations') },
        { id: 'face', name: getLang('جراحات الوجه', 'Face Surgery') },
        { id: 'body', name: getLang('جراحات الجسم', 'Body Surgery') },
        { id: 'reconstructive', name: getLang('جراحة ترميمية', 'Reconstructive Surgery') },
        { id: 'hand', name: getLang('جراحة اليد', 'Hand Surgery') },
    ];

    const filteredOperations = activeCategory === 'all'
        ? operations
        : operations.filter(op => op.category === activeCategory);

    if (isLoading) {
        return (
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-block w-8 h-8 border-4 border-[#17a2b8] border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">{getLang('جاري تحميل العمليات...', 'Loading operations...')}</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-500">{getLang('حدث خطأ في تحميل العمليات', 'Error loading operations')}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {getLang('العمليات', 'Operations')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        {getLang('استعرض جميع الجراحات', 'Explore All Surgeries')}
                    </h2>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat.id
                                    ? 'bg-[#17a2b8] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredOperations.map((operation) => {
                        const title = getLang(operation.title_ar, operation.title_en);
                        const description = getLang(operation.description_ar, operation.description_en) || operation.description; // Fallback for description if not localized

                        // Look for landing photo first, then language specific, then first photo
                        const photo = operation.photos?.find(p => p.is_landing) ||
                            operation.photos?.find(p => p.is_arabic === (language === 'ar')) ||
                            operation.photos?.[0];

                        const imageUrl = photo?.url || operation.image; // Fallback to operation.image if exists
                        const slug = language === 'ar' ? (operation.slug_ar || operation.slug) : (operation.slug || operation.slug_ar);

                        // Category display text
                        const getCategoryLabel = (cat) => {
                            switch (cat) {
                                case 'face': return getLang('الوجه', 'Face');
                                case 'body': return getLang('الجسم', 'Body');
                                case 'reconstructive': return getLang('ترميمية', 'Reconstructive');
                                case 'hand': return getLang('جراحة اليد', 'Hand Surgery');
                                default: return cat || getLang('عام', 'General');
                            }
                        };

                        return (
                            <div
                                key={operation.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Link href={`/operations/${slug}`}>
                                        <img
                                            src={imageUrl}
                                            alt={title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 block"
                                        />
                                    </Link>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <Link
                                            href={`/operations/${slug}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#17a2b8] rounded-full font-bold text-sm hover:bg-[#17a2b8] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                                        >
                                            {getLang('عرض التفاصيل', 'View Details')}
                                            <i className="ri-arrow-left-line"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-[#17a2b8]/10 text-[#17a2b8] text-xs font-medium rounded-full capitalize">
                                            {getCategoryLabel(operation.category)}
                                        </span>
                                    </div>
                                    <Link href={`/operations/${slug}`}>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#17a2b8] transition-colors">{title}</h3>
                                    </Link>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                        {description ? description.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : ''}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
