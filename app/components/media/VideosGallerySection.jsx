'use client';
import { useState } from 'react';

export default function VideosGallerySection() {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        {
            id: 1,
            videoId: 'hgNBWCSRrZY',
            title: 'فيديو 1',
            thumbnail: '/dr/5.png',
        },
        {
            id: 2,
            videoId: 'BnB0tk3uZXY',
            title: 'فيديو 2',
            thumbnail: '/dr/1.png',
        },
        {
            id: 3,
            videoId: 'iym-AGHU-Xg',
            title: 'فيديو 3',
            thumbnail: '/dr/2.png',
        },
        {
            id: 4,
            videoId: 'NlRu-ozAN4A',
            title: 'فيديو 4',
            thumbnail: '/dr/3.png',
        },
        {
            id: 5,
            videoId: 'kdXMCKneRKk',
            title: 'فيديو 5',
            thumbnail: '/dr/4.png',
        },
        {
            id: 6,
            videoId: '3b1-dohsVaw',
            title: 'فيديو 6',
            thumbnail: '/dr/6.png',
        },
        {
            id: 7,
            videoId: 'hgNBWCSRrZY',
            title: 'فيديو 7',
            thumbnail: '/dr/2.png',
        },
        {
            id: 8,
            videoId: 'omNbvCBlJJE',
            title: 'فيديو 8',
            thumbnail: '/dr/5.png',
        },
        {
            id: 9,
            videoId: 'kS6NCjQDTn0',
            title: 'فيديو 9',
            thumbnail: '/dr/4.png',
        },
        {
            id: 10,
            videoId: 'kS6NCjQDTn0',
            title: 'فيديو 10',
            thumbnail: '/dr/2.png',
        },
        {
            id: 11,
            videoId: 'a-w1-uVTIjw',
            title: 'فيديو 11',
            thumbnail: '/dr/6.png',
        },
        {
            id: 12,
            videoId: 'JdSIIGb5fFU',
            title: 'فيديو 12',
            thumbnail: '/dr/1.png',
        },
        {
            id: 13,
            videoId: 'zu7UcNpi_OM',
            title: 'فيديو 13',
            thumbnail: '/dr/3.png',
        },
        {
            id: 14,
            videoId: 'GQRgTzAS_ZM',
            title: 'فيديو 14',
            thumbnail: '/dr/2.png',
        },
    ];

    const handleModalClose = (e) => {
        if ((e.target).closest('.modal-content')) return;
        setActiveVideo(null);
    };

    return (
        <>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            مكتبة الفيديوهات
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            لقاءات ومشاركات إعلامية
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            شاهد أبرز اللقاءات التلفزيونية والمشاركات العلمية للدكتور صالح الخلف.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                onClick={() => setActiveVideo(video.videoId)}
                            >
                                <div className="relative h-[328px] overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
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
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://www.youtube.com/@dr.salehalkhalaf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer"
                        >
                            قناتنا على اليوتيوب
                            <i className="ri-arrow-left-line"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={handleModalClose}
                >
                    <div className="relative max-w-4xl w-full modal-content">
                        <button
                            className="absolute -top-12 left-0 text-white text-xl hover:text-[#17a2b8] transition-colors cursor-pointer"
                            onClick={() => setActiveVideo(null)}
                        >
                            <i className="ri-close-line text-3xl"></i>
                        </button>
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="YouTube video player"
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
