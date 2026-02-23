"use client";
import { useState } from "react";
import HeroSection from "./components/home/HeroSection";
import DoctorIntroSection from "./components/home/DoctorIntroSection";
import ScrollingTicker from "./components/home/ScrollingTicker";
import AboutSection from "./components/home/AboutSection";
import ServicesSection from "./components/home/ServicesSection";
import PatientJourneySection from "./components/home/PatientJourneySection";
import PrivacySection from "./components/home/PrivacySection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import AppointmentCTA from "./components/AppointmentCTA";
import MediaSection from "./components/home/MediaSection";
import BlogSection from "./components/home/BlogSection";
import VideoModal from "./components/VideoModal";
import { Link } from "../../navigation";
import { getBlogs } from "../../lib/api/blogs";
import { getGalleries } from "../../lib/api/galleries";

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/z5Nu7chU6nA?autoplay=1" },
    { id: 2, url: "https://www.youtube.com/embed/z5Nu7chU6nA?autoplay=1" },
    { id: 3, url: "https://www.youtube.com/embed/z5Nu7chU6nA?autoplay=1" },
    { id: 4, url: "https://www.youtube.com/embed/z5Nu7chU6nA?autoplay=1" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ScrollingTicker />
      <DoctorIntroSection />
      <AboutSection />
      <ServicesSection />
      <PatientJourneySection />
      <PrivacySection />
      <TestimonialsSection />
      <AppointmentCTA />
      <MediaSection videos={videos} onVideoClick={setActiveVideo} />
      <BlogSection />

      <VideoModal
        videoUrl={activeVideo}
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 w-12 h-12 bg-[#17a2b8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#138496] transition-colors z-40 cursor-pointer"
        aria-label="Scroll to top"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
