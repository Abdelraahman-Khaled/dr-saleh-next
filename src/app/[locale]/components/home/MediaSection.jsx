import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';

export default function MediaSection({ videos, onVideoClick }) {
    const t = useTranslations('home');
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('media.title')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('media.subtitle')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group cursor-pointer"
                            onClick={() => onVideoClick(video.url)}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src={`https://dr-saaleh.netlify.app/assets/img/video-thumbnails/${video.id}.png`}
                                    alt={`Video ${video.id}`}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                        <i className="ri-play-fill text-[#17a2b8] text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/media"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                    >
                        {t('media.viewAll')}
                        <i className="ri-arrow-left-line"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
