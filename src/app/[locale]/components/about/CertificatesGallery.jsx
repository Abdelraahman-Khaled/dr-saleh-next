'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function CertificatesGallery() {
    const t = useTranslations('aboutPage.certificatesGallery');
    const [selectedImage, setSelectedImage] = useState(null);

    const certificates = [
        { id: 1, src: '/certificates/1.jpeg', alt: 'Certificate 1' },
        { id: 2, src: '/certificates/2.jpeg', alt: 'Certificate 2' },
        { id: 3, src: '/certificates/3.jpeg', alt: 'Certificate 3' },
        { id: 4, src: '/certificates/4.jpeg', alt: 'Certificate 4' },
        { id: 5, src: '/certificates/5.jpeg', alt: 'Certificate 5' },
        { id: 6, src: '/certificates/6.png', alt: 'Certificate 6' },
        { id: 7, src: '/certificates/7.jpeg', alt: 'Certificate 7' },
        { id: 8, src: '/certificates/8.jpeg', alt: 'Certificate 8' },
        { id: 9, src: '/certificates/9.jpeg', alt: 'Certificate 9' },
        { id: 10, src: '/certificates/10.jpeg', alt: 'Certificate 10' },
        { id: 11, src: '/certificates/11.jpeg', alt: 'Certificate 11' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('label')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-[3/4]"
                            onClick={() => setSelectedImage(cert)}
                        >
                            <img
                                src={cert.src}
                                alt={cert.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <i className="ri-zoom-in-line text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <i className="ri-close-line"></i>
                    </button>
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
