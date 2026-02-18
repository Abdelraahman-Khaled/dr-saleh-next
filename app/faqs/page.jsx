'use client';
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import ScrollTicker from '../components/home/ScrollingTicker';
import FaqAccordion from '../components/FaqAccordion';
import { getFaqs } from '../../lib/api/faq';
import { LanguageContext } from '../../context/LanguageContext';
import Link from 'next/link';

export default function FaqsPage() {
  const { language } = useContext(LanguageContext);

  const { data: faqs = [], isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: getFaqs,
    refetchInterval: 5000,
  });

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Elegant%20frequently%20asked%20questions%20concept%20featuring%20large%20stylized%20question%20mark%20symbols%20floating%20above%20open%20book%20with%20glowing%20pages%20surrounded%20by%20lightbulbs%20representing%20answers%20and%20knowledge%20in%20modern%20turquoise%20teal%20color%20palette%20with%20soft%20gradients%20clean%20minimalist%20aesthetic%20professional%20medical%20consultation%20theme%20abstract%20geometric%20shapes%20and%20smooth%20lighting%20creating%20sense%20of%20clarity%20understanding%20and%20helpful%20information&width=1920&height=600&seq=faqs-hero-new-design-v7&orientation=landscape)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="text-center text-white">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
              <Link href="/" className="hover:underline cursor-pointer">
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <i className={language === 'ar' ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'}></i>
              <span>{language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {language === 'ar' ? 'إجابات على أسئلتك' : 'Answers to Your Questions'}
            </h1>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'نجيب على أكثر الأسئلة شيوعاً حول جراحات التجميل والترميم'
                : 'We answer the most frequently asked questions about plastic and reconstructive surgery'}
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <ScrollTicker />

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse">
                    <div className="flex justify-between items-center gap-4">
                      <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {faqs.length > 0 ? (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#17a2b8] rounded-full flex items-center justify-center">
                        <i className="ri-question-line text-white"></i>
                      </div>
                      {language === 'ar' ? 'الأسئلة العامة' : 'General Questions'}
                    </h2>
                    <FaqAccordion faqs={faqs} language={language} />
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    {language === 'ar' ? 'لا توجد أسئلة حالياً' : 'No questions found'}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#17a2b8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-question-answer-line text-[#17a2b8] text-4xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'لم تجد إجابة سؤالك؟' : 'Didn\'t find your answer?'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'ar'
                ? 'لا تتردد في التواصل معنا مباشرة. فريقنا جاهز للإجابة على جميع استفساراتك'
                : 'Do not hesitate to contact us directly. Our team is ready to answer all your inquiries'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer"
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <i className={language === 'ar' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'}></i>
              </Link>
              <a
                href="https://wa.me/966508277780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                {language === 'ar' ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
}
