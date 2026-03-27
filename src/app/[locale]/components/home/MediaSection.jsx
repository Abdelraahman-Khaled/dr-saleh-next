import { Link } from '../../../../navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function MediaSection({ videos, onVideoClick, title, subtitle }) {
    const t = useTranslations('home');
    const locale = useLocale();

    const displayTitle = title || t('media.title');
    const displaySubtitle = subtitle || t('media.subtitle');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    if (!videos || videos.length === 0) {
        return null;
    }

    const displayVideos = videos.slice(0, 4);

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {displayTitle}
                    </span>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                    >
                        {displaySubtitle}
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {displayVideos.map((video) => {
                        const getLang = (arValue, enValue) => locale === 'ar' ? arValue : enValue;
                        const url = video.video_url || video.url || video.link;
                        const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
                        const match = url?.match(regExp);
                        const videoId = (match && match[1]) ? match[1] : null;
                        const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;

                        return (
                            <motion.div
                                key={video.id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer"
                                onClick={() => onVideoClick(embedUrl)}
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video">
                                    <img
                                        src={video.cover_image || `https://dr-saaleh.netlify.app/assets/img/video-thumbnails/1.png`}
                                        alt={getLang(video.title_ar, video.title_en) || `Video ${video.id}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                                            <i className="ri-play-fill text-[#17a2b8] text-2xl"></i>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="h-1 w-0 bg-[#17a2b8] group-hover:w-full transition-all duration-500 rounded-full"></div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/media"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-all hover:scale-105 shadow-lg whitespace-nowrap"
                    >
                        {t('media.viewAll')}
                        <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
