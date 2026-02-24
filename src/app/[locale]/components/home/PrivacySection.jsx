import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function PrivacySection() {
    const t = useTranslations('home');
    return (
        <section className="py-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] relative overflow-hidden">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
            >
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </motion.div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center text-white"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6"
                    >
                        {t('privacy.title')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl lg:text-4xl font-bold mb-6"
                    >
                        {t('privacy.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-lg leading-relaxed opacity-95"
                    >
                        {t('privacy.description')}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
