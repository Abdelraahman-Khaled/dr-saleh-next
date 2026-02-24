'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
    const t = useTranslations('aboutPage.philosophy');

    const professionalValues = [
        t('values.items.v1'),
        t('values.items.v2'),
        t('values.items.v3'),
        t('values.items.v4'),
    ];

    const academicParticipation = [
        t('academic.items.a1'),
        t('academic.items.a2'),
        t('academic.items.a3'),
        t('academic.items.a4'),
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">{t('label')}</span>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        {t.rich('heading', {
                            strongInner: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Evidence-Based Approach */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                    <i className="ri-microscope-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t('evidenceBased.title')}</h3>
                            </div>
                            <p className="text-gray-600">
                                {t.rich('evidenceBased.content', {
                                    strongInner: (chunks) => <strong>{chunks}</strong>
                                })}
                            </p>
                        </div>

                        {/* Professional Values */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                    <i className="ri-shield-check-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t('values.title')}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                {t('values.content')}
                            </p>
                            <ul className="space-y-2">
                                {professionalValues.map((value, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <i className="ri-check-line text-[#17a2b8]"></i>
                                        <span className="text-gray-700">{value}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 text-sm mt-4 pt-4 border-t border-gray-200 italic">
                                {t('values.footer')}
                            </p>
                        </div>

                        {/* Academic Participation */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                                    <i className="ri-graduation-cap-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t('academic.title')}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                {t('academic.content')}
                            </p>
                            <ul className="space-y-2">
                                {academicParticipation.map((activity, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <i className="ri-check-line text-[#17a2b8]"></i>
                                        <span className="text-gray-700">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-end"
                    >
                        <img
                            src="/doctor/pic-6.jpg"
                            alt="Vision"
                            className="w-[63%] rounded-3xl shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
