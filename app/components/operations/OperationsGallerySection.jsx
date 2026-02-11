'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function OperationsGallerySection() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'جميع الجراحات' },
        { id: 'face', name: 'جراحات الوجه' },
        { id: 'body', name: 'جراحات الجسم' },
        { id: 'reconstructive', name: 'جراحة ترميمية' },
        { id: 'hand', name: 'جراحة اليد' },
    ];

    const mainOperations = [
        {
            id: 1,
            title: 'تجميل الأنف',
            description: 'عملية تجميل الأنف تهدف إلى تحسين شكل الأنف ووظيفته، مما يعزز تناسق ملامح الوجه ويزيد من الثقة بالنفس.',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/5.png',
            category: 'face',
        },
        {
            id: 2,
            title: 'شد الوجه',
            description: 'عملية شد الوجه تساعد في استعادة شباب البشرة عن طريق إزالة الترهلات والتجاعيد للحصول على مظهر أكثر نضارة.',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/7.png',
            category: 'face',
        },
        {
            id: 3,
            title: 'شفط الدهون',
            description: 'شفط الدهون هو إجراء تجميلي يزيل الدهون الزائدة من مناطق معينة في الجسم لتحسين القوام والمظهر العام.',
            image: 'https://dr-saaleh.netlify.app/assets/img/video-thumbnails/6.png',
            category: 'body',
        },
        {
            id: 4,
            title: 'ترميم الحروق',
            description: 'علاج متخصص لترميم الجلد المتضرر من الحروق واستعادة المظهر الطبيعي والوظيفة.',
            image: 'https://dr-saaleh.netlify.app/assets/img/before1.webp',
            category: 'reconstructive',
        },
        {
            id: 5,
            title: 'جراحة اليد',
            description: 'جراحات متخصصة لعلاج إصابات اليد واستعادة الحركة والوظيفة الطبيعية.',
            image: 'https://dr-saaleh.netlify.app/assets/img/after1.webp',
            category: 'hand',
        },
        {
            id: 6,
            title: 'جراحة الجفون',
            description: 'تحسين مظهر الجفون العلوية والسفلية لإطلالة أكثر شباباً ونضارة.',
            image: 'https://dr-saaleh.netlify.app/assets/img/hero.webp',
            category: 'face',
        },
        {
            id: 7,
            title: 'شد البطن',
            description: 'عملية شد البطن تزيل الجلد الزائد والدهون من منطقة البطن للحصول على بطن مشدود ومسطح.',
            image: 'https://dr-saaleh.netlify.app/assets/img/home.webp',
            category: 'body',
        },
        {
            id: 8,
            title: 'نحت الجسم',
            description: 'تقنيات متقدمة لنحت الجسم وإبراز العضلات والحصول على قوام متناسق.',
            image: 'https://dr-saaleh.netlify.app/assets/img/young-gril.png',
            category: 'body',
        },
    ];

    const filteredOperations = activeCategory === 'all'
        ? mainOperations
        : mainOperations.filter(op => op.category === activeCategory);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">العمليات</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        استعرض جميع الجراحات
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
                    {filteredOperations.map((operation) => (
                        <div
                            key={operation.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={operation.image}
                                    alt={operation.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#17a2b8] rounded-full font-bold text-sm hover:bg-[#17a2b8] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                                    >
                                        احجز استشارة
                                        <i className="ri-arrow-left-line"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-[#17a2b8]/10 text-[#17a2b8] text-xs font-medium rounded-full">
                                        {operation.category === 'face' ? 'الوجه' : operation.category === 'body' ? 'الجسم' : operation.category === 'reconstructive' ? 'ترميمية' : 'جراحة اليد'}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{operation.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                    {operation.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
