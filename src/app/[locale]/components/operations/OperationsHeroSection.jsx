'use client';
import { Link } from '../../../../navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function OperationsHeroSection() {
    const locale = useLocale();
    const t = useTranslations('operationsPage');
    const tNav = useTranslations('navbar');
    return (
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://dr-saaleh.netlify.app/assets/img/hero.webp)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/90 via-[#17a2b8]/80 to-[#138496]/90" />
            <div className="container mx-auto px-4 relative z-10 py-32">
                <div className="text-center text-white">
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-2 text-sm mb-6 font-medium"
                    >
                        <Link href="/" className="hover:text-white/80 transition-colors cursor-pointer">{tNav('links.home')}</Link>
                        <i className={`${locale === 'ar' ? "ri-arrow-left-s-line" : "ri-arrow-right-s-line"} text-white/60`}></i>
                        <span className="text-white/90">{t('hero.title')}</span>
                    </motion.nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 tracking-tight"
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
