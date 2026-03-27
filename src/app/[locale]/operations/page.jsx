'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslations, useLocale } from 'next-intl';
import OperationsHeroSection from '../components/operations/OperationsHeroSection';
import DoctorIntroOperationsSection from '../components/operations/DoctorIntroOperationsSection';
import OperationsGallerySection from '../components/operations/OperationsGallerySection';
import ScrollingTicker from '../components/home/ScrollingTicker';
import PatientJourneySection from '../components/home/PatientJourneySection';
import BlogSection from '../components/home/BlogSection';
import MediaSection from '../components/home/MediaSection';
import { getVideos } from '../../../lib/api/videos';
import { getFaqs } from '../../../lib/api/faq';
import { motion, AnimatePresence } from 'framer-motion';
import FaqAccordion from '../components/FaqAccordion';
import AppointmentCTA from '../components/AppointmentCTA';
import WhyChooseUsSection from '../components/operations/WhyChooseUsSection';

export default function OperationsPage() {
    const t = useTranslations('operationsPage');
    const locale = useLocale();
    const [activeVideo, setActiveVideo] = useState(null);

    // Fetch videos for MediaSection
    const { data: videosData = [] } = useQuery({
        queryKey: ['videos-operations'],
        queryFn: getVideos,
    });

    // Fetch FAQs
    const { data: faqs = [] } = useQuery({
        queryKey: ['faqs-operations'],
        queryFn: getFaqs,
    });

    // Helper to extract YouTube ID
    const getYouTubeID = (url) => {
        if (!url) return '';
        const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regExp);
        return (match && match[1]) ? match[1] : null;
    };

    const videos = videosData.slice(0, 4).map(video => {
        const url = video.video_url || video.url || video.link;
        const videoId = getYouTubeID(url);
        return {
            id: video.id,
            videoId: videoId,
            embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url,
            title: locale === 'ar' ? video.title_ar : video.title_en,
            thumbnail: video.cover_image
        };
    });

    const handleVideoClick = (video) => {
        setActiveVideo(video.embedUrl);
    };

    return (
        <>
            <OperationsHeroSection />
            <ScrollingTicker />
            <DoctorIntroOperationsSection />
            <WhyChooseUsSection />
            {/* <SpecialtiesSection /> */}
            <OperationsGallerySection />
            
            {/* Patient Journey Section */}
            <PatientJourneySection 
                title={t('patientJourney.title')}
                subtitle={t('patientJourney.description')}
            />

            {/* Media Section */}
            <MediaSection 
                videos={videos}
                onVideoClick={handleVideoClick}
                title={t('media.title')}
                subtitle={t('media.description')}
            />

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('faq.title')}
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {t('faq.description')}
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <FaqAccordion faqs={faqs.slice(0, 6)} />
                    </div>
                </div>
            </section>

            {/* Blogs Section */}
            <BlogSection 
                title={t('blogs.title')}
                subtitle={t('blogs.description')}
            />

            <AppointmentCTA />

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-12 left-0 text-white text-3xl hover:text-[#17a2b8] transition-colors cursor-pointer"
                                onClick={() => setActiveVideo(null)}
                            >
                                <i className="ri-close-line"></i>
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
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
