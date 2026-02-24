import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function DoctorIntroSection() {
    const t = useTranslations('home');

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="gap-12 items-center max-w-6xl mx-auto text-center"
                >
                    {/* Content Area */}
                    <div>
                        <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-[#17a2b8]/10 text-[#17a2b8] rounded-full text-sm font-semibold mb-4">
                            {t('doctorIntro.title')}
                        </motion.div>
                        <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {t('doctorIntro.subtitle')}
                        </motion.h2>

                        <motion.div variants={itemVariants} className="space-y-6 text-gray-600 leading-relaxed text-lg mb-8">
                            <p>
                                {t('doctorIntro.description')}
                            </p>
                        </motion.div>

                        {/* Call to Action Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-all shadow-lg whitespace-nowrap"
                            >
                                {t('doctorIntro.button')}
                                <i className="ri-arrow-right-line rtl:rotate-180"></i>
                            </Link>

                            <a
                                href="https://wa.me/966508277780"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20BA5A] transition-all shadow-lg whitespace-nowrap"
                            >
                                {t('doctorIntro.whatsapp')}
                                <i className="ri-whatsapp-line"></i>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
