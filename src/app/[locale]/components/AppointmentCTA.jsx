import { Link } from '../../../navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AppointmentCTA() {
    const t = useTranslations('home');
    return (
        <section
            className="md:pt-8 lg:pt-16 xl:pt-24 bg-[#17a2b8] overflow-visible relative flex items-center py-20 lg:py-0"
            style={{ backgroundImage: 'url(/assets/pattern.webp)' }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#17a2b8]/95 to-[#138496]/95 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Column - Hidden on mobile, shown on large screens */}
                    <div className="hidden lg:block order-1 relative h-[500px]">
                        <div className="absolute bottom-0 w-full h-[120%] flex items-end justify-center pointer-events-none">
                            {/* Decorative Rotating Frame */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-10 w-[480px] h-[480px] border border-white/10 rounded-full"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                            </motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-20 w-[420px] h-[420px] border border-white/5 rounded-full"
                            >
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
                            </motion.div>

                            {/* Floating Icons */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-32 right-12 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl rotate-12 flex items-center justify-center shadow-lg border border-white/20 z-20"
                            >
                                <i className="ri-calendar-check-line text-3xl text-white"></i>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-48 left-8 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full -rotate-12 flex items-center justify-center shadow-lg border border-white/20 z-20"
                            >
                                <i className="ri-stethoscope-line text-2xl text-white"></i>
                            </motion.div>

                            {/* Glow Effect */}
                            <div className="absolute bottom-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl transform translate-y-1/4"></div>

                            <motion.img
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                src="/doctor/pic-20.png"
                                alt="د. صالح الخلف"
                                className="relative z-10 h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 text-white"
                    >
                        <div className="relative z-10 text-center lg:text-right">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6 shadow-lg"
                            >
                                {t('appointment.title')}
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                            >
                                {t('appointment.description')}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg mx-auto lg:mr-0 lg:ml-auto"
                            >
                                {t('appointment.subdescription')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            >
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-[#17a2b8] rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group"
                                >
                                    <span>{t('appointment.button')}</span>
                                    <i className="ri-calendar-check-line text-xl group-hover:scale-110 transition-transform"></i>
                                </Link>

                                <a
                                    href="https://wa.me/966508277780"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
                                >
                                    <span>{t('appointment.whatsapp')}</span>
                                    <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
