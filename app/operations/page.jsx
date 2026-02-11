'use client';
import OperationsHeroSection from '../components/operations/OperationsHeroSection';
import ScrollingTicker from '../components/home/ScrollingTicker';
import FaceSurgerySection from '../components/operations/FaceSurgerySection';
import BodySurgerySection from '../components/operations/BodySurgerySection';
import ReconstructiveSurgerySection from '../components/operations/ReconstructiveSurgerySection';
import OperationsGallerySection from '../components/operations/OperationsGallerySection';
import PrivacySection from '../components/home/PrivacySection';
import WhyChooseUsSection from '../components/operations/WhyChooseUsSection';
import OperationsCTASection from '../components/operations/OperationsCTASection';
import SurgicalCareIntroSection from '../components/operations/SurgicalCareIntroSection';
import DoctorIntroOperationsSection from '../components/operations/DoctorIntroOperationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
export default function OperationsPage() {


  return (
    <>
      <OperationsHeroSection />
      <ScrollingTicker />
      {/* <SurgicalCareIntroSection /> */}
      <DoctorIntroOperationsSection />
      <FaceSurgerySection />
      <BodySurgerySection />
      <ReconstructiveSurgerySection />
      <TestimonialsSection title="تجارب حقيقية. انطباعات صادقة." desc="نتائج حقيقية من مرضانا تعكس جودة العمل والاهتمام بالتفاصيل" bg="bg-[#f4f9fd]" />
      <OperationsGallerySection />
      <PrivacySection />
      <WhyChooseUsSection />
      <OperationsCTASection />
    </>
  );
}
