'use client';

import { Link } from '../../../navigation';
import { useTranslations, useLocale } from 'next-intl';
import ScrollTicker from '../components/home/ScrollingTicker';
import { motion } from 'framer-motion';

export default function PatientJourneyPage() {
  const t = useTranslations('patientJourney');
  const locale = useLocale();

  const journeySteps = [
    {
      number: 1,
      title: t('steps.step1.title'),
      stage: t('steps.step1.stage'),
      image: '/patient/1.jpg',
      description: t('steps.step1.description'),
      icon: 'ri-calendar-check-line',
      details: t.raw('steps.step1.details'),
    },
    {
      number: 2,
      title: t('steps.step2.title'),
      stage: t('steps.step2.stage'),
      image: '/patient/2.jpg',
      description: t('steps.step2.description'),
      icon: 'ri-stethoscope-line',
      details: t.raw('steps.step2.details'),
      note: t('steps.step2.note'),
    },
    {
      number: 3,
      title: t('steps.step3.title'),
      stage: t('steps.step3.stage'),
      image: '/patient/3.jpg',
      description: t('steps.step3.description'),
      icon: 'ri-file-list-3-line',
      details: t.raw('steps.step3.details'),
    },
    {
      number: 4,
      title: t('steps.step4.title'),
      stage: t('steps.step4.stage'),
      image: '/patient/4.jpg',
      description: t('steps.step4.description'),
      icon: 'ri-surgical-mask-line',
      details: t.raw('steps.step4.details'),
      note: t('steps.step4.note'),
    },
    {
      number: 5,
      title: t('steps.step5.title'),
      stage: t('steps.step5.stage'),
      image: '/patient/5.jpg',
      description: t('steps.step5.description'),
      icon: 'ri-heart-pulse-line',
      details: t.raw('steps.step5.details'),
    },
    {
      number: 6,
      title: t('steps.step6.title'),
      stage: t('steps.step6.stage'),
      image: '/patient/6.jpg',
      description: t('steps.step6.description'),
      icon: 'ri-customer-service-2-line',
      details: t.raw('steps.step6.details'),
      note: t('steps.step6.note'),
    },
  ];

  const whyChooseItems = t.raw('whyChoose.items');

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://readdy.ai/api/search-image?query=Patient%20care%20journey%20concept%20with%20warm%20welcoming%20medical%20environment%20showing%20pathway%20steps%20consultation%20room%20elegant%20teal%20and%20white%20color%20scheme%20professional%20healthcare%20setting%20with%20soft%20lighting%20and%20modern%20clean%20aesthetic&width=1920&height=600&seq=patient-journey-hero-new-1&orientation=landscape"
            alt={t('hero.title')}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/80 via-[#17a2b8]/70 to-[#138496]/80"></div>
        </motion.div>
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-4 font-heading"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-white/90"
            >
              <Link href="/" className="hover:text-white transition-colors">{t('hero.breadcrumb.home')}</Link>
              <span>/</span>
              <span>{t('hero.breadcrumb.journey')}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <ScrollTicker />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`bg-white rounded-3xl shadow-xl p-8 lg:p-12 border-[#17a2b8] ${locale === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('intro')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#17a2b8]/10 text-[#17a2b8] rounded-full text-sm font-semibold mb-4">
              {t('stepsSection.label')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-heading">{t('stepsSection.heading')}</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                key={step.number}
                className="relative mb-12 last:mb-0"
              >
                {/* Connector Line */}
                {index < journeySteps.length - 1 && (
                  <div className={`hidden lg:block absolute ${locale === 'ar' ? 'right-1/2' : 'left-1/2'} top-full w-1 h-12 bg-gradient-to-b from-[#17a2b8] to-[#17a2b8]/30 transform ${locale === 'ar' ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div>
                )}

                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-64 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17a2b8]/60 to-transparent"></div>
                      <div className={`absolute bottom-4 ${locale === 'ar' ? 'right-4' : 'left-4'} bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm`}>
                        <span className="text-[#17a2b8] font-bold text-lg">{step.stage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-full flex items-center justify-center shadow-xl z-10 relative">
                        <span className="text-white text-3xl font-bold">{step.number}</span>
                      </div>
                      <div className="absolute inset-0 bg-[#17a2b8] rounded-full blur-xl opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <Link href="/contact" className="block h-full cursor-pointer">
                        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-gray-100">
                          {/* Mobile Step Number */}
                          <div className="lg:hidden flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-full flex items-center justify-center">
                              <span className="text-white text-xl font-bold">{step.number}</span>
                            </div>
                            <span className="text-[#17a2b8] font-semibold">{step.stage}</span>
                          </div>

                          <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-[#17a2b8]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <i className={`${step.icon} text-[#17a2b8] text-2xl`}></i>
                            </div>
                            <div>
                              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 font-heading">{step.title}</h3>
                              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                                <div className="w-6 h-6 bg-[#17a2b8] rounded-full flex items-center justify-center flex-shrink-0">
                                  <i className="ri-check-line text-white text-xs"></i>
                                </div>
                                <span className="text-gray-700 text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>

                          {step.note && (
                            <div className={`mt-4 bg-[#17a2b8]/5 border-[#17a2b8] rounded-xl p-4 ${locale === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
                              <div className="flex items-start gap-3">
                                <i className="ri-information-line text-[#17a2b8] text-xl mt-0.5"></i>
                                <p className="text-gray-600 text-sm">{step.note}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">{t('whyChoose.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white/30">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="flex items-center gap-2 pt-2">
                    <i className="ri-check-double-line text-[#4ade80] text-xl"></i>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Quote */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
              <div className={`absolute top-6 ${locale === 'ar' ? 'right-6' : 'left-6'} text-[#17a2b8]/20`}>
                <i className={`${locale === 'ar' ? 'ri-double-quotes-r' : 'ri-double-quotes-l'} text-8xl`}></i>
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 relative z-10 font-medium italic">
                {t('quote.text')}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                  <i className="ri-user-3-line text-[#17a2b8] text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t('quote.author')}</h4>
                  <p className="text-gray-500">{t('quote.role')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://dr-saaleh.netlify.app/assets/img/cta-bg.jpg"
            alt={t('cta.title')}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#17a2b8]/95 to-[#138496]/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
              {t('cta.label')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">{t('cta.title')}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h4 className="font-bold text-lg mb-6">{t('cta.methodTitle')}</h4>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/966508277780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#128C7E] transition-colors whitespace-nowrap cursor-pointer shadow-md"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-white text-xl"></i>
                  </div>
                  <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                    <span className="block text-xs text-white/80">{t('cta.whatsapp.label')}</span>
                    <span className="block">{t('cta.whatsapp.text')}</span>
                  </div>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#17a2b8] text-white rounded-2xl font-bold hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer shadow-md"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-2-line text-white text-xl"></i>
                  </div>
                  <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                    <span className="block text-xs text-white/80">{t('cta.contact.label')}</span>
                    <span className="block">{t('cta.contact.text')}</span>
                  </div>
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-6">
                {t('cta.footer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-amber-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border-amber-500 ${locale === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-error-warning-line text-amber-600 text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 font-heading">{t('disclaimer.title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('disclaimer.content')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
