"use client";
import { useState, useEffect } from "react";
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
import { getBlogs } from "../../lib/api/blogs";
import { getGalleries } from "../../lib/api/galleries";
import { getVideos } from "../../lib/api/videos";

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getVideos();
        // Assume API returns an object with a data array or just an array
        const videoData = Array.isArray(response)
          ? response
          : response?.data || [];
        setVideos(videoData);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };
    fetchVideos();
  }, []);

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
      `}</style>
    </div>
  );
}
