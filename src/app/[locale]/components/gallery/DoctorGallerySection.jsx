'use client';
import { useState, useContext, useRef } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { getGalleries } from '../../../../lib/api/galleries';
import { useLocale, useTranslations } from 'next-intl';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DoctorGallerySection() {
    const t = useTranslations('galleryPage.section');
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [filter, setFilter] = useState('all');
    const swiperRef = useRef(null);

    const locale = useLocale();

    // Helper to get language-specific content
    const getLang = (arValue, enValue) => locale === 'ar' ? arValue : enValue;

    const { data: galleriesData = [], isLoading } = useQuery({
        queryKey: ['galleries'],
        queryFn: getGalleries,
        refetchInterval: 5000,
    });

    // Map and filter API data
    const galleries = galleriesData
        .filter(gallery => filter === 'all' || gallery.category === filter)
        .map(gallery => ({
            id: gallery.id,
            title: getLang(gallery.title_ar, gallery.title_en),
            category: gallery.category,
            cover: gallery.photos && gallery.photos.length > 0 ? gallery.photos[0].url : '/assets/images/placeholder.jpg',
            photos: gallery.photos.map(photo => ({
                id: photo.id,
                url: photo.url,
                alt: photo.alt || getLang(gallery.title_ar, gallery.title_en)
            }))
        }));

    const filters = [
        { id: 'all', label: t('filters.all') },
        { id: 'academic', label: t('filters.academic') }
    ];

    if (isLoading) {
        return (
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="h-4 bg-gray-200 w-32 mx-auto rounded mb-3 animate-pulse"></div>
                        <div className="h-10 bg-gray-200 w-1/2 max-w-lg mx-auto rounded mb-4 animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-gray-100 rounded-2xl h-[400px] animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('label')}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                            {t('heading')}
                        </h2>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {filters.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setFilter(f.id)}
                                    className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${filter === f.id
                                        ? 'bg-[#17a2b8] border-[#17a2b8] text-white shadow-lg'
                                        : 'bg-white border-[#17a2b8]/20 text-gray-600 hover:border-[#17a2b8] hover:text-[#17a2b8]'
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination]}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.gallery-prev',
                                nextEl: '.gallery-next',
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100',
                                bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#17a2b8]',
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className="!pb-14"
                        >
                            {galleries.map((gallery) => (
                                <SwiperSlide key={gallery.id}>
                                    <div
                                        className="group/card cursor-pointer relative rounded-2xl overflow-hidden h-[400px] shadow-lg hover:shadow-xl transition-all duration-500"
                                        onClick={() => setSelectedGallery(gallery)}
                                    >
                                        <img
                                            src={gallery.cover}
                                            alt={gallery.title}
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-110 w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover/card:opacity-100 transition-opacity" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {gallery.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                                <i className="ri-image-line"></i>
                                                <span>{t('photoCount', { count: gallery.photos.length })}</span>
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
                                            <i className="ri-fullscreen-line text-white"></i>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation */}
                        <button className="gallery-prev absolute top-1/2 -left-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-[#17a2b8] hover:text-white transition-all transform -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300 hidden md:flex cursor-pointer">
                            <i className={locale === 'ar' ? "ri-arrow-right-s-line text-2xl" : "ri-arrow-left-s-line text-2xl"}></i>
                        </button>
                        <button className="gallery-next absolute top-1/2 -right-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-[#17a2b8] hover:text-white transition-all transform -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300 hidden md:flex cursor-pointer">
                            <i className={locale === 'ar' ? "ri-arrow-left-s-line text-2xl" : "ri-arrow-right-s-line text-2xl"}></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedGallery && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center fade-in">
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
                        onClick={() => setSelectedGallery(null)}
                    >
                        <i className="ri-close-line text-4xl"></i>
                    </button>

                    <div className="w-full h-full max-w-[90vw] max-h-[85vh] relative">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true, type: 'fraction' }}
                            className="h-full w-full gallery-lightbox-swiper"
                            spaceBetween={30}
                        >
                            {selectedGallery.photos.map((photo) => (
                                <SwiperSlide key={photo.id} className="flex items-center justify-center bg-black">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <img
                                            src={photo.url}
                                            alt={photo.alt || selectedGallery.title}
                                            className="object-contain"
                                            sizes="90vw"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0 text-center text-white z-[60]">
                        <h3 className="text-xl font-bold mb-1">{selectedGallery.title}</h3>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .gallery-lightbox-swiper .swiper-button-next,
                .gallery-lightbox-swiper .swiper-button-prev {
                    color: white !important; 
                }
                .gallery-lightbox-swiper .swiper-pagination-fraction {
                     color: white;
                     bottom: 20px;
                }
            `}</style>
        </>
    );
}
