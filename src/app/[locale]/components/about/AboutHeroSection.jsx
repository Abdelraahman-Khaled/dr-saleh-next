'use client';
import { Link } from '../../../../navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutHeroSection() {
    const t = useTranslations('aboutPage');
    const tNav = useTranslations('navbar');
    const locale = useLocale();

    return (
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Elegant%20modern%20plastic%20surgery%20clinic%20interior%20with%20premium%20medical%20equipment%20stethoscope%20surgical%20tools%20on%20clean%20white%20surface%20teal%20accent%20colors%20professional%20healthcare%20environment%20no%20people%20abstract%20medical%20concept&width=1920&height=600&seq=about-hero-new-3&orientation=landscape)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
            <div className="container mx-auto px-4 relative z-10 py-32">
                <div className="text-center text-white">
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90"
                    >
                        <Link href="/" className="hover:underline cursor-pointer">{tNav('links.home')}</Link>
                        <i className={locale === 'ar' ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'}></i>
                        <span>{tNav('links.about')}</span>
                    </motion.nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl lg:text-5xl font-bold mb-6"
                    >
                        {tNav('links.about')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl opacity-95 max-w-2xl mx-auto"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
