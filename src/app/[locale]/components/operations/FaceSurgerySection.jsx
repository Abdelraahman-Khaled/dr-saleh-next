'use client';
import { Link } from '../../../../navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function FaceSurgerySection() {
    const locale = useLocale();
    const t = useTranslations('operationsPage.specialties.face');

    const faceOperations = [
        {
            title: t('cosmetic.items.rhinoplasty.title'),
            description: t('cosmetic.items.rhinoplasty.description'),
            icon: 'ri-puzzle-line'
        },
        {
            title: t('cosmetic.items.facelift.title'),
            description: t('cosmetic.items.facelift.description'),
            icon: 'ri-user-smile-line'
        },
        {
            title: t('cosmetic.items.blepharoplasty.title'),
            description: t('cosmetic.items.blepharoplasty.description'),
            icon: 'ri-eye-line'
        },
        {
            title: t('cosmetic.items.jawline.title'),
            description: t('cosmetic.items.jawline.description'),
            icon: 'ri-user-line'
        },
        {
            title: t('cosmetic.items.fatTransfer.title'),
            description: t('cosmetic.items.fatTransfer.description'),
            icon: 'ri-drop-line'
        },
        {
            title: t('cosmetic.items.lipLift.title'),
            description: t('cosmetic.items.lipLift.description'),
            icon: 'ri-heart-line'
        },
    ];

    const noseOperations = [
        {
            title: t('reconstructive.items.trauma.title'),
            description: t('reconstructive.items.trauma.description'),
            icon: 'ri-first-aid-kit-line'
        },
        {
            title: t('reconstructive.items.congenital.title'),
            description: t('reconstructive.items.congenital.description'),
            icon: 'ri-heart-pulse-line'
        },
        {
            title: t('reconstructive.items.functionalNose.title'),
            description: t('reconstructive.items.functionalNose.description'),
            icon: 'ri-lungs-line'
        },
        {
            title: t('reconstructive.items.scars.title'),
            description: t('reconstructive.items.scars.description'),
            icon: 'ri-scissors-cut-line'
        },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
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
                            <div className="bg-gradient-to-l from-[#17a2b8]/5 to-transparent p-6 rounded-2xl border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-user-smile-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{t('cosmetic.title')}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{t('cosmetic.description')}</p>
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {faceOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <i className={`${op.icon} text-[#17a2b8] text-xl mt-1 flex-shrink-0`}></i>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{op.title}</h4>
                                                <p className="text-sm text-gray-600">{op.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-l from-[#17a2b8]/5 to-transparent p-6 rounded-2xl border-r-4 border-[#17a2b8]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center">
                                        <i className="ri-puzzle-line text-[#17a2b8] text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{t('reconstructive.title')}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{t('reconstructive.description')}</p>
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {noseOperations.map((op, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <i className={`${op.icon} text-[#17a2b8] text-xl mt-1 flex-shrink-0`}></i>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{op.title}</h4>
                                                <p className="text-sm text-gray-600">{op.description}</p>
                                            </div>
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
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute -top-4 -right-4 w-full h-full bg-[#17a2b8]/10 rounded-3xl"
                            ></motion.div>
                            <motion.img
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                                src="/doctor/pic-23.jpg"
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
