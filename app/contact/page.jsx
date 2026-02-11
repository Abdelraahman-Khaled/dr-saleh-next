'use client';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ScrollingTicker from '../components/home/ScrollingTicker';
import ContactFormSection from '../components/contact/ContactFormSection';
import DisclaimersSection from '../components/contact/DisclaimersSection';

export default function ContactPage() {

  return (
    <>
      <ContactHeroSection />
      <ScrollingTicker />
      <ContactFormSection />
      <DisclaimersSection />
    </>
  );
}
