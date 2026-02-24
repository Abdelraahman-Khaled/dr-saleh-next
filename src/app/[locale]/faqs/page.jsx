'use client';
import { useQuery } from '@tanstack/react-query';
import ScrollTicker from '../components/home/ScrollingTicker';
import FaqAccordion from '../components/FaqAccordion';
import { getFaqs } from '../../../lib/api/faq';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../navigation';
import { motion } from 'framer-motion';

export default function FaqsPage() {
  const locale = useLocale();
  const t = useTranslations('faqsPage');
  const tNav = useTranslations('navbar');

  const { data: faqs = [], isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: getFaqs,
    refetchInterval: 5000,
  });

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Elegant%20frequently%20asked%20questions%20concept%20featuring%20large%20stylized%20question%20mark%20symbols%20floating%20above%20open%20book%20with%20glowing%20pages%20surrounded%20by%20lightbulbs%20representing%20answers%20and%20knowledge%20in%20modern%20turquoise%20teal%20color%20palette%20with%20soft%20gradients%20clean%20minimalist%20aesthetic%20professional%20medical%20consultation%20theme%20abstract%20geometric%20shapes%20and%20smooth%20lighting%20creating%20sense%20of%20clarity%20understanding%20and%20helpful%20information&width=1920&height=600&seq=faqs-hero-new-design-v7&orientation=landscape)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="text-center text-white">
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90"
            >
              <Link href="/" className="hover:underline cursor-pointer">
                {tNav('links.home')}
              </Link>
              <i className={locale === 'ar' ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'}></i>
              <span>{tNav('links.faqs')}</span>
            </motion.nav>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold mb-6 font-heading"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl opacity-95 max-w-2xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>
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
                      {t('general')}
                    </h2>
                    <FaqAccordion faqs={faqs} />
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    {t('noQuestions')}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-20 h-20 bg-[#17a2b8]/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="ri-question-answer-line text-[#17a2b8] text-4xl"></i>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              {t('stillHaveQuestions.title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('stillHaveQuestions.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {t('stillHaveQuestions.contact')}
                  <i className={locale === 'ar' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'}></i>
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="https://wa.me/966508277780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                {t('stillHaveQuestions.whatsapp')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
