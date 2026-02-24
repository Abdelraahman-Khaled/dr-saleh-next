import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function PatientJourneySection() {
    const t = useTranslations('home');

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#17a2b8] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#17a2b8] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                        {t('patientJourney.title')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {t('patientJourney.subtitle')}
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#17a2b8] via-[#17a2b8] to-[#17a2b8] origin-left transform -translate-y-1/2"
                        ></motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid lg:grid-cols-5 gap-8 lg:gap-4"
                        >
                            {[
                                { num: 1, title: t('patientJourney.steps.0.title'), icon: 'ri-calendar-check-line' },
                                { num: 2, title: t('patientJourney.steps.1.title'), icon: 'ri-file-list-3-line' },
                                { num: 3, title: t('patientJourney.steps.2.title'), icon: 'ri-clipboard-line' },
                                { num: 4, title: t('patientJourney.steps.3.title'), icon: 'ri-surgical-mask-line' },
                                { num: 5, title: t('patientJourney.steps.4.title'), icon: 'ri-heart-pulse-line' },
                            ].map((step) => (
                                <motion.div key={step.num} variants={fadeInUp} className="relative">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-6">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-full flex items-center justify-center shadow-xl relative z-10 transform hover:scale-110 transition-transform duration-300">
                                                <span className="text-white text-2xl font-bold">{step.num}</span>
                                            </div>
                                            <div className="absolute inset-0 bg-[#17a2b8] rounded-full blur-xl opacity-30 animate-pulse"></div>
                                        </div>
                                        <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow min-h-[140px] flex flex-col justify-center w-full">
                                            <div className="w-10 h-10 bg-[#17a2b8]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <i className={`${step.icon} text-[#17a2b8] text-xl`}></i>
                                            </div>
                                            <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-center mt-12"
                    >
                        <a
                            href="https://wa.me/966508277780"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-xl"
                        >
                            <i className="ri-whatsapp-line text-2xl"></i>
                            {t('hero.buttons.contactClinic')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
