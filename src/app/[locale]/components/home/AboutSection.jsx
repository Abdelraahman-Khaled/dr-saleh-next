import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutSection() {
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
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeInUp} className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('about.badge')}
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            {t('about.title')}
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 mb-8 leading-relaxed">
                            {t('about.description')}
                        </motion.p>

                        <div className="space-y-6">
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-user-smile-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">{t('about.features.0.title')}</h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {[0, 1, 2, 3, 4].map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>{t(`about.features.0.items.${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-heart-pulse-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {t('about.features.1.title')}
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {[0, 1, 2, 3].map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>{t(`about.features.1.items.${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div variants={fadeInUp}>
                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                            >
                                {t('about.button')}
                                <i className="ri-calendar-check-line"></i>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-end"
                    >
                        <div className="w-full max-w-md">
                            <img
                                src="/doctor/pic-24.jpeg"
                                alt="Doctor"
                                className="w-full h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
