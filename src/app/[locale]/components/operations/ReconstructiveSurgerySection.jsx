'use client';
import { Link } from '../../../../navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function ReconstructiveSurgerySection() {
    const locale = useLocale();
    const t = useTranslations('operationsPage.specialties.reconstructive');
    const burnOperations = [
        { title: t('burns.items.trauma'), icon: 'ri-hospital-line' },
        { title: t('burns.items.congenital'), icon: 'ri-heart-add-line' },
        { title: t('burns.items.tumors'), icon: 'ri-surgical-mask-line' },
        { title: t('burns.items.scars'), icon: 'ri-bandage-line' },
        { title: t('burns.items.burns'), icon: 'ri-fire-line' },
        { title: t('burns.items.function'), icon: 'ri-hand-heart-line' },
        { title: t('burns.items.scarsImprovement'), icon: 'ri-magic-line' },
        { title: t('burns.items.movement'), icon: 'ri-time-line' },
        { title: t('burns.items.qualityOfLife'), icon: 'ri-mental-health-line' },
    ];

    const handOperations = [
        { title: t('hand.items.repair'), icon: 'ri-hand-coin-line' },
        { title: t('hand.items.complex'), icon: 'ri-first-aid-kit-line' },
        { title: t('hand.items.microsurgery'), icon: 'ri-microscope-line' },
        { title: t('hand.items.function'), icon: 'ri-restart-line' },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">{t('label')}</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {t('heading')}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {t('description')}
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-heart-pulse-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{t('burns.title')}</h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {burnOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                                            <i className="ri-check-double-line text-[#17a2b8]"></i>
                                            <span className="text-sm">{op.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-hand-heart-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{t('hand.title')}</h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {handOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                                            <i className="ri-check-double-line text-[#17a2b8]"></i>
                                            <span className="text-sm">{op.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-colors shadow-md whitespace-nowrap cursor-pointer"
                            >
                                {useTranslations('operationsPage.cta')('button')}
                                <i className={locale === 'ar' ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2  "
                    >
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute -bottom-4 -left-4 w-full h-full bg-[#17a2b8]/10 rounded-3xl"
                            ></motion.div>
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                                src="/doctor/pic-15.jpeg"
                                alt={t('heading')}
                                className="relative z-10 w-full rounded-3xl shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
