import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ServicesSection() {
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
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 flex justify-start"
                    >
                        <div className="w-full max-w-md">
                            <img
                                src="/doctor/pic-23.jpg"
                                alt="Services"
                                className="w-full h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="order-1 lg:order-2"
                    >
                        <motion.span variants={fadeInUp} className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            {t('services.title')}
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            {t('services.subtitle')}
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 mb-8 leading-relaxed">
                            {t('services.description')}
                        </motion.p>

                        <div className="grid md:grid-cols-2 gap-8 mt-10">
                            {/* Reconstructive */}
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-puzzle-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {t('services.reconstructive.title')}
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {[0, 1, 2, 3].map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>{t(`services.reconstructive.items.${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Hand Surgery */}
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-hand-heart-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {t('services.hand.title')}
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {[0, 1, 2, 3].map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>{t(`services.hand.items.${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Aesthetic & Body Contouring */}
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-magic-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {t('services.aesthetic.title')}
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {[0, 1, 2, 3].map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>{t(`services.aesthetic.items.${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Burns */}
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-stethoscope-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        {t('services.burns.title')}
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {[0, 1, 2, 3].map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                                <span>{t(`services.burns.items.${i}`)}</span>
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
                                {t('services.bookNow')}
                                <i className="ri-calendar-check-line"></i>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
