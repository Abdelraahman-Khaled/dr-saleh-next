'use client';
import { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getVideos } from '../../../../lib/api/videos';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideosGallerySection() {
    const [activeVideo, setActiveVideo] = useState(null);

    const locale = useLocale();
    const t = useTranslations('mediaPage.gallery');

    // Helper to get language-specific content
    const getLang = (arValue, enValue) => locale === 'ar' ? arValue : enValue;

    const { data: videosData = [], isLoading } = useQuery({
        queryKey: ['videos'],
        queryFn: getVideos,
        refetchInterval: 5000,
    });

    // Helper to extract YouTube ID
    const getYouTubeID = (url) => {
        if (!url) return '';
        const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regExp);
        return (match && match[1]) ? match[1] : null;
    };

    const videos = videosData.map(video => {
        // Debugging: Check what keys exist if video_url is missing
        if (!video.video_url) console.warn('Video missing video_url:', video);

        const url = video.video_url || video.url || video.link; // Fallback attempts
        const videoId = getYouTubeID(url);

        return {
            id: video.id,
            videoId: videoId,
            video_url: url,
            embedUrl: videoId
                ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
                : url,
            title: getLang(video.title_ar, video.title_en),
            thumbnail: video.cover_image,
            alt: getLang(video.img_alt_text_ar, video.img_alt_text_en)
        };
    });

    console.log('Processed Videos:', videos);

    const handleModalClose = (e) => {
        if ((e.target).closest('.modal-content')) return;
        setActiveVideo(null);
    };

    if (isLoading) {
        return (
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="h-4 bg-gray-200 w-32 mx-auto rounded mb-3 animate-pulse"></div>
                        <div className="h-10 bg-gray-200 w-3/4 max-w-lg mx-auto rounded mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 w-1/2 mx-auto rounded animate-pulse"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                <div className="h-[328px] bg-gray-300 w-full relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-gray-400 rounded-full opacity-50"></div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="h-4 bg-gray-200 w-3/4 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('label')}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            {t('heading')}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {t('description')}
                        </p>
                    </motion.div>

                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {videos.map((video, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    key={video.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                    onClick={() => setActiveVideo(video.embedUrl)}
                                >
                                    <div className="relative h-[328px] overflow-hidden">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.alt || video.title}
                                            className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                                <i className="ri-play-fill text-[#17a2b8] text-2xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#17a2b8] transition-colors line-clamp-2">
                                            {video.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            href="https://www.youtube.com/@dr.salehalkhalaf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer shadow-md"
                        >
                            {t('youtubeButton')}
                            <i className={locale === 'ar' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'}></i>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={handleModalClose}
                >
                    <div className="relative max-w-4xl w-full modal-content bg-black rounded-2xl overflow-hidden shadow-2xl">
                        <button
                            className="absolute -top-12 left-0 text-white text-xl hover:text-[#17a2b8] transition-colors cursor-pointer"
                            onClick={() => setActiveVideo(null)}
                        >
                            <i className="ri-close-line text-3xl"></i>
                        </button>
                        <div className="relative w-full aspect-video">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={activeVideo}
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
