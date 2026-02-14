'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function DoctorGallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 9;

    const galleryImages = [
        { id: 1, src: '/doctor/pic-22.jpg', alt: 'د. صالح الغامدي - صورة 1', title: 'د. صالح الغامدي في عيادته' },
        { id: 2, src: '/doctor/pic-2.jpg', alt: 'د. صالح الغامدي - صورة 2', title: 'لقاء إعلامي' },
        { id: 3, src: '/doctor/pic-7.jpg', alt: 'د. صالح الغامدي - صورة 3', title: 'مؤتمر طبي' },
        { id: 4, src: '/doctor/pic-14.jpg', alt: 'د. صالح الغامدي - صورة 4', title: 'جلسة استشارية' },
        { id: 5, src: '/doctor/pic-24.jpeg', alt: 'د. صالح الغامدي - صورة 5', title: 'ورشة عمل طبية' },
        { id: 6, src: '/doctor/pic-6.jpg', alt: 'د. صالح الغامدي - صورة 6', title: 'مشاركة علمية' },
    ];

    const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

    const handleModalClose = (e) => {
        if (e.target.closest('.modal-content')) return;
        setSelectedImage(null);
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            معرض الصور
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            د. صالح الغامدي
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            صور من مسيرة د. صالح الغامدي المهنية والأكاديمية
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentImages.map((image) => (
                            <div
                                key={image.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                            <i className="ri-zoom-in-line text-[#17a2b8] text-xl"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-gradient-to-b from-[#17a2b8] to-[#138496]">
                                    <h3 className="text-white font-bold text-center">{image.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12">
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-[#17a2b8] hover:bg-[#17a2b8] hover:text-white cursor-pointer'
                                    }`}
                            >
                                <i className="ri-arrow-right-s-line"></i>
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => goToPage(index + 1)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${currentPage === index + 1
                                        ? 'bg-[#17a2b8] text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-[#17a2b8] hover:bg-[#17a2b8] hover:text-white cursor-pointer'
                                    }`}
                            >
                                <i className="ri-arrow-left-s-line"></i>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={handleModalClose}
                >
                    <div className="relative max-w-5xl w-full modal-content">
                        <button
                            className="absolute -top-12 left-0 text-white text-xl hover:text-[#17a2b8] transition-colors cursor-pointer"
                            onClick={() => setSelectedImage(null)}
                        >
                            <i className="ri-close-line text-3xl"></i>
                        </button>
                        <div className="relative w-full">
                            <Image
                                src={selectedImage}
                                alt="صورة مكبرة"
                                width={1200}
                                height={1500}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
