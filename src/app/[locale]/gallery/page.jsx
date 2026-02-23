'use client';
import GalleryHeroSection from '../components/gallery/GalleryHeroSection';
import DoctorGallerySection from '../components/gallery/DoctorGallerySection';
import ScrollingTicker from '../components/home/ScrollingTicker';

export default function GalleryPage() {

    return (
        <>
            <GalleryHeroSection />
            <ScrollingTicker />
            <DoctorGallerySection />
        </>
    );
}
