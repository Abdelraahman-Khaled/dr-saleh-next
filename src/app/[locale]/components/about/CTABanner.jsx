'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '../../../../navigation';

export default function CTABanner() {
    const t = useTranslations('aboutPage.ctaBanner');
    const locale = useLocale();

    return (
        <section className="py-20 relative overflow-hidden bg-[#1a1f2e]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17a2b8]/20 to-transparent opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#17a2b8] rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#138496] rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <i className="ri-double-quotes-l text-4xl text-[#17a2b8] mb-6 inline-block opacity-80"></i>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('title')}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            {t('subtitle')}
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#17a2b8] hover:bg-[#138496] transition-colors rounded-full text-white font-bold text-lg shadow-xl shadow-[#17a2b8]/20"
                            >
                                <span>{t('button')}</span>
                                <i className={`ri-arrow-${locale === 'ar' ? 'left' : 'right'}-line`}></i>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
