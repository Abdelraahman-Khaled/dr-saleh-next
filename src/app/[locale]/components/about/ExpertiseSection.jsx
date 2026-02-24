'use client';
import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ExpertiseSection() {
    const t = useTranslations('aboutPage.expertise');
    const expertiseAreas = [
        t('areas.a1'),
        t('areas.a2'),
        t('areas.a3'),
        t('areas.a4'),
        t('areas.a5'),
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{t('title')}</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t('description')}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ul className="space-y-4">
                            {expertiseAreas.map((area, idx) => (
                                <motion.li
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 bg-[#17a2b8] rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="ri-check-line text-white"></i>
                                    </div>
                                    <span className="text-gray-800 font-medium">{area}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 bg-white rounded-2xl p-6 shadow-sm"
                >
                    <p className="text-gray-600 mb-4">
                        {t('footer')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#17a2b8] font-medium hover:gap-3 transition-all cursor-pointer"
                    >
                        {t('cta')}
                        <i className="ri-arrow-left-line"></i>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
