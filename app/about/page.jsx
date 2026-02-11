import AboutHeroSection from '../components/about/AboutHeroSection';
import ScrollingTicker from '../components/home/ScrollingTicker';
import DoctorProfileSection from '../components/about/DoctorProfileSection';
import CTABanner from '../components/about/CTABanner';
import CertificationsSection from '../components/about/CertificationsSection';
import AcademicResearchSection from '../components/about/AcademicResearchSection';
import CertificatesGallery from '../components/about/CertificatesGallery';
import ExpertiseSection from '../components/about/ExpertiseSection';
import PhilosophySection from '../components/about/PhilosophySection';
import FinalCTASection from '../components/about/FinalCTASection';

export default function AboutPage() {


  return (
    <>
      <AboutHeroSection />
      <ScrollingTicker/>
      <DoctorProfileSection />
      <CTABanner />
      <CertificationsSection />
      <CertificatesGallery />
      <AcademicResearchSection />
      <ExpertiseSection />
      <PhilosophySection />
      <FinalCTASection />
    </>
  );
}
